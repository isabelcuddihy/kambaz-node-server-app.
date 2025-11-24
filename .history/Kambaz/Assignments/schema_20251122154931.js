import mongoose from "mongoose";
import moduleSchema from "../Modules/schema.js";
const assignmentSchema = new mongoose.Schema({
   _id: String,
   name: String,
   title: String,
   courseId: String,
   points: Number,
   description: String,
   assignmentGroup :String,
   displayGradeAs: String,
   submissionType: String,
   assignee: String,
    dueDate: Date,
    availableFrom: Date,
    availableTo: Date,

   modules: [moduleSchema]
 },
 { collection: "courses" }
);
export default courseSchema;