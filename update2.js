// How to update documents in mongodb database ?

//        Update first Approach
// Approach 2: Update first
// Update directly
// Optionally : get the updated document

/* 
       query or filter object
update({_id:id},{$set: {
      author: "Disney",
      isPublished: true,
    },}) 

bas ma btraje3 el updated document

findByIdAndUpdate()  btarje3 el updated document
*/
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
  //update first directly and we can return the updated document
  //MEN ESMO LEZEM NHET EL ID YAANE
  const course = await Course.findByIdAndUpdate(
    id,
    {
      $set: {
        author: "Muhamad ali klay",
        isPublished: true,
      },
    },
    //IZA MA KATABNNA HE ,LAH NE7SAL 3AL ORIGINAL DOCUMENT LI HYE ABEL EL UPDATE
    { new: true }
  );
  console.log(course);
}

updateCourse("6390f16b1fb538263c16587e");
