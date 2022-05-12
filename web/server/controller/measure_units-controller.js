const express = require("express");
const router = express.Router();

const ListAbl = require("../abl/measure_units/list-abl");

router.get("/list", async(req,res) =>{
    await ListAbl(req,res);
});

module.exports = router;