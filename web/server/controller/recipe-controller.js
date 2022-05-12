const express = require("express");
const router = express.Router();

const CreateAbl = require("../abl/recipe/create-abl");
const GetAbl = require("../abl/recipe/get-abl");
const ListAbl = require("../abl/recipe/list-abl");
const DeleteAbl = require("../abl/recipe/delete-abl");
const UpdateAbl = require("../abl/recipe/update-abl");
const ListWithUsersAbl = require("../abl/recipe/listWithUsers-abl");

router.post("/create", async (req, res) => {
    await CreateAbl(req, res)
});

router.get("/get", async(req,res) =>{
    await GetAbl(req,res);
});

router.get("/listWithUsers", async(req,res) =>{
    await ListWithUsersAbl(req,res);
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

module.exports = router;