require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const VisaTask = require("./models/visa");

const password = process.env.MONGODB_PASSWORD;
mongoose
	.connect(process.env.DATABASE_URL, {
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

app.listen(process.env.PORT || PORT, () => {
	console.log("The server is running");
});
