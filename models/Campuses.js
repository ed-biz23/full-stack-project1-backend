"use strict";
module.exports = (sequelize, DataTypes) => {
  const Campuses = sequelize.define(
    "Campuses",
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Please enter campus name" }
        }
      },
      imageUrl: {
        type: DataTypes.STRING,
        defaultValue: "https://svgshare.com/i/DdH.svg"
      },
      address: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Please enter campus address" }
        }
      },
      description: DataTypes.TEXT
    },
    {}
  );
  Campuses.associate = function(models) {
    // associations can be defined here
    Campuses.hasMany(models.Students, {
      onDelete: "CASCADE",
      foreignKey: "campusId",
      as: "students"
    });
  };
  return Campuses;
};
