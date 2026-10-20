export class ArgumentError extends Error {
    constructor(details) {
        super(details);
        this.statusCode = 400;
        this.details = details;
    }
}

export function wrapController(handlerFn) {
    return async (req, res, next) => {
        try {
            await handlerFn(req, res, next);
        } catch (err) {
            if (err instanceof ArgumentError) {
                console.error(`[validation] request blocked: ${err.details}`);
                return res.status(err.statusCode).json({
                    error: "Bad Request",
                    details: err.details
                });
            }
            
            console.error("database or internal error:", err);
            return res.status(500).json({
                error: "Internal Server Error",
                details: "An internal error occurred while processing the request"
            });
        }
    };
}