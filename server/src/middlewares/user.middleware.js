import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { uploadProfileImage, deleteImage } from "../libs/cloudinary.js";
import fs from "fs-extra";
import path from "path";

export const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  if (!email) {
    errors.push({
      field: "email",
      message: "Ingrese un email.",
    });
  } else if (!email.includes("@") || !email.includes(".")) {
    errors.push({
      field: "email",
      message: "Ingrese un email válido.",
    });
  }

  if (!password) {
    errors.push({
      field: "password",
      message: "La contraseña no puede estar vacía.",
    });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const userFound = await User.findOne({ email });
    if (!userFound) {
      return res.status(400).json({
        errors: [{ field: "email", message: "Email no encontrado." }],
      });
    }

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({
        errors: [{ field: "password", message: "Contraseña incorrecta." }],
      });
    }

    req.user = userFound;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const validateRegister = async (req, res, next) => {
  const { username, email, password } = req.body;
  const errors = [];

  if (!username) {
    errors.push({
      field: "username",
      message: "Ingrese un nombre de usuario",
    });
  } else if (username.length < 3) {
    errors.push({
      field: "username",
      message: "El nombre de usuario debe tener 3 o mas caracteres.",
    });
  } else if (username.length > 20) {
    errors.push({
      field: "username",
      message: "El nombre de usuario no puede tener mas de 20 caracteres.",
    });
  }

  if (!email) {
    errors.push({
      field: "email",
      message: "Ingrese un email.",
    });
  } else if (!email.includes("@") || !email.includes(".")) {
    errors.push({
      field: "email",
      message: "Ingrese un email válido.",
    });
  }

  if (!password) {
    errors.push({
      field: "password",
      message: "Ingrese una contraseña.",
    });
  } else if (password.length < 5) {
    errors.push({
      field: "password",
      message: "La contraseña debe tener 5 o mas caracteres.",
    });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const usernameFound = await User.findOne({ username }).collation({
      locale: "es",
      strength: 2,
    });
    if (usernameFound) {
      return res.status(400).json({
        errors: [
          {
            field: "username",
            message: "Nombre de usuario en uso",
          },
        ],
      });
    }

    const emailFound = await User.findOne({ email });
    if (emailFound) {
      return res.status(400).json({
        errors: [{ field: "email", message: "Email en uso" }],
      });
    }
    const passwordHash = await bcrypt.hash(password, 10);

    req.username = username;
    req.email = email;
    req.password = passwordHash;

    next();
  } catch (error) {
    res.status(500).json({ errors: [{ message: error.message }] });
  }
};

export const validateEditUser = async (req, res, next) => {
  const { username, email, biography, networks } = req.body;
  const errors = [];

  if (!username) {
    errors.push({
      field: "username",
      message: "Ingrese un nombre de usuario.",
    });
  } else if (username.length < 3) {
    errors.push({
      field: "username",
      message: "El nombre de usuario debe tener 3 o mas caracteres.",
    });
  } else if (username.length > 20) {
    errors.push({
      field: "username",
      message: "El nombre de usuario no puede tener mas de 20 caracteres.",
    });
  }

  if (!email) {
    errors.push({
      field: "email",
      message: "Ingrese un email.",
    });
  } else if (!email.includes("@") || !email.includes(".")) {
    errors.push({
      field: "email",
      message: "Ingrese un email válido.",
    });
  }

  if (biography && biography.length > 80) {
    errors.push({
      field: "biography",
      message: "La biografia no puede tener mas de 80 caracteres",
    });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const userFound = await User.findById(req.params.id);

    const usernameFound = await User.findOne({ username });
    if (usernameFound && usernameFound.username !== userFound.username) {
      return res.status(400).json({
        errors: [
          {
            field: "username",
            message: "Nombre de usuario en uso",
          },
        ],
      });
    }

    const emailFound = await User.findOne({ email });
    if (emailFound && emailFound.email !== userFound.email) {
      return res.status(400).json({
        errors: [{ field: "email", message: "Email en uso" }],
      });
    }

    req.body.username = username;
    req.body.email = email;
    req.body.biography = biography;
    req.body.networks = networks;

    next();
  } catch (error) {
    return res.status(500).json({ errors: [{ message: error.message }] });
  }
};

export const validateEditUserPicture = async (req, res, next) => {
  const errors = [];
  const validPictureExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".svg",
    ".webp",
    ".gif",
    ".avif",
    ".bmp",
    ".tiff",
    ".jfif",
  ];
  const maxImageSize = 3 * 1024 * 1024;

  if (!req.files) {
    errors.push({
      field: "picture",
      message: "Ingrese la foto de perfil",
    });
  } else if (req.files.picture.size > maxImageSize) {
    errors.push({
      field: "picture",
      message: "La foto no puede pesar mas de 3MB.",
    });
  } else if (req.files.picture) {
    const pictureExtension = path.extname(req.files.picture.name).toLowerCase();
    if (!validPictureExtensions.includes(pictureExtension)) {
      errors.push({
        field: "picture",
        message: `La foto debe tener una extensión valida ${validPictureExtensions.join(
          " "
        )}`,
      });
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  const user = await User.findById(req.params.id);
  if (user.picture?.public_id) {
    await deleteImage(user.picture.public_id);
  }

  try {
    const result = await uploadProfileImage(req.files.picture.tempFilePath);
    const newPicture = {
      url: result.secure_url,
      public_id: result.public_id,
    };
    await fs.remove(req.files.picture.tempFilePath);
    req.body.picture = newPicture;

    next();
  } catch (error) {
    return res.status(500).json({ errors: [{ message: error.message }] });
  }
};

export const validateEditUserPassword = async (req, res, next) => {
  const { actualPassword, newPassword } = req.body;
  const errors = [];

  if (!actualPassword) {
    errors.push({
      field: "actualPassword",
      message: "Ingrese la contraseña actual.",
    });
  }

  if (!newPassword) {
    errors.push({
      field: "newPassword",
      message: "Ingrese la nueva contraseña.",
    });
  } else if (newPassword.length < 5) {
    errors.push({
      field: "newPassword",
      message: "La contraseña debe tener 5 o mas caracteres.",
    });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const userFound = await User.findById(req.params.id);

    const isMatch = await bcrypt.compare(actualPassword, userFound.password);
    if (!isMatch) {
      return res.status(401).json({
        errors: [
          {
            field: "actualPassword",
            message: "Contraseña actual incorrecta",
          },
        ],
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    req.body.password = hashedPassword;
    next();
  } catch (error) {
    return res.status(500).json({ errors: [{ message: error.message }] });
  }
};
