const express = require("express")
const router = express.Router()

//ROUTE: GET api/posts/test
// Description: test route for posts
//Access Public
router.get("/test", (req, res) => res.json({msg: "posts works"}))

module.exports = router
