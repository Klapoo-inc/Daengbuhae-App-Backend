const fs = require('fs');

const Cosmetic = require('./models/cosmeticModel')

const data1 = JSON.parse(fs.readFileSync("cosmetic_sql0208.json"));

Cosmetic.sync({force: false}).then(() => {
    Cosmetic.bulkCreate(data1).then(() => {
        console.log("Data1 imported successfully");
    });
}).catch(error => {
    console.log("Error creating table", error);
});
