const mongoose = require(`mongoose`);

async function connectDB() {
    await mongoose.connect("mongodb://Kartikeyk:TGWKartikey2095@ac-ijw3fuw-shard-00-00.jvnhasw.mongodb.net:27017,ac-ijw3fuw-shard-00-01.jvnhasw.mongodb.net:27017,ac-ijw3fuw-shard-00-02.jvnhasw.mongodb.net:27017/kartikey?ssl=true&replicaSet=atlas-3ugo5r-shard-0&authSource=admin&appName=TGWKartikey");

    console.log("Connected to MongoDB");
}


module.exports = connectDB;