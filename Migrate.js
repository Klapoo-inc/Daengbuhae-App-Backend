const fs = require('fs');
<<<<<<< HEAD
//asd
const Cosmetic = require('./models/cosmeticModel')
=======

const Cosmetic = require('./models/cosmeticingredientModel')
>>>>>>> ab7bbf316a63f3e646bfc18448cbc4fe605cee43

const data1 = JSON.parse(fs.readFileSync("cosmeticingredient_sql0215.json"));

Cosmetic.sync({force: false}).then(() => {
    Cosmetic.bulkCreate(data1).then(() => {
        console.log("Data1 imported successfully");
    });
}).catch(error => {
    console.log("Error creating table", error);
});
