const fs = require('fs');

const Cosmetic = require('./models/cosmeticModel');
const {Op} = require("sequelize");

const files = fs.readdirSync('./image1218');

console.log(files.length);
async function run() {
    const data = await Cosmetic.findAll({
        where: {
            src: {
                [Op.ne]: ''
            }
        }
    });
    let n = 0;
    let k = 0;
    console.log(data.length);
    // data[0].update({ src: 'dddd'});
    for (const i of data) {
        let is = 0;
        for (const j in files) {
            const name = 'https://daengbuhae-dev.s3.ap-northeast-2.amazonaws.com/cosmetic-image/' + files[j];
            if (i.src === name) {
                // console.log(i.src);
                // console.log(name);
                is = 1;
                break;
            }
        }
        if (!is) {
            console.log(i.src);
            await i.update({ src: '' });
        }
    }
}

run().then(() =>
    console.log('complete!')
)
