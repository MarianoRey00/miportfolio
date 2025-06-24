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

  const getPlans = async () => {
    const res = await getPlansRequest();
    return res.data;
  };

  const getPlan = async () => {
    const res = await getPlanRequest();
    return res.data;
  };

  const createPlan = async (project) => {
    const res = await createPlanRequest(project);
    setPlans([...plans, res.data]);
  };

  const deletePlan = async (id) => {
    const res = await deletePlanRequest(id);
    if (res.status === 204) {
      setPlans(plans.filter((plan) => plan._id !== id));
    }
  };

  const editPlan = async (id, plan) => {
    const res = await editPlanRequest(id, plan);
    setPlans(plans.map((plan) => (plan._id === id ? res.data : plan)));
  };

  return (
    <PlanContext.Provider
      value={{
        getPlans,
        getPlan,
        createPlan,
        deletePlan,
        editPlan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}
