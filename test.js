const Campuses = require("./models").Campuses;
const Students = require("./models/").Students;
// const test = require("./models").test;

Campuses.findAll({
  include: [
    {
      model: Students,
      as: "students"
    }
  ]
})
  .then(campuses => {
    console.log(campuses);
  })
  .catch(error => {
    console.log(error);
  });

// Campuses.create(
//   {
//     name: "Lehman",
//     address: "Bedford",
//     students: {
//       firstName: "John",
//       lastName: "Doe",
//       email: "john.doe@gmail.com",
//       gpa: 4.0
//     }
//   },
//   {
//     include: [
//       {
//         model: Students,
//         as: "students"
//       }
//     ]
//   }
// )
//   .then(campus => {
//     console.log(campus);
//   })
//   .catch(error => console.log(error));
