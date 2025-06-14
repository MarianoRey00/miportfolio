import Appearance from "../models/appearance.model.js";

export const createAppearance = async (id) => {
  try {
    const newAppearance = new Appearance({
      pictureShape: "18px",
      backgroundColor: "#fff7ed",
      textColor: "#18181b",
      projectBackgroundColor: "#27272a",
      projectShape: "18px",
      projectPictureShape: "12px",
      projectTextColor: "#fff7ed",
      projectBorder: "0px",
      projectBorderColor: "#ffffff",
      user: id,
    });
    await newAppearance.save();
  } catch (error) {}
};

export const getAppearance = async (req, res) => {
  res.json(await Appearance.findOne({ user: req.user.id }));
};

export const getPublicAppearance = async (req, res) => {
  res.json(await Appearance.findOne({ user: req.params.id }));
};

export const editAppearance = async (req, res) => {
  res.json(
    await Appearance.findOneAndUpdate({ user: req.user.id }, req.body, {
      new: true,
    })
  );
};

export const deleteAppearance = async (id) => {
  await Appearance.findByIdAndDelete(id);
};
