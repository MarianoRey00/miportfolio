import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const authRequired = (req, res, next) => {
	const { token } = req.cookies;
	console.log("Cookies en la solicitud:", req.cookies);
	if (!token) {
		return res.status(401).json({ message: "Autorización denegada" });
	}
	// jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
	jwt.verify(token, "1ad4a35d73", (err, user) => {
		if (err) return res.status(403).json({ message: "Token inválido" });
		req.user = user;
		next();
	});
};

export const adminAuthRequired = async (req, res, next) => {
	const userFound = await User.findById(req.user.id);
	if (userFound.role === "Admin") {
		next();
	} else {
		return res.status(401).json({ message: "Autorizacion denegada" });
	}
};
