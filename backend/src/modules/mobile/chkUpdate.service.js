import model from '../../shared/models/link.model.js';
import redis, { ensureRedis } from '../../config/redis.js';

const VERSION_KEY = "mobile:check-update:version";
const CACHE_TTL = 60 * 60 * 24;

function getDayKey() {
    const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Sao_Paulo",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).formatToParts(new Date());

    const date = Object.fromEntries(
        parts.map(({ type, value }) => [type, value])
    );

    return `${date.year}-${date.month}-${date.day}`;
}

async function checkDatabase(lastSync) {
    const response = await model.exists({
        historicoAtualizacoes: {
            $gt: lastSync
        }
    });

    return response !== null;
}

export async function invalidateChkUpdateCache() {
    try {
        if (await ensureRedis()) {
            await redis.incr(VERSION_KEY);
        }
    } catch (error) {
        console.error("[Cache] Falha ao invalidar:", error.message);
    }
}

export default async function chkUpdate(last_sync) {
    const lastSync = new Date(last_sync);

    if (Number.isNaN(lastSync.getTime())) {
        throw new Error("Invalid last_sync parameter.");
    }

    const available = await ensureRedis();

    if (!available) {
        return await checkDatabase(lastSync);
    }

    try {
        const version = await redis.get(VERSION_KEY) ?? "0";

        const cacheKey = [
            "mobile",
            "check-update",
            version,
            lastSync.toISOString(),
            getDayKey()
        ].join(":");

        const cached = await redis.get(cacheKey);

        if (cached !== null) {
            return cached === "1";
        }

        const isUpdate = await checkDatabase(lastSync);

        await redis.set(
            cacheKey,
            isUpdate ? "1" : "0",
            { EX: CACHE_TTL }
        );

        return isUpdate;

    } catch (error) {
        console.error("[Cache] Erro:", error.message);

        return await checkDatabase(lastSync);
    }
}