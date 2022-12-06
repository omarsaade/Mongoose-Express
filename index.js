const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

/*
now we need to compile this schema into a model
     john hye instance men el class human
        Classes   , objects
         Human    , John
         Course   , nodeCourse
*/

// Course is a class
const Course = mongoose.model("Course", courseSchema);

//object course
const course = new Course({
  name: "Node.js Course",
  author: "Mosh",
  tags: ["node", "backend"],
  isPublished: true,
});
