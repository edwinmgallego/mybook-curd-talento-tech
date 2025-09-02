/** llamar el modelo */
const Book = require("../models/books.model");
const index = async (req, res) => {
  try {
    const books = await Book.findAll(); // Obtener todos los registros

    return res.status(200).json({
      status: true,
      message: "Listado de libros de forma correcta",
      data: books, // Aquí mandamos la lista de libros
    });
  } catch (error) {
    console.error("Error al obtener los libros:", error);
    return res.status(500).json({
      status: false,
      message: "Error al obtener los libros",
    });
  }
};

/**Crear un nuevo registro */
const create = async (req, res) => {
  try {
    const { code } = req.body;
    const bookExist = await Book.findOne({ where: { code } });
    if (bookExist) {
      return res.status(400).json({
        status: false,
        message: "El código del libro ya existe",
      });
    }

    // 🔄 MODIFICADO: Añadir el nombre del archivo si existe
    const bookData = { ...req.body };
    if (req.file) {
      bookData.cover_image_filename = req.file.filename; // Guardamos solo el nombre del archivo
    }
    /**crear el registro */
    /**crear el registro */
    await Book.create(bookData);

    return res.status(201).json({
      status: true,
      message: "Libro creado de forma correcta",
    });
  } catch (error) {
    console.error("Error al crear el libro:", error);
    return res.status(500).json({
      status: false,
      message: "Error al crear el libro",
    });
  }
};

/**Mostrar un registro en específico */
const show = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({
        status: false,
        message: "Libro no encontrado",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Libro consultado de forma correcta",
      data: book,
    });
  } catch (error) {
    console.error("Error al consultar el libro:", error);
    return res.status(500).json({
      status: false,
      message: "Error al consultar el libro",
    });
  }
};
/**Actualizar un registro especifico */
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({
        status: false,
        message: "Libro no encontrado",
      });
    }

    // 🔄 MODIFICADO: Preparar datos y añadir nuevo archivo si se sube
    const updateData = { ...req.body };
    if (req.file) {
      // Opcional: podrías querer borrar el archivo antiguo del servidor aquí
      updateData.cover_image_filename = req.file.filename;
    }

    await book.update(updateData);

    return res.status(200).json({
      status: true,
      message: "Libro actualizado de forma correcta",
      data: book,
    });
  } catch (error) {
    console.error("Error al actualizar el libro:", error);
    return res.status(500).json({
      status: false,
      message: "Error al actualizar el libro",
    });
  }
};

/**Eliminar un registro especifico */
const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({
        status: false,
        message: "Libro no encontrado",
      });
    }

    await book.destroy();

    return res.status(200).json({
      status: true,
      message: "Libro eliminado de forma correcta",
    });
  } catch (error) {
    console.error("Error al eliminar el libro:", error);
    return res.status(500).json({
      status: false,
      message: "Error al eliminar el libro",
    });
  }
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
