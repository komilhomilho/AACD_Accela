export class ArgumentError extends Error {
    constructor(details) {
        super(details);
        this.statusCode = 400;
        this.details = details;
    }
}

export function wrapController(handlerFn) {
    return async (payload) => {
        try {
            console.log(`[Worker] link capture initialized`);
            
            const response = await handlerFn(payload);
            
            console.log(`[Worker] link capture complete`);
            return response

        } catch (err) {
            if (err instanceof ArgumentError) {
                console.error(`[Worker Validation Error]: ${err.details}`);
                return null;
            }
            
            console.error("[Worker Internal Error]:", err.message);
            return null;
        }
    }
}