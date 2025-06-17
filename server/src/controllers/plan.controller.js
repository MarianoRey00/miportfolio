import Plan from "../models/plan.model";

export const getPlans = async (req, res) => {
  const plans = await Plan.Find();
  res.status(200).json(plans);
};
