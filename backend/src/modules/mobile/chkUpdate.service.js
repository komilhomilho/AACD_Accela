
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
            console.log.green("[Cache] Version Increment.");
        }
    } catch (error) {
        console.error("[Cache] Falha ao invalidar:", error.message);
    }
}

export default async function chkUpdate(last_sync) {
    const timestamp = Number(last_sync);

    if (
        last_sync === null ||
        last_sync === undefined ||
        String(last_sync).trim() === "" ||
        !Number.isFinite(timestamp) ||
        !Number.isSafeInteger(timestamp) ||
        timestamp < 0
    ) {
        throw new Error(
            "Invalid last_sync parameter. Expected Unix timestamp in milliseconds."
        );
    }

    const lastSync = new Date(timestamp);

    // 1. Verifica se o Redis está disponível.
    const redisAvailable = await ensureRedis();

    // 2. Sem Redis, consulta diretamente o MongoDB.
    if (!redisAvailable) {
        return await checkDatabase(lastSync);
    }

    let cacheKey;

    // 3. Tenta encontrar o resultado no Redis.
    try {
        const version = await redis.get(VERSION_KEY) ?? "0";

        cacheKey = [
            "mobile",
            "check-update",
            version,
            lastSync.toISOString(),
            getDayKey()
        ].join(":");

        const cached = await redis.get(cacheKey);

        if (cached !== null) {
            console.log.green("[Cache] hit");
            return cached === "1";
        }

        console.log.yellow("[Cache] miss");

    } catch (error) {
        console.error("[Cache] Erro na leitura:", error.message);
        return await checkDatabase(lastSync);
    }

    // 4. Cache vazio: consulta o MongoDB.
    const isUpdate = await checkDatabase(lastSync);

    // 5. Tenta armazenar o resultado.
    try {
        await redis.set(
            cacheKey,
            isUpdate ? "1" : "0",
            { EX: CACHE_TTL }
        );
    } catch (error) {
        console.error("[Cache] Erro ao salvar:", error.message);
    }

    return isUpdate;
}
