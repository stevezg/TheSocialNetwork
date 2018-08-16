const express = require("express")
const mongoose = require("mongoose")

const users = require("./routes/api/users")
const profile = require("./routes/api/profile")
const posts = require("./routes/api/posts")

const app = express()

//mongoDB config
const db = require("./config/key").mongoURI

// connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Not Connected to MongoDB"))

app.get("/", (req, res) => res.send("hello Steve!"))

//use routes
app.use("./api/posts", posts)
app.use("./api/users", users)
app.use("./api/profile", profile)

const port = process.env.PORT || 5000

app.listen(port, () => console.log("server is running on port ${port}"))
