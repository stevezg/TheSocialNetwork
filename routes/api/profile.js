const express = require("express")
const router = express.Router()

//ROUTE: GET api/profile/test
// Description: test route for profile
//Access Public
router.get("/test", (req, res) => res.json({msg: "profile works"}))

module.exports = router
