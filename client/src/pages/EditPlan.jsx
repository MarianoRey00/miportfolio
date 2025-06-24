import React from "react";

function EditPlan() {
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
          <Input type="text" id="titulo" name="title" onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="descripcion" className="text-lg">
            Descripción
          </label>
          <Input
            type="text"
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
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-orange-50 px-3 py-1 rounded"
              >
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
          Crear
        </button>
      </form>
    </>
  );
}

export default EditPlan;
