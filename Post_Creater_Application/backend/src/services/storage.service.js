const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(fileBuffer) {
    const result = await imagekit.files.upload({
        file: fileBuffer.toString("base64"),
        fileName: "image.jpg",
    });

    return result;
}

module.exports = uploadFile;
// const ImageKit = require("@imagekit/nodejs");

// console.log("ImageKit =", ImageKit);

// const imagekit = new ImageKit({
//   publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
//   privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
//   urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
// });

// console.log("imagekit =", imagekit);
// console.log("upload =", imagekit.upload);
