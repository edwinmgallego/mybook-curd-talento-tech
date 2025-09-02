const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database/dbconnection");

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    format: {
      type: DataTypes.ENUM("paperback", "hardcover", "ebook"),
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        min: 0,
        max: 5,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    // ✅ NUEVO CAMPO PARA LA IMAGEN
    cover_image_filename: {
      type: DataTypes.STRING,
      allowNull: true, // Permitimos que sea nulo si un libro no tiene portada
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "Book",
    tableName: "books",
    indexes: [
      {
        fields: ["code"],
        name: "idx_books_code",
      },
      {
        fields: ["title"],
        name: "idx_books_title",
      },
    ],
  }
);

module.exports = Book;
