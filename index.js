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
Now we need to compile this schema into a model
     john hye instance men el class human
        Classes   , objects
         Human    , John
         Course   , nodeCourse
*/

// Course is a class
//to create a class like course we need to compile the schema to model
const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  //object course
  const course = new Course({
    name: "Mosh Course",
    author: "Maximillian shwarzmuller",
    tags: ["node", "backend"],
    isPublished: true,
  });

  //  Async operation , save
  // The save() method returns a promise. If save() succeeds, the promise resolves to the document that was saved.
  const result = await course.save();
  //display on the console
  console.log(result);
}

async function getCourses() {
  //.find() btarje3 document query object..li hye promise
  const courses = await Course.find({ author: "Mosh", isPublished: true })
    .limit(10)
    .sort({ name: 1 })
    // 1 ASCENDING ORDER   DESC -1
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

// getCourses();
createCourse();
