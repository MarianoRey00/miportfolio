import User from "../models/user.model.js";
import Appearance from "../models/appearance.model.js";
import Project from "../models/project.model.js";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { createAppearance } from "./appearance.controller.js";
import { deleteImage } from "../libs/cloudinary.js";
import { deleteProjects } from "../controllers/project.controller.js";
import { deleteAppearance } from "../controllers/appearance.controller.js";
import nodemailer from "nodemailer";

export const register = async (req, res) => {
  try {
    const newUser = new User({
      username: req.username,
      email: req.email,
      password: req.password,
      biography: "",
      picture: {},
      networks: {
        instagram: "",
        tiktok: "",
        facebook: "",
        x: "",
        youtube: "",
        linkedin: "",
        spotify: "",
        pinterest: "",
        github: "",
      },
      role: "Usuario",
      plan: "Gratuito",
    });
    await newUser.save();

    await createAppearance(newUser._id);

    const token = await createAccessToken({ id: newUser._id });
    res.cookie("token", token, {
      secure: true,
      sameSite: "None",
    });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const user = req.user;

  const token = await createAccessToken({ id: user._id });
  res.cookie("token", token, {
    secure: true,
    sameSite: "None",
  });
  res.json({
    id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
    plan: user.plan,
  });
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    secure: true,
    sameSite: "None",
  });
  res.sendStatus(200);
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.send(false);

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (error, user) => {
    if (error) return res.sendStatus(401);

    const userFound = await User.findById(user.id);
    if (!userFound) return res.sendStatus(401);

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      role: userFound.role,
      plan: userFound.plan,
    });
  });
};

export const getPublicUserByUsername = async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username }).collation({
      locale: "es",
      strength: 2,
    });
    res.json(user);
  } catch (error) {}
};

export const getUserByUsername = async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username });
    res.json(user);
  } catch (error) {}
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    console.log("user", user);
    res.json(user);
  } catch (error) {}
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {}
};

export const editProfile = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  return res.json(user);
};

export const editProfilePicture = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const editPassword = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { password: req.body.password },
      { new: true }
    );

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const appearance = await Appearance.findOne({ user: req.params.id });
    await deleteAppearance(appearance._id);

    const projects = await Project.find({ user: req.params.id });

    projects.map(async (project) => {
      await deleteProjects(project._id);
    });

    const user = await User.findByIdAndDelete(req.params.id);

    if (user?.picture?.public_id) {
      await deleteImage(user.picture.public_id);
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json(console.error(error));
  }
};

export const verifyEmail = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const errors = [];

  if (!email) {
    errors.push({
      field: "email",
      message: "El email es requerido",
    });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    errors.push({
      field: "email",
      message: "El email no esta registrado",
    });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Cambio de contraseña",
      html: `<p>Para cambiar tu contraseña hace click en el siguiente enlace:</p>
             <a href="https://miportfolio18.vercel.app/cambiar-contraseña?email=${email}">Cambiar contraseña</a>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500);
  }
};

export const changePassword = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      req.params.email,
      { password: req.body.password },
      { new: true }
    );

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
