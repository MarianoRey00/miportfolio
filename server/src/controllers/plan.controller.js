import Plan from "../models/plan.model.js";

export const getPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.status(200).json(plans);
  } catch (error) {
    console.log(error);
  }
};

export const createPlan = async (req, res) => {
  const { title, description, price, duration, features } = req.body;
  const newPlan = await new Plan({
    title: title,
    description: description,
    price: price,
    duration: duration,
    features: features,
  });
  res.json(await newPlan.save());
};

export const deletePlan = async (req, res) => {
  await Plan.findByIdAndDelete(req.params.id);
  res.status(200);
};
