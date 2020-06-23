const { Router } = require("express");

const PartnerController = require("./controller/PartnerController");
const DebtController = require("./controller/DebtController");

const routes = Router();

routes.get("/partner", PartnerController.index);
routes.post("/partner", PartnerController.show);
routes.post("/partner/new", PartnerController.store);

routes.get("/debt", DebtController.index);
routes.post("/debt/new", DebtController.store);
// routes.delete("/debt/:id", PartnerController.delete);

module.exports = routes;
