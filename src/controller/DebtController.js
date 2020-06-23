const Partner = require("../models/Partner");
const Debt = require("../models/Debt");

module.exports = {
  async index(req, res) {
    const { user_id } = req.headers;

    try {
      const debts = await Debt.find({ partner: { $eq: user_id } });

      res.json(debts);
    } catch (error) {
      res.json("Debts not found");
    }
  },

  async store(req, res) {
    const { user_id } = req.headers;
    const { name, value } = req.body;

    try {
      const user = await Partner.findById(user_id);
    } catch (error) {
      res.json("User not found, please try again.");
    }

    try {
      const debt = await Debt.create({
        name,
        value,
        partner: user_id,
      });

      await debt.populate("partner").execPopulate();

      res.json(debt);
    } catch (error) {
      res.json("Debt not registered, try again.");
    }
  },
};
