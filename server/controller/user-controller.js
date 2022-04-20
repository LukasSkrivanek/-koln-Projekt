const express = require("express");
const router = express.Router();

const CreateAbl = require("../abl/user/create-abl");
const LoginAbl = require("../abl/user/login-abl");

router.post("/create", async (req, res) => {
    await CreateAbl(req, res)
});

router.post("/login", async (req, res) => {
    await LoginAbl(req, res)
});

module.exports = router