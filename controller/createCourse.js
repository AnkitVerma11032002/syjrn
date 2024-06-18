import Course from "../models/createCourse.js"; // Ensure correct path and file extension

const createNewCourse = async (req, res) => {
  try {
    const { courseName, sideBarTitles } = req.body;

    if (!courseName || !sideBarTitles) {
      return res.status(400).json({ message: "Course name and sidebar titles are required." });
    }

    const newCourse = new Course({
      courseName,
      sideBarTitles
    });

    await newCourse.save();
    res.status(201).json({ message: "Course created successfully!", course: newCourse });
  } catch (err) {
    res.status(500).json({ message: "Error creating course", error: err.message });
  }
};

export default createNewCourse;
