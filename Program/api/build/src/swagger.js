"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocument = void 0;
const about_swagger_1 = require("./openAPI/about.swagger");
const healthcheck_swagger_1 = require("./openAPI/healthcheck.swagger");
exports.swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'APIs Document',
        description: 'My project, your description here',
        termsOfService: '',
        contact: {
            name: 'Cristian dos Santos Amaral',
            email: 'cristian_amaral@hotmail.com',
            url: ''
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    /*
    servers: [
        {
            url: 'http://localhost:{port}/{basePath}',
            description: 'Local server',
            "variables": {
                "port": {
                    "enum": [
                        "3000"
                    ],
                    "default": "3000"
                },
                "basePath": {
                    "enum": [
                        "v1"
                    ],
                    "default": "v1"
                }
            }
        }
    ],
    tags: [
        {
            name: 'API'
        }
    ],
    */
    servers: [
        {
            url: "http://localhost:3000/v1/",
            description: "Local server"
        }
    ],
    paths: {
        "/about": {
            "get": about_swagger_1.getAbout
        },
        "/healthcheck": {
            "get": healthcheck_swagger_1.getHealthcheck
        }
    },
    "consumes": ["application/json"],
    "produces": ["application/json"]
};
//# sourceMappingURL=swagger.js.map