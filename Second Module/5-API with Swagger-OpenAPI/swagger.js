const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Product Management API",
      version: "1.0.0",
      description: "Self-documenting REST API using Swagger and OpenAPI"
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server"
      }
    ]
  },
  apis: ["./routes/*.js"]
};

module.exports = swaggerJSDoc(options);
