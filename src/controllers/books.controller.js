/** llamar el modelo */

/**Que muestra todos los registro de la base de datos */
const index = async (req, res) => {
  return res.status(201).json({
    status: true,
    message: "Listado de libros de forma correcta",
  });
};

/**Crear un nuevo registro */
const create = async (req, res) => {
  return res.status(201).json({
    status: true,
    message: "Libro creado de forma correcta",
  });
};

/**MOstrar un resgistro en especifico */
const show = async (req, res) => {
  return res.status(201).json({
    status: true,
    message: "Libro consultado de forma correcta",
  });
};

/**Actualizar un registro especifico */
const update = async (req, res) => {
  return res.status(201).json({
    status: true,
    message: "Libro actualizado de forma correcta",
  });
};

/**Eliminar un registro especifico */
const destroy = async (req, res) => {
  return res.status(201).json({
    status: true,
    message: "Libro eliminado de forma correcta",
  });
};

/**
 * Exporta todas las funciones del controlador para su uso en las rutas.
 *
 * @type {object}
 */
module.exports = {
  index,
  create,
  update,
  show,
  destroy,
};
