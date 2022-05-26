const express = require("express");
const router = express.Router();

const CreateAbl = require("../abl/ingredient/create-abl");
const GetAbl = require("../abl/ingredient/get-abl");
const GetOfRecipeAbl = require("../abl/ingredient/getOfRecipe-abl");
const ListAbl = require("../abl/ingredient/list-abl");
const DeleteAbl = require("../abl/ingredient/delete-abl");
const UpdateAbl = require("../abl/ingredient/update-abl");
const ListWithUnitsAbl = require("../abl/ingredient/listWithUnits-abl");

router.post("/create", async (req, res) => {
    await CreateAbl(req, res)
});

router.get("/get", async(req,res) =>{
    await GetAbl(req,res);
});

router.get("/getOfRecipe", async(req,res) =>{
    await GetOfRecipeAbl(req,res);
});

router.get("/list", async(req,res) =>{
    await ListAbl(req,res);
});

router.delete("/delete", async(req,res) =>{
    await DeleteAbl(req,res)
});

router.post("/update", async (req, res) => {
    await UpdateAbl(req, res)
});

router.get("/listWithUnits", async(req,res) =>{
    await ListWithUnitsAbl(req,res);
});

module.exports = router;