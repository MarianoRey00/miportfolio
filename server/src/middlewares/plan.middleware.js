export const validateCreatePlan = async (req, res) => {
  const { title, description, duration, price, features } = req.body;
  const errors = [];

  if (!title) {
    errors.push({
      field: "title",
      message: "El titulo no puede estar vacio.",
    });
  }
  if (!description) {
    errors.push({
      field: "description",
      message: "La descripción no puede estar vacia.",
    });
  }
  if (!duration) {
    errors.push({
      field: "duration",
      message: "La duración no puede estar vacia.",
    });
  }
  if (!price) {
    errors.push({
      field: "price",
      message: "El precio no puede estar vacio",
    });
  }
  if (!features) {
    errors.push({
      field: "features",
      message: "Las caracteristicas no pueden estar vacias.",
    });
  }
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  req.title = title;
  req.description = description;
  req.price = price;
  req.duration = duration;
  req.features = features;
  next();
};
