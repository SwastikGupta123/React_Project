const mongoose = require('mongoose');
var mongoURI = 'mongodb://yummee:yummee@ac-iw9mqxb-shard-00-00.itdm527.mongodb.net:27017,ac-iw9mqxb-shard-00-01.itdm527.mongodb.net:27017,ac-iw9mqxb-shard-00-02.itdm527.mongodb.net:27017/yummeemern?ssl=true&replicaSet=atlas-df2kab-shard-0&authSource=admin&retryWrites=true&w=majority';
const mongoDB = async() => {
     await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---" + err)
        else {
    console.log("connected");
    const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray( async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("food_Category");
                categoryCollection.find({}).toArray(function (err, Catdata) {
                if (err) console.log(err);
                else {
                    global.food_items = data;
                    global.food_Category = Catdata;
                    //console.log(global.food_items);
                }
            })
            })
        }
});
}
module.exports = mongoDB;