const express = require("express");
const req = require("express/lib/request");
const { send } = require("express/lib/response");
const res = require("express/lib/response");
const { route } = require("./drones");
const router = express.Router();

/* GET home page */


router.get("/", (req, res, next) => res.render("index"));

module.exports = router;
