const router = require("express").Router();
// const ordersRoutes = require("./orders");
const menuRoutes = require("./menu");

// Menu and Order routes
// router.use("/orders", ordersRoutes);
router.use("/menu", menuRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
