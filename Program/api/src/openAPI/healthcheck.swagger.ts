export const getHealthcheck = {
    tags: ['Health'],
    "description": "Get info of API",
    "operationId": "for the URL",
    "produces": [
        "application/json"
      ],
      "parameters": [],
      responses: {
        // response code
        200: {
          description: "Todos were obtained", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                type:'object',
                properties:{
                    statusCode:{
                        type:'string',
                        description:"Success identification number",
                        example:"10000"
                    },
                    message:{
                        type:'string',
                        description:"Description of Success",
                        example:"OK"
                    },
                    data: {
                      type: 'object',
                      properties: {
                        healthcheck: {
                          type: 'object',
                          properties: {
                            uptime: {
                              type: 'number',
                              description: 'Uptime system monitoring',
                              example: '15.918122586'
                            },
                            message:{
                              type:'string',
                              description:"Description of Success",
                              example:"OK"
                          },
                            timestamp: {
                              type: 'datetime',
                              description: 'The date and time of the request in ISO 8601 UTC format e.g. 2013-11-13T05:24:25Z',
                              example: '2022-01-05T02:29:21.000Z'
                            },
                            databaseOK:{
                              type:'boolean',
                              description:"Indicates availability of the data",
                              example:"true"
                          },
                          }
                        }
                      }
                    }
                }
            },
            },
          },
        },
      },
    }