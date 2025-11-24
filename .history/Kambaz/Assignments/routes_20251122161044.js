import AssignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {
  const dao = AssignmentsDao();
  const findAssignmentsForCourse = async (req, res) => {
    const { courseId } = req.params;
  const assignments = await dao.findAssignmentsForCourse(courseId);
  res.json(assignments);
  }
   const createAssignmentForCourse = async (req, res) => {
    const { courseId } = req.params;
    const assignment = {
      ...req.body,
      course: courseId,
    };
    const newAssignment = await dao.createAssignment(courseId, assignment);
    res.send(newAssignment);
  }
  const deleteAssignment = async (req, res) => {
  const { assignmentId } = req.params;
  const { courseId } = req.params;
  const status = await dao.deleteAssignment(courseId, assignmentId);
  res.send(status);
}
const updateAssignment = async (req, res) => {
  const { assignmentId } = req.params;
  const { courseId } = req.params;
  const assignmentUpdates = req.body;
  const status = await dao.updateAssignment(courseId, assignmentId, assignmentUpdates);
  res.send(status);
}
app.put("/api/assignments/:assignmentId", updateAssignment);
app.delete("/api/assignments/:assignmentId", deleteAssignment);
  app.post("/api/courses/:courseId/assignments", createAssignmentForCourse);
  app.get("/api/courses/:courseId/assignments", findAssignmentsForCourse);
}