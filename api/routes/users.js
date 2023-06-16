import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user , you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user , you are logged in and you can delete your account");
// });

// router.get("/checkadmin/:id", verifyUser, (req, res, next) => {
//   res.send("hello Admin , you are logged in and you can delete all account");
// });

//Update
router.post("/:id", verifyUser, updateUser);

//Delete
router.delete("/:id", verifyUser, deleteUser);

//Get
router.get("/:id", verifyUser, getUser);

//get all
router.get("/", verifyAdmin, getUsers);

export default router;
