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

async function updateAssignment(courseId, assignmentId, assignmentUpdates) {
  const course = await model.findById(courseId);
  const assignment = await course.assignments.id(assignmentId);
   Object.assign(assignment, assignmentUpdates);
   await course.save();
   return assignment;
}


 return {
   findAssignmentsForCourse, createAssignment, deleteAssignment, updateAssignment
 };
}
