//  Updating Documents

//  How to update documents in mongodb database ?
//             Query first approach

//     Approach 1: Query first
//     findById()
//     Modify its properties
//     save()

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

async function updateCourse(id) {
  // query first
  const course = await Course.findById(id);
  if (!course) return;
  //update
  course.isPublished = true;
  course.author = "Omar Saade";
  //   course.set({
  //     isPublished: true,
  //     author: "Another Author",
  //   });

  const result = await course.save();
  console.log(result);
}

updateCourse("63975c4a9236af3a60abbc7c");
