import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export default function EnrollmentsDao() {
 async function findCoursesForUser(userId) {
    const enrollments = await model.find({ user: userId }).populate("course");
    return enrollments.map((enrollment) => enrollment.course);
  }

  async function findUsersForCourse(courseId) {
    const enrollments = await model.find({ course: courseId }).populate("user");
    return enrollments.map((enrollment) => enrollment.user);
  }



  async function enrollUserInCourse(userId, courseId) {
    // Check if already enrolled
    const existingEnrollment = await model.findOne({ 
      user: userId, 
      course: courseId 
    });
    
    if (existingEnrollment) {
      return existingEnrollment;
    }
    
    // Create new enrollment 
    const enrollment = await model.create({
      _id: uuidv4(), 
      user: userId,
      course: courseId,
      enrollmentDate: new Date(),
      status: "ENROLLED"
    });
    
    return enrollment;
  }
  
    async function unenrollUserFromCourse(userId, courseId) {
    return await model.deleteOne({ 
      user: userId, 
      course: courseId 
    });
  }

 function unenrollAllUsersFromCourse(courseId) {
    return model.deleteMany({ course: courseId });
  }

  async function findAllEnrollments() {
    return await model.find();
  }



 return {
   findCoursesForUser,
   findUsersForCourse,
   enrollUserInCourse,
   unenrollUserFromCourse,
   unenrollAllUsersFromCourse,
   findAllEnrollments,
 };
}

