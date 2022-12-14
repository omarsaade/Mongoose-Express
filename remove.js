const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to Mongodb..."))
  .catch((err) => console.log("Could not connect to mongodb...", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

async function removeCourse(id) {
  //   const result = await Course.deleteMany({isPublished: true });
  const course = await Course.findByIdAndRemove(id);
  console.log(course);
  //   const course = await Course.deleteMany({ _id: id });
  //   console.log(course);
}
removeCourse("63975c4e8d6ada1f00c44029");
/*






//                       delete one




*/
// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://localhost/playground")
//   .then(() => console.log("Connected to Mongodb..."))
//   .catch((err) => console.log("Could not connect to mongodb...", err));

// const courseSchema = new mongoose.Schema({
//   name: String,
//   author: String,
//   tags: [String],
//   date: { type: Date, default: Date.now },
//   isPublished: Boolean,
//   price: Number,
// });

// const Course = mongoose.model("Course", courseSchema);

// async function removeCourse(id) {
//   const course = await Course.deleteOne({ _id: id });
//   console.log(course);
// }
// removeCourse("63975cd920f8301ff88d62e4");
