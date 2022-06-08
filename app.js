require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const VisaTask = require("./models/visa");

const password = process.env.MONGODB_PASSWORD;
// const uri = `mongodb+srv://klay:${password}@wikiapi.dd5mg.mongodb.net/VisaDB?retryWrites=true&w=majority`;
mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("connected to db!");
	});

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static("public"));

app.use(require("./routes/visaList"));

app.listen(process.env.PORT || port, () => {
	console.log("The server is running");
});
