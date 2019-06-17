const Students = require("../models").Students;
const Campuses = require("../models").Campuses;

module.exports = {
  list(req, res) {
    return Students.findAll({
      include: [
        {
          model: Campuses,
          as: "campuses"
        }
      ]
    })
      .then(students => {
        res.status(200).send(students);
      })
      .catch(error => {
        console.log(error);
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    return Students.findByPk(req.params.id, {
      include: [
        {
          model: Campuses,
          as: "campuses"
        }
      ]
    })
      .then(student => {
        if (!student) {
          return res.status(404).send({
            message: "Student Not Found"
          });
        }
        return res.status(200).send(student);
      })
      .catch(error => res.status(400).send(error));
  },

  add(req, res) {
    return Students.create(req.body)
      .then(student => res.status(201).send(student))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Students.findByPk(req.params.id, {
      include: [
        {
          model: Campuses,
          as: "campuses"
        }
      ]
    })
      .then(student => {
        if (!student) {
          return res.status(404).send({
            message: "Student Not Found"
          });
        }
        return student
          .update(req.body)
          .then(() => res.status(200).send(student))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  delete(req, res) {
    return Students.findByPk(req.params.id)
      .then(student => {
        if (!student) {
          return res.status(400).send({
            message: "Student Not Found"
          });
        }
        return student
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
