import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
import courseModel from "../Courses/model.js";
export default function AssignmentsDao() {
 async function findAssignmentsForCourse(courseId) {
  const course = await courseModel.findById(courseId);
   return course.assignments ? course.assignments : [];
 }
 async function createAssignment(courseId, assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  const status = await courseModel.updateOne(
     { _id: courseId },
     { $push: { assignments: newAssignment } }
   );
  return newAssignment;
}
async function deleteAssignment(courseId, assignmentId) {
  const status = await courseModel.updateOne(
     { _id: courseId },
     { $pull: { assignments: { _id: assignmentId } } }
   );
  return status;
}

async function updateAssignment(courseId, assignmentId, assignmentUpdates) {
  const course = await courseModel.findById(courseId);
  const assignment = await course.assignments.id(assignmentId);
   Object.assign(assignment, assignmentUpdates);
   await course.save();
   return assignment;
}


 return {
   findAssignmentsForCourse, createAssignment, deleteAssignment, updateAssignment
 };
}
