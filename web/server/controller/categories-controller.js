const express = require("express");
const router = express.Router();

const ListAbl = require("../abl/categories/list-abl");
const GetAbl = require("../abl/categories/get-abl");

router.get("/list", async(req,res) =>{
    await ListAbl(req,res);
});

router.get("/get", async(req,res) =>{
    await GetAbl(req,res);
});

module.exports = router;