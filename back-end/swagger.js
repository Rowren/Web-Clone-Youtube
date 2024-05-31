const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'YouTube Clone API',
      version: '1.0.0',
      description: 'API documentation for YouTube Clone',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./server.js'], // Adjust this path to point to your API files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerSpec, swaggerUi };
