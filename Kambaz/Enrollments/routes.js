import EnrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app, db) {
  const dao = EnrollmentsDao(db);
  
  const findAllEnrollments = (req, res) => {
    const { enrollments } = db;
    res.json(enrollments);
  };

  const enrollUserInCourse = (req, res) => {
    const { userId, courseId } = req.body;  // Changed from req.params
    dao.enrollUserInCourse(userId, courseId);
    res.send({ message: "Enrolled successfully" });
  };
  
  const unenrollUserFromCourse = (req, res) => {
    const { userId, courseId } = req.params;
    dao.unenrollUserFromCourse(userId, courseId);
    res.send({ message: "Unenrolled successfully" });
  };
  
  app.get("/api/enrollments", findAllEnrollments);
  app.post("/api/enrollments", enrollUserInCourse);
  app.delete("/api/enrollments/:userId/:courseId", unenrollUserFromCourse);
}