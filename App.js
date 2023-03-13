require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const cosmeticRouter = require('./routes/cosmeticRouter')
const ingredientRouter = require('./routes/ingredientRouter')
const cosmeticlikeRouter = require('./routes/cosmeticlikeRouter')
const cosmeticreviewRouter = require('./routes/cosmeticreviewRouter')
const enrollRouter = require('./routes/enrollRouter')
const enrollimageRouter = require('./routes/enrollimageRouter')
const petRouter = require('./routes/petRouter')
const petimageRouter = require('./routes/petimageRouter')
const reviewimageRouter = require('./routes/reviewimageRouter')
const usersearchRouter = require('./routes/usersearchRouter')
const reviewreportRouter = require('./routes/reviewreportRouter')
const userRouter = require('./routes/userRouter')
const initialRouter = require('./routes/initialRouter')
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

app.use('/',initialRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/cosmetic', cosmeticRouter);
app.use('/ingredient', ingredientRouter);
app.use('/cosmeticlike', cosmeticlikeRouter);
app.use('/cosmeticreview', cosmeticreviewRouter);
app.use('/enroll', enrollRouter);
app.use('/enroll-image', enrollimageRouter);
app.use('/pet', petRouter);
app.use('/pet-image', petimageRouter);
app.use('/review-image', reviewimageRouter);
app.use('/usersearch', usersearchRouter);
app.use('/user', userRouter);
app.use('/reviewreport', reviewreportRouter);

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
