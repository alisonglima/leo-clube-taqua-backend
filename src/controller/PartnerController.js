const Partner = require("../models/Partner");

module.exports = {
  async index(req, res) {
    try {
      const partners = await Partner.find();

      res.json(partners);
    } catch (error) {
      res.json(error);
    }
  },

  async store(req, res) {
    const { name, email } = req.body;

    try {
      const partner = await Partner.create({
        name,
        email,
      });

      res.json(partner);
    } catch (error) {
      res.json(error);
    }
  },

  async show(req, res) {
    try {
      const partner = await Partner.findOne({
        email: { $eq: req.body.email },
      });

      res.json(partner);
    } catch (error) {
      res.json(error);
    }
  },
};
