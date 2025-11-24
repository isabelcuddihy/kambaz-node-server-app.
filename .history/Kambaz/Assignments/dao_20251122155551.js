import { v4 as uuidv4 } from "uuid";
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
import courseModel from "../Courses/model.js";
export default function AssignmentsDao() {
 async function findAssignmentsForCourse(courseId) {
  const assignments = await courseModel.find({ course: courseId }).populate("assignments");
   return assignments.filter((assignment) => assignment.courseId === courseId);
 }
 async function createAssignment(courseId, assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  const status = await model.updateOne(
     { _id: courseId },
     { $push: { assignments: newAssignment } }
   );
  return newAssignment;
}
async function deleteAssignment(courseId, assignmentId) {
  const status = await model.updateOne(
     { _id: courseId },
     { $pull: { assignments: { _id: assignmentId } } }
   );}

function updateAssignment(assignmentId, assignmentUpdates) {
  const assignment = assignments.find((assignment) => assignment._id === assignmentId);
  if (!assignment) {
    console.error("Assignment not found with ID:", assignmentId);
    return null;
  }
  Object.assign(assignment, assignmentUpdates);
  return assignment;
}


 return {
   findAssignmentsForCourse, createAssignment, deleteAssignment, updateAssignment
 };
}
