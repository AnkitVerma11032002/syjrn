import mongoose from "mongoose";

// Example Schema
const exampleSchema = new mongoose.Schema({
  example: { type: String, required: true },
  explanation: { type: String, required: true }
});

// Exercise Schema
const exerciseSchema = new mongoose.Schema({
  ques: { type: String, required: true },
  ans: { type: String, required: true }
});

// Subtopic Schema
const subtopicSchema = new mongoose.Schema({
  mainHeading: { type: String, required: true },
  mainDescription: { type: String, required: true },
  mainImage: { type: String },
  examples: [exampleSchema],
  exercises: [exerciseSchema]
});

// Side Bar Title Schema
const sideBarTitleSchema = new mongoose.Schema({
  topicName: { type: String, required: true },
  subtopics: [subtopicSchema]
});

// Course Schema
const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  sideBarTitles: [sideBarTitleSchema]
});

const Course = mongoose.model("Course", courseSchema);

export default Course;