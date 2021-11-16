const router = require("express").Router();
const orderRoutes = require("./orders");
const menuRoutes = require("./menu");

// Order routes
router.use("/orders", orderRoutes);
router.use("/menu", menuRoutes);

module.exports = router;
