const router = require("express").Router();
const clientsController = require("../../controllers/clientsController");

// Matches with "/api/clients"
router.route("/clients")
  .get(clientsController.findAll)
  .post(clientsController.create);

// Matches with "/api/clients/name"
// router
//   .route("/:id")
//   .get(clientsController.findById)
//   .put(clientsController.update)
//   .delete(clientsController.remove);

module.exports = router;
