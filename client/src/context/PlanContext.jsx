import { createContext, useContext, useEffect, useState } from "react";
import {
  getPlansRequest,
  getPlanRequest,
  createPlanRequest,
  deletePlanRequest,
  editPlanRequest,
} from "../api/plan.js";

const PlanContext = createContext();

export const usePlans = () => {
  const context = useContext(PlanContext);
  return context;
};

export function PlanProvider({ children }) {
  const [plans, setPlans] = useState([]);
  const [errors, setErrors] = useState([]);

  const getPlans = async () => {
    const res = await getPlansRequest();
    setPlans(res.data);
  };

  const getPlan = async (id) => {
    const res = await getPlanRequest(id);
    return res.data;
  };

  const createPlan = async (project) => {
    try {
      const res = await createPlanRequest(project);
      setPlans([...plans, res.data]);
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  const deletePlan = async (id) => {
    const res = await deletePlanRequest(id);
    if (res.status === 204) {
      setPlans(plans.filter((plan) => plan._id !== id));
      return true;
    }
  };

  const editPlan = async (id, plan) => {
    try {
      const res = await editPlanRequest(id, plan);
      setPlans(plans.map((plan) => (plan._id === id ? res.data : plan)));
      return true;
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  return (
    <PlanContext.Provider
      value={{
        plans,
        getPlans,
        getPlan,
        createPlan,
        deletePlan,
        editPlan,
        errors,
        setErrors,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}
