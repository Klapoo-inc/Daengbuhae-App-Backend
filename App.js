require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const cosmeticRouter = require('./routes/cosmeticRouter')
const ingredientRouter = require('./routes/ingredientRouter')
const { sequelize } = require('./models/sequelize');
const swaggerJsdoc = require("swagger-jsdoc");
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: '댕부해 APP API',
            version: '1.0.0',
            description: '댕부해 API for interacting with a MySQL database'
        },
        // securityDefinitions: {
        //     Bearer: {
        //         type: 'apiKey',
        //         name: 'Authorization',
        //         in: 'header',
        //     },
        // },
    },
    apis: ['./controllers/*.js']
};
const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/cosmetic', cosmeticRouter);
app.use('/ingredient', ingredientRouter);

sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
        sequelize.sync();
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
