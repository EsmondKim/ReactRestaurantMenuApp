const router = require("express").Router();
const orderRoutes = require("./orders");

// Order routes
router.use("/orders", orderRoutes);

module.exports = router;
