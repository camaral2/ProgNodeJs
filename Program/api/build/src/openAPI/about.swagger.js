"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbout = void 0;
exports.getAbout = {
    tags: ['About'],
    "description": "Get info of API",
    "operationId": "get",
    "produces": [
        "application/json"
    ],
    "parameters": [],
    responses: {
        // response code
        200: {
            description: "API information",
            content: {
                // content-type
                "application/json": {
                    schema: {
                        type: 'object',
                        properties: {
                            statusCode: {
                                type: 'string',
                                description: "Success identification number",
                                example: "10000"
                            },
                            message: {
                                type: 'string',
                                description: "Version of API",
                                example: "api - 1.0.0"
                            }
                        }
                    },
                },
            },
        },
    },
};
//# sourceMappingURL=about.swagger.js.map