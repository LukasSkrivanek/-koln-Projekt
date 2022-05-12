const express = require("express");
const router = express.Router();

const CreateAbl = require("../abl/user/create-abl");
const LoginAbl = require("../abl/user/login-abl");
const GetAbl = require("../abl/user/get-abl");
const UpdateAbl = require("../abl/user/update-abl");
const DeleteUser = require("../abl/user/delete-abj");
const ListAbl = require("../abl/user/list-abl");

router.post("/create", async (req, res) => {
    await CreateAbl(req, res)
});

router.get("/login", async (req, res) => {
    await LoginAbl(req, res);
});

router.get("/detail", async(req,res) =>{
    await GetAbl(req,res);
});

router.patch("/update", async(req,res) =>{
    await UpdateAbl(req,res);
});

router.delete("/delete", async(req,res) =>{
    await DeleteUser(req,res)
});

router.get("/list", async(req,res) =>{
    await ListAbl(req,res);
});

module.exports = router;