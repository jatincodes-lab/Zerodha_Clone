const express = require('express');
const router = express.Router();
const Holding = require("../models/holdingsModel");
const Position = require("../models/positionsModel");

router.get("/allHoldings", async (req, res) => {
  const allHoldings = await Holding.find({});
  res.json(allHoldings);
});

router.get("/allPositions", async (req, res) => {
  const allPositions = await Position.find({});
  res.json(allPositions);
});

module.exports = router;