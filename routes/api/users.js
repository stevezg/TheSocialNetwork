const express = require("express")
const router = express.Router()

//ROUTE: GET api/users/test
// Description: test route for users
//Access Public
router.get("/test", (req, res) => res.json({msg: "user works"}))

module.exports = router
