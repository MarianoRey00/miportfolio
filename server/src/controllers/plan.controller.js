import Plan from "../models/plan.model.js";

export const getPlans = async (req, res) => {
  const plans = await Plan.Find();
  res.status(200).json(plans);
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
