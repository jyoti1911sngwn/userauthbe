const mongoose= require('mongoose');


// const mongoURI ="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%directConnection=true&ssl=false"

const connectToMongo = () =>{
    mongoose.connect("mongodb+srv://sangwanjyoti717:v9IsWxIFN8koFpkX@cluster0.i1dux.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
  console.log("database cnnected");}).catch((err) => {
  console.log("error while connecting to database",err)
})
}
    module.exports = connectToMongo;
