const mongoose = require('mongoose');
main()
  .then((res)=>{
    console.log(" connection successful")
})
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const bookschema=new mongoose.Schema({
    title : {
        type:String,
        required:true
    },
    author:{
       type:String
    },
    content:{
        type:String
    },
    followers:{
        type:Number,
        default:0,
        min:[1,"followers are low"]
    }
});
const book =mongoose.model("book",bookschema);
 let book1=new book({
     title:"sathwik",
     author:"jame gosling",
     content:"adventure",
     followers:-100
});
book1.save().then((res)=>{
    console.log("saved successfully");
})
.catch((err)=>{
    console.log(err.errors.followers.properties.message);
});
// let book2=new book({
//     author:"hello",
//     content:"adventure"
// });
// book.insertMany(
//     {
//         name:"sathwik",
//         author:"mallesh",
//         content:"comedy"
//     },
// {
//     name:"narendra",
//     author:"ps rao",
//     content:"adventure"
// }).then((res)=>{
//     console.log("inserted successfully");
// })
// .catch(err=>{
//     console.log(err);
// });