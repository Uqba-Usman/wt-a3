var express = require("express");
var router = express.Router();
const { Faculty } = require("../models/faculty");

//Get all Faculty Members
router.get("/", async (req, res, next) => {
  let faculty = await Faculty.find();
  console.log("FACULTY: ", faculty);
  res.send(faculty);
});

//Insert
router.post("/", async (req, res, next) => {
  console.log("REQ BODY: " + req.body.phone_numbers);

  let faculty = new Faculty();
  faculty.name = req.body.name;
  faculty.gender = req.body.gender;
  faculty.email = req.body.email;
  faculty.address.street_address = req.body.address.street_address;
  faculty.address.city = req.body.address.city;
  faculty.address.country = req.body.address.country;
  faculty.course_code = req.body.course_code;
  faculty.phone_numbers = req.body.phone_numbers;

  await faculty.save();

  console.log("FACULTY: ", faculty);

  res.send(faculty);
});

//Edit
router.put("/:id", async (req, res) => {
  console.log("FACULTY ID", req.params.id);
  let faculty = await Faculty.findById({ _id: req.params.id });
  faculty.name = req.body.name;
  faculty.gender = req.body.gender;
  faculty.email = req.body.email;
  faculty.address.street_address = req.body.address.street_address;
  faculty.address.city = req.body.address.city;
  faculty.address.country = req.body.address.country;
  faculty.course_code = req.body.course_code;
  faculty.phone_numbers = req.body.phone_numbers;

  await faculty.save();

  console.log("FACULTY: ", faculty);

  res.send(faculty);
});

//Delete
router.delete("/:id", async (req, res) => {
  console.log("FACULTY ID", req.params.id);
  try {
    let faculty = await Faculty.findOneAndDelete({ _id: req.params.id });

    console.log("FACULTY: ", faculty);
    res.send("Successfully Deleted: ", faculty);
  } catch (error) {
    console.log("Error Occured Not deleted");
  }
});

module.exports = router;
