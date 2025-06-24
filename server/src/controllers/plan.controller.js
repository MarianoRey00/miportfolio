import Plan from "../models/plan.model.js";

export const getPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.status(200).json(plans);
  } catch (error) {
    console.log(error);
  }
};

export const getPlan = async (req, res) => {
  const plan = await Plan.findById(req.params.id);
  res.status(200).json(plan);
};

export const createPlan = async (req, res) => {
  const { title, description, price, duration, features } = req;
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
  try {
    await Plan.findByIdAndDelete(req.params.id);
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};

export const editPlan = async (req, res) => {
  try {
    const updatedPlan = await Plan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedPlan);
  } catch (error) {
    console.log(error);
  }
};
