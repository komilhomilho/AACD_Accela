import { status } from "@grpc/grpc-js";

export class ArgumentError extends Error {
    constructor(details) {
        super(details);
        this.code = status.INVALID_ARGUMENT;
        this.details = details;
    }
}

export function wrapController(handlerFn) {
    return async (call, callback) => {
        try {
            const response = await handlerFn(call.request, call);
            return callback(null, response);
        } catch (err) {
            if (err instanceof ArgumentError) {
                console.error(`[validation] request blocked: ${err.details}`);
                return callback({
                    code: err.code,
                    details: err.details
                });
            }
            console.error("database or internal error:", err);
            return callback({
                code: status.INTERNAL,
                details: 'An internal error occurred while processing the request'
            });
        }
    }
}

export function wrapStreamController(handlerFn) {
    return async (call) => {
        try {
            await handlerFn(call.request, call); 
        } catch (err) {
            if (err instanceof ArgumentError) {
                console.error(`[validation] request blocked: ${err.details}`);
                call.emit('error', {
                    code: err.code,
                    details: err.details
                });
                return;
            }
            console.error("database or internal error:", err);
            call.emit('error', {
                code: status.INTERNAL,
                details: 'An internal error occurred while processing the request'
            });
        }
    }
}