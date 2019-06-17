const Campuses = require("../models").Campuses;
const Students = require("../models").Students;

module.exports = {
  list(req, res) {
    return Campuses.findAll({
      include: [
        {
          model: Students,
          as: "students"
        }
      ]
    })
      .then(campuses => {
        res.status(200).send(campuses);
      })
      .catch(error => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {
    return Campuses.findByPk(req.params.id, {
      include: [
        {
          model: Students,
          as: "students"
        }
      ]
    })
      .then(campus => {
        if (!campus) {
          return res.status(404).send({
            message: "Campus Not Found"
          });
        }
        return res.status(200).send(campus);
      })
      .catch(error => res.status(400).send(error));
  },

  add(req, res) {
    return Campuses.create(req.body, {
      include: [
        {
          model: Students,
          as: "students"
        }
      ]
    })
      .then(campus => res.status(201).send(campus))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Campuses.findByPk(req.params.id, {
      include: [
        {
          model: Students,
          as: "students"
        }
      ]
    })
      .then(campus => {
        if (!campus) {
          return res.status(404).send({
            message: "Campus Not Found"
          });
        }
        return campus
          .update(req.body)
          .then(() => res.status(200).send(campus))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  delete(req, res) {
    return Campuses.findByPk(req.params.id)
      .then(campus => {
        if (!campus) {
          return res.status(400).send({
            message: "Campus Not Found"
          });
        }
        return campus
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
