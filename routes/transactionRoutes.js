const express = require("express");
const transactionController = require("./../controllers/transactions");

const router = express.Router();

router.route("/").post(transactionController.createTransaction);
router.route("/trans-stats").get(transactionController.getTransactionStats);
router.route("/").delete(transactionController.deleteTransaction);
module.exports = router;
