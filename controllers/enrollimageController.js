const multer = require('multer');
const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: 'AKIAV6DTOJCWPZASWPWC',
    secretAccessKey: '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'
});

const s3 = new AWS.S3();

// Create a multer instance for parsing form data
const upload = multer().array('image');

/**
 * @swagger
 * /enroll-image:
 *   post:
 *     summary: S3 이미지 저장
 *     tags:
 *       - S3 이미지 저장
 *     description:
 *       "이미지 업로드 (한장씩)"
 *     consumes:
 *       - "multipart/form-data"
 *     parameters:
 *       - name: "image"
 *         in: "formData"
 *         description: "이미지 파일"
 *         required: true
 *         type: "file"
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Parsing Error
 *       500:
 *         description: Internal Server Error
 */
const uploadImage = async (req, res) => {
    await upload(req, res, (err) => {
        if (err) {
            return res.status(400).send('Error parsing form data');
        }

        // Get the image data from the parsed form data
        const image = req.files[0];
        const params = {
            Bucket: 'daengbuhae-dev/enroll-image',
            Key: `${Date.now()}-${image.originalname}`,
            Body: image.buffer
        };

        // Upload the image to S3
        s3.upload(params, (err, data) => {
            if (err) {
                return res.status(500).send('Error uploading image to S3');
            }

            return res.status(200).send({ src: data.Location });
        });
    });
};

module.exports = { uploadImage };
