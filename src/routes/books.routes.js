/**Inicializar el enrutador de express */
const { Router } = require("express");
const multer = require("multer"); // ✅ 1. IMPORTAR MULTER
const path = require("path"); // ✅ 2. IMPORTAR PATH

const router = Router();
// ✅ 3. CONFIGURACIÓN DE MULTER
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/"); // El directorio donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    // Crear un nombre de archivo único para evitar conflictos
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
/**Importar el controlador donde estan las funcionales a enrutar */
const {
  index,
  create,
  update,
  show,
  destroy,
} = require("../controllers/books.controller");

/**Ruta para mostrar todos los registros */
router.get("/", index);
/**Ruta para crear un registro */
// ✅ 4. APLICAR MIDDLEWARE DE MULTER
// 'coverImage' es el nombre del campo <input type="file"> en el HTML
router.post("/", upload.single("coverImage"), create);

/**Ruta para crear un registro */
router.post("/", create);

/**Ruta para mostrar un registro */
router.get("/:id", show);

/** Ruta para actualizar un registro*/
router.put("/:id", update);

/**Ruta para eliminar un registro */
router.delete("/:id", destroy);

/**Exportar las rutas */
module.exports = router;
