const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
  date: { type: Date, required: true },
  status: { type: String, required: true, enum: ["Present", "Absent", "Leave"] },
});

module.exports = mongoose.model("Attendance", attendanceSchema);