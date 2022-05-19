const express = require("express");
const router = express.Router();

const ListAbl = require("../abl/categories/list-abl");

router.get("/list", async(req,res) =>{
    await ListAbl(req,res);
});

module.exports = router;