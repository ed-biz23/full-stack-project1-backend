"use strict";
module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define(
    "Students",
    {
      firstName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Please enter first name" }
        }
      },
      lastName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Please enter last name" }
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: { msg: "Please enter valid email address" }
        }
      },
      imageUrl: {
        type: DataTypes.STRING,
        defaultValue: "https://svgshare.com/i/Ddq.svg"
      },
      gpa: DataTypes.DECIMAL
    },
    {}
  );
  Students.associate = function(models) {
    // associations can be defined here
    Students.belongsTo(models.Campuses, {
      foreignKey: "campusId",
      as: "campuses"
    });
  };
  return Students;
};
