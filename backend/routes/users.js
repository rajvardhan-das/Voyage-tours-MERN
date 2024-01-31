import express from "express";
import { deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/userController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import { verifyUser } from "../utils/verifyToken.js";
const router = express.Router()

router.put("/:id",verifyUser,updateUser)
router.delete("/:id",verifyUser,deleteUser)
router.get("/:id",verifyUser,getSingleUser)
router.get("/",verifyAdmin ,getAllUser)

export default router