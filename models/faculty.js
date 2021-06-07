const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  gender: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  address: {
    street_address: { type: String },
    city: { type: String },
    country: { type: String },
  },
  course_code: {
    type: String,
  },
  phone_numbers: {
    type: Array,
    // required: true,
  },
});

const Faculty =
  mongoose.models.Faculty || mongoose.model("Faculty", facultySchema);

exports.Faculty = Faculty;
