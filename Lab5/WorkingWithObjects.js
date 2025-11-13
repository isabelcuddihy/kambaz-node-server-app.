
const assignment = {
  id: 1, title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10", completed: false, score: 0,
};
const module = {
  id: 101, name: "Intro to NodeJS",
  description: "Explore the basics of NodeJS and Connecting to Servers",
  course: "WD101",
};

export default function WorkingWithObjects(app) {
    //ASSIGNMENTS
  const getAssignment = (req, res) => {
    res.json(assignment);
  };
  const getAssignmentTitle = (req, res) => {
    res.json(assignment.title);
  };
  app.get("lab5/assignment/title", getAssignmentTitle);
  app.get("lab5/assignment", getAssignment);

 const setAssignmentTitle = (req, res) => {
   const { newTitle } = req.params;
   assignment.title = newTitle;
   res.json(assignment);
 };
 app.get("lab5/assignment/title/:newTitle", setAssignmentTitle);
 app.get("lab5/assignment", getAssignment);

 const getAssignmentScore = (req, res) => {
    res.json(assignment.score);
  };
  app.get("lab5/assignment/score", getAssignmentScore);
  app.get("lab5/assignment", getAssignment);

 const setAssignmentScore = (req, res) => {
   const { newScore } = req.params;
   assignment.score = newScore;
   res.json(assignment);
 };

 app.get("lab5/assignment/score/:newScore", setAssignmentScore);
 app.get("lab5/assignment", getAssignment);

 const getAssignmentCompleted = (req, res) => {
    res.json(assignment.completed);
  };
  app.get("lab5/assignment/completed", getAssignmentCompleted);
  app.get("lab5/assignment", getAssignment);

 const setAssignmentCompleted = (req, res) => {
   const { newCompleted } = req.params;
   assignment.completed = newCompleted;
   res.json(assignment);
 };

 app.get("lab5/assignment/completed/:newCompleted", setAssignmentCompleted);
 app.get("lab5/assignment", getAssignment);


 //MODULES
 //id, name, description, and course.
const getModule = (req, res) => {
    res.json(module);
  };
  const getModuleName = (req, res) => {
    res.json(module.name);
  };
  const getModuleDescription = (req, res) => {
    res.json(module.description);
  };
  app.get("lab5/module/name", getModuleName);
  app.get("lab5/module/description", getModuleDescription);
  app.get("lab5/module", getModule);

 const setModuleName = (req, res) => {
   const { newName} = req.params;
   module.name = newName;
   res.json(module);
 };
 const setModuleDescription = (req, res) => {
   const { newDescription} = req.params;
   module.description = newDescription;
   res.json(module);
 };
 app.get("lab5/module/name/:newName", setModuleName);
app.get("lab5/module/description/:newDescription", setModuleDescription);

}

