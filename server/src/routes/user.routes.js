import { Router } from "express";
import {
	register,
	login,
	verifyToken,
	getPublicUserByUsername,
	getUserByUsername,
	getUsers,
	editProfile,
	editProfilePicture,
	editPassword,
	deleteUser,
} from "../controllers/user.controller.js";
import {
	validateLogin,
	validateRegister,
	validateEditUser,
	validateEditUserPicture,
	validateEditUserPassword,
} from "../middlewares/user.middleware.js";
import {
	adminAuthRequired,
	authRequired,
} from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);
router.get("/verify", verifyToken);
router.get("/user/profile/:username", getPublicUserByUsername);
router.get("/user/:username", authRequired, getUserByUsername);
router.get("/users", authRequired, adminAuthRequired, getUsers);
router.put("/user/:id/edit", authRequired, validateEditUser, editProfile);
router.put(
	"/user/:id/edit-picture",
	authRequired,
	validateEditUserPicture,
	editProfilePicture
);
router.put(
	"/user/:id/edit-password",
	authRequired,
	validateEditUserPassword,
	editPassword
);
router.delete("/user/:id", authRequired, adminAuthRequired, deleteUser);

export default router;
