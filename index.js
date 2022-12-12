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

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    author: "Mosh",
    author: "Maximillian shwarzmuller",
    tags: ["node", "backend"],
    isPublished: true,
  });

  const result = await course.save();

  console.log(result);
}
// createCourse();

async function getCourses() {
  const courses = await Course
    // .find({
    //   author: "Mosh",
    //   isPublished: true,
    // })
    // Starts with Mosh and it doesn't matter what we have after
    .find({ author: /^Mosh/ })
    // Ends with Hamedani case insensitive
    .find({ author: /Hamedani$/i })
    // Contains Mosh everywhere
    // .*   yaane we can have zero or more characters
    .find({ author: /.*Mosh.*/ })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

getCourses();
