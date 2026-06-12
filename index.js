const mongoose = require('mongoose');
main()
  .then((res)=>{
    console.log(" connection successful")
})
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema=new mongoose.Schema(
{
    name:String,
    age:Number,
    country:String,
});
const User=mongoose.model("User",userSchema);
// const employee=mongoose.model("employees",userSchema);
const user1=new User({
    name:"sathwik",
    age:56,
    country:"delhi",
});

user1.save();
// const user2=new User({
//     name:"siddhu",
//     age:65,
//     country:"mumabai",
// });
// user2.save()
//     .then((res)=>{
//         console.log('excuete');
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// User.insertMany([
//     {name:"sharif",age:56,country:"pune"},
//     {name:"akhil",age:89,country:"chodavaram"}
// ]).then((res)=>{
//     console.log(res);
// })
// User.findById("672f012dc1b7275ad38c46ca")
// .then((res)=>{
//   console.log(res);
// });
// User.updateOne({_id:'672f0d77673f9e66513d0243'},{name:"siddhu"})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log("error");
// })
// User.updateMany({age:{$gte:56}},{age:90})
// .then((res)=>{
//   console.log("multiple update");
// })
// .catch((err)=>{
//   console.log("error");
// })
// User.find()
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })
// User.findOneAndUpdate({name:"akhil"},{country:"govada"})
// .then((res)=>{
//   console.log(res);
// })
User.deleteMany({name:'sathwik'}).then(res=>{
  console.log(res);
});
 User.find()
 .then((res)=>{
     console.log(res);
 })
  .catch((err)=>{
   console.log(err);
});
// User.deleteMany({name:"sathwik"}).then((res)=>{
//   console.log(res);
// });