import EnrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app ) {
  const dao = EnrollmentsDao();
  
  const findAllEnrollments = async (req, res) => {
   const enrollments = await dao.findAllEnrollments()
    res.json(enrollments);
  };

  const enrollUserIntoCourse = async (req, res) => {
    const { userId, courseId } = req.params; 
    await dao.enrollUserInCourse(userId, courseId);
    res.send({ message: "Enrolled successfully" });
  };
  
  const unenrollUserFromCourse = async (req, res) => {
    const { userId, courseId } = req.params;
    await dao.unenrollUserFromCourse(userId, courseId);
    res.send({ message: "Unenrolled successfully" });
  };
  
  app.get("/api/enrollments", findAllEnrollments);
  app.post("/api/enrollments", enrollUserIntoCourse);
  app.post("/api/users/:userId/courses/:courseId", enrollUserIntoCourse);
  app.delete("/api/users/:userId/courses/:courseId", unenrollUserFromCourse);
}