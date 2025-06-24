import { React, useState, useEffect } from "react";
import { usePlans } from "../context/PlanContext";
import { useParams, Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { VscArrowLeft } from "react-icons/vsc";
import { Toaster } from "react-hot-toast";
import { useNotification } from "../context/NotificationContext";

function EditPlan() {
  const { getPlan, editPlan } = usePlans();
  const [plan, setPlan] = useState({
    title: "",
    description: "",
    duration: "",
    price: 0,
    features: [],
  });
  const [features, setFeatures] = useState([]);
  const [newFeature, setNewFeature] = useState("");
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const plan = await getPlan(id);
      setPlan(plan);
    })();
  }, []);

  const navigate = useNavigate();
  const { showNotification } = useNotification();

  const handleAddFeature = () => {
    if (newFeature.trim() !== "") {
      setFeatures([...plan.features, newFeature.trim()]);
      setPlan({ ...plan, features: [...plan.features, newFeature.trim()] });
      setNewFeature("");
    }
  };

  const handleRemoveFeature = (indexToRemove) => {
    const newFeatures = plan.features.filter(
      (_, index) => index !== indexToRemove
    );
    setFeatures(newFeatures);
    setPlan({ ...plan, features: newFeatures });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlan({ ...plan, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = editPlan(id, plan);
    if (success) {
      showNotification("¡Plan editado con exito!");
      navigate("/admin/planes");
    }
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            background: "#FFF7ED",
          },
        }}
      />
      <Link to="/admin/planes" className="sticky top-0 w-8 block mb-4">
        <VscArrowLeft className="w-8 h-8 cursor-pointer hover:bg-neutral-600 p-1 rounded backdrop-blur-md" />
      </Link>
      <h1 className="text-sm uppercase font-semibold mb-6 text-orange-50">
        Crear plan
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="titulo" className="text-lg">
            Título
          </label>
          <Input
            type="text"
            value={plan.title}
            id="titulo"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="descripcion" className="text-lg">
            Descripción
          </label>
          <Input
            type="text"
            value={plan.description}
            id="descripcion"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="duracion" className="text-lg">
            Duración
          </label>
          <Input
            type="text"
            value={plan.duration}
            id="duracion"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="precio" className="text-lg">
            Precio
          </label>
          <Input
            type="number"
            value={plan.price}
            id="precio"
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-lg" htmlFor="caracteristicas">
            Características
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="caracteristicas"
              value={newFeature}
              onChange={(e) => setNewFeature(e.target.value)}
              className="py-2 px-3 rounded-lg flex-1 text-black bg-orange-50"
            />
            <button
              type="button"
              onClick={handleAddFeature}
              className="bg-orange-50 text-black px-4 rounded-lg"
            >
              Agregar
            </button>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            {plan.features.map((feature, index) => (
              <div className="flex justify-between items-center bg-orange-50 px-3 py-1 rounded">
                <span className="text-black">{feature}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveFeature(index)}
                  className="text-red-600 text-sm"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="bg-blue-600 rounded-lg py-4 w-[25%]">
          Editar
        </button>
      </form>
    </>
  );
}

export default EditPlan;
