import UsersDao from "./dao.js";
let currentUser = null;

<<<<<<< Updated upstream
export default function UserRoutes(app, db) {
 const dao = UsersDao(db);
  const createUser = (req, res) => {
  const newUser = dao.createUser(req.body);
  res.json(newUser);
};
=======
export default function UserRoutes(app) {
 const dao = UsersDao();
 
 const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };
>>>>>>> Stashed changes

const deleteUser = (req, res) => {
  const { userId } = req.params;
  dao.deleteUser(userId);
  res.sendStatus(200);
};

<<<<<<< Updated upstream
  const findAllUsers = (req, res) => { 
  const users = dao.findAllUsers();
  res.json(users);
};
 const findUserById = (req, res) => {
  const { userId } = req.params;
  const user = dao.findUserById(userId);
  res.json(user);
};
  const updateUser = (req, res) => {
    const userId = req.params.userId;
=======
const deleteUser = async (req, res) => {
      const status = await dao.deleteUser(req.params.userId);
      res.json(status);
  };


 const findAllUsers = async (req, res) => {
    const { role, name } = req.query;
    if (role) {
      const users = await dao.findUsersByRole(role);
      res.json(users);
      return;
    }
     if (name) {
      const users = await dao.findUsersByPartialName(name);
      res.json(users);
      return;
    }

    const users = await dao.findAllUsers();
    res.json(users);
  };

  app.get("/api/users", findAllUsers);

  

  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };

  const updateUser = async (req, res) => {
    const { userId } = req.params;
>>>>>>> Stashed changes
    const userUpdates = req.body;
    dao.updateUser(userId, userUpdates);
    const currentUser = dao.findUserById(userId);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };

<<<<<<< Updated upstream
  const signup = (req, res) => {const user = dao.findUserByUsername(req.body.username);
    if (user) {
      res.status(400).json(
        { message: "Username already in use" });
      return;
    }
    const currentUser = dao.createUser(req.body);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
 };
  const signin = (req, res) => {
=======

  const signin = async (req, res) => {
>>>>>>> Stashed changes
    const { username, password } = req.body;
    const currentUser = dao.findUserByCredentials(username, password);
    if (currentUser) {
      req.session["currentUser"] = currentUser;
      res.json(currentUser);
    } else {
      res.status(401).json({ message: "Unable to login. Try again later." });
    }
<<<<<<< Updated upstream
=======
  };
  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(req.body.username);
    if (user) {
      res.status(400).json({ message: "Username already taken" });
      return;
    }
    const currentUser = await dao.createUser(req.body);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };
>>>>>>> Stashed changes

    
   };



  const signout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };

 const profile = (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    res.json(currentUser);
  };

  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
}
