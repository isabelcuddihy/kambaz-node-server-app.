import mongoose from "mongoose";
import moduleSchema from "../Modules/schema.js";
const assignmentSchema = new mongoose.Schema({
   _id: String,
   name: String,
   title: String,
   courseId: String,
   credits: Number,
   description: String,
   modules: [moduleSchema]
 },
 { collection: "courses" }
);
export default courseSchema;