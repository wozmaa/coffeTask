const { Router } = require("express");

const { drinksController } = require("../controllers/drinks.controller");

const router = Router();

router.get("/drinks", drinksController.getDrinks);
router.get("/drinks/:id", drinksController.getDrinksById);
router.get("/drinks/:id", drinksController.getDrinksInStock);
router.post("/drinks", drinksController.postDrinks);
router.delete("/drinks/:id", drinksController.deleteDrinksById);
router.patch("/drinks/:id", drinksController.patchDrinksById);

module.exports = router;
