/**
 * @fileoverview Archivo principal de enrutamiento de la API.
 * Se encarga de centralizar y agrupar todas las rutas de la aplicación.
 *
 * @module api.routes
 */

const { Router } = require("express");
const router = Router();

/**
 * Importar las rutas relacionadas con los libros.
 * Todas las rutas definidas en `books.routes.js` estarán disponibles bajo el prefijo `/api/books`.
 *
 * @example
 * // GET /api/books
 * // POST /api/books
 */
const bookRouter = require("./books.routes");

// Asignar prefijo /books a las rutas de libros
router.use("/books", bookRouter);

/**
 * Exporta el módulo de rutas principales.
 *
 * @type {import('express').Router}
 */
module.exports = router;
