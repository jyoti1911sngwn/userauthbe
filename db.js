const mongoose= require('mongoose');


// const mongoURI ="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%directConnection=true&ssl=false"

const connectToMongo = () =>{
    mongoose.connect("mongodb+srv://sangwanjyoti717@gmail.com:Joty@1911@cluster0.mongodb.net/authorization?retryWrites=true&w=majority").then(() => {
  console.log("database cnnected");}).catch((err) => {
  console.log("error while connecting to database",err)
})
}
    module.exports = connectToMongo;
