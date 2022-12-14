mongoos.txt

create a schema:

we use a schema to define the shape of documents within a 
collection in Mongodb.
 
 playground : database

 courses: collection

 jawet el collection fi el documents li hye el data

 collection : is like Table in relational database
 Documents  : is like row in relational database


 concept of schema is specific to mongoose..not to Mongodb

 Buffer: for storing binary data

 


 
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
//to create a class like course we need to compile the schema to model
const Course = mongoose.model("Course", courseSchema);

//object course
const course = new Course({
  name: "Node.js Course",
  author: "Mosh",
  tags: ["node", "backend"],
  isPublished: true,
});





//////////////////////////////////////////////////////////////////////////////////
                 Saving a Document




its important To download the exact mongoose and mongodb version...i dont mean the same
mongodb 3.6.2
mongoose 5.0.0
search for the ideal version for each mongodb version


========================================================



          
                       Querying Documents.
  Filtering





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

getCourses();
// createCourse();









=========================================================================


           



===========================================
everytime

"mongoose": "^5.0.0"
mongo v3.6.23


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
    name: "Mosh",
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
// createCourse();

async function getCourses() {
  /*
  const courses = await Course.find();
  console.log(courses);
*/
  //.find() btarje3 document query object..li hye promise
  const courses = await Course.find({
    name: "Mosh",
    isPublished: true,
  })
    .limit(10)
    .sort({ name: 1 })
    // 1 ASCENDING ORDER   DESC -1
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

getCourses();

/*

eq(equal)
ne(not equal)
gt (greater than)
gte (greater than or equal to)
lt (less than)
lte (less than or equal to)
in
nin (not in)


lets imagine our courses have a price property


*/




========================





           Comparison Query Operators


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
    name: "Mosh",
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
    //   name: "Mosh",
    //   isPublished: true,
    // })
    // .find({ price: { $gt: 10, $lte: 20 } })
    // 10 OR 15 OR 20
    .find({ price: { $in: [10, 15, 20] } })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

getCourses();

/*

eq(equal)
ne(not equal)
gt (greater than)
gte (greater than or equal to)
lt (less than)
lte (less than or equal to)
in
nin (not in)


lets imagine our courses have a price property


*/


=================================================



                Logical Query Operator

                    or
 

   const courses = await Course.find()
    .or([{ author: "Mosh" }, { isPublished: true }])
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}


              
              
                 and


           const courses = await Course.find()
    .and([{ author: "Mosh" }, { isPublished: true }])
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}
        




==========================================================

                        Regular Expressions



 Filtering strings


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
    .find({ author: /.*Mosh.*/i })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

getCourses();



===================================================



                               Counting




async function getCourses() {
  const courses = await Course.find({
    author: "Mosh",
    isPublished: true,
  })

    .limit(10)
    .sort({ name: 1 })
    .count();
  console.log(courses);
}


===========================================================
                  Pagination

async function getCourses() {
  const pageNumber = 2;
  const pageSize = 10;
  //          /api/courses?pageNumber=2&pageSize=10
  const courses = await Course.find({
    author: "Mosh",
    isPublished: true,
  })
    //specified the number of docuemnts  to skip
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name: 1 })
    .count();
  console.log(courses);
}




==============================================================




exercise1



mongoimport --db mongo-exercises --collection courses --drop --file exercise-data.json --jsonArray




[
  {"_id":"5a68fdc3615eda645bc6bdec","tags":["express","backend"],"date":"2018-01-24T21:42:27.388Z","name":"Express.js Course","author":"Mosh","isPublished":true,"price":10,"__v":0},
  {"_id":"5a68fdd7bee8ea64649c2777","tags":["node","backend"],"date":"2018-01-24T21:42:47.912Z","name":"Node.js Course","author":"Mosh","isPublished":true,"price":20,"__v":0},
  {"_id":"5a68fde3f09ad7646ddec17e","tags":["aspnet","backend"],"date":"2018-01-24T21:42:59.605Z","name":"ASP.NET MVC Course","author":"Mosh","isPublished":true,"price":15,"__v":0},
  {"_id":"5a68fdf95db93f6477053ddd","tags":["react","frontend"],"date":"2018-01-24T21:43:21.589Z","name":"React Course","author":"Mosh","isPublished":false,"__v":0},
  {"_id":"5a68fe2142ae6a6482c4c9cb","tags":["node","backend"],"date":"2018-01-24T21:44:01.075Z","name":"Node.js Course by Jack","author":"Jack","isPublished":true,"price":12,"__v":0},
  {"_id":"5a68ff090c553064a218a547","tags":["node","backend"],"date":"2018-01-24T21:47:53.128Z","name":"Node.js Course by Mary","author":"Mary","isPublished":false,"price":12,"__v":0},
  {"_id":"5a6900fff467be65019a9001","tags":["angular","frontend"],"date":"2018-01-24T21:56:15.353Z","name":"Angular Course","author":"Mosh","isPublished":true,"price":15,"__v":0}
]


================================================================





fina na3mela hik

   .sort({ name: 1 })

   aw  

   .sort('name')   //ASCENDING
   .sort('-name')   //DESCENDING

==============================================  

 .select({ name: 1, author: 1 });

 or 
 
 select('name author');


 ==========================================================


                          Exercise1

Get all the published backend courses sort them by their name ,
pick only their name and author, and display them.



const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercises")
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

async function getCourses() {
  return await Course.find({ isPublished: true, tags: "backend" })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();




=============================================================






                     Exercise2

Get All the published frontend and backend courses ,
sort them by their price in a DESCENDING order,
pick only their name and author,
and display them.


const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercises")
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

async function getCourses() {
  return await Course.find({
    isPublished: true,
    tags: { $in: ["frontend", "backend"] },
  })
    .sort("-price")
    .select("name author price");
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();








note:

Course.find({ isPublished: true, tags: ["frontend" , "backend"] })
// he btarje3 el docuemnt li 3anda el tnen tags sawa


iza sat3malna "in"
he mniha la t2ul iza fia shi wahde men hawde el tnen raje3a


      tags: { $in: ["frontend", "backend"] }


===================================================



    .select({ name: 1, author: 1 });


or


.select('name author');


===========================================================



async function getCourses() {
  return await Course.find({
    isPublished: true,
    tags: { $in: ["frontend", "backend"] },
  })



or




    async function getCourses() {
  return await Course.find({
    isPublished: true,
  })
    .or([{ tags: "frontend" }, { tags: "backend" }])
    .sort("-price")
    .select("name author price");
}





==========================================================






                   Exercise3


Get all the published courses that are
 $15 or more,
or have the word 'by' in their title.




const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercises")
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

async function getCourses() {
  return await Course.find({
    isPublished: true,
  }).or([{ price: { $gte: 15 } }, { name: /.*by.*/i }]);
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();









==============================================================================================

                                       
                               Updating Documents


How to update documents in mongodb database ?


   Approach 1: Query first
   findById()
   Modify its properties
   save()




App111111111111111111111111111111111111111111111
Ex11111111111111111111111111111111111111111



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
  const course = await Course.findById(id);
  if (!course) return;

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




===================================================

                       Updating Documents


How to update documents in mongodb database ?


               Approach 2: Update first
               Update directly
               Optionally : get the updated document




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
  const result = await Course.update(
    { _id: id },
    {
      $set: {
        author: "Mojo gogo",
        isPublished: false,
      },
    }
  );

  console.log(result);
}

updateCourse("6390f16b1fb538263c16587e");




======================================================





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


=============================================

       remove 



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
  const course = await Course.deleteOne({ _id: id });
  console.log(course);
}
removeCourse("63975cd920f8301ff88d62e4");



==================================


       


            delete multiple document

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
  //   const result = await Course.deleteMany({ _id: id });
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
  const course = await Course.deleteOne({ _id: id });
  console.log(course);
}
removeCourse("63975cd920f8301ff88d62e4");

//iza mafi course bi hal id btraje3 null
