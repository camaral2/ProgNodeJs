import { getAbout } from './openAPI/about.swagger';
import { getHealthcheck } from './openAPI/healthcheck.swagger';

export const swaggerDocument = {
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
    servers:[
        {
            url:"http://localhost:3000/v1/",
            description:"Local server"
        },
        {
            url:"https://app-job1.herokuapp.com/v1/",
            description:"Production server"
        },

    ],
    paths: {
        "/about": {
            "get": getAbout
        },
        "/healthcheck": {
            "get": getHealthcheck
        }
    },
    "consumes": ["application/json"],
    "produces": ["application/json"]
}