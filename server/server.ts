require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const port = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Database is connected..."))
  .catch((err) => console.log(err))

//db schema
const messageSchema = mongoose.Schema({
  text: String,
  createdAt: String,
})

//db model
const Message = new mongoose.model("Message", messageSchema)

app.get("/get-messages", (req, res) => {
  Message.find()
    .then((messages) => res.json(messages))
    .catch((err) => console.log(err))
})

app.listen(port, () => {
  console.log(`Server is running on post ${port}`)
})
