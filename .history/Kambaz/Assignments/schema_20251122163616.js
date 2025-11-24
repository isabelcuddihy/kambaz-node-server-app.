import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
   _id: String,
   title: String,
   course: String,
   points: Number,
   description: String,
   assignmentGroup :String,
   displayGradeAs: String,
   submissionType: String,
   assignee: String,
    dueDate: Date,
    availableFromDate: Date,
    availableUntilDate: Date
 }
);
export default assignmentSchema;