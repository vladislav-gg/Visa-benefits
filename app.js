require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const VisaTask = require("./models/visa");

const password = process.env.MONGODB_PASSWORD;
const uri = `mongodb+srv://klay:${password}@wikiapi.dd5mg.mongodb.net/VisaDB?retryWrites=true&w=majority`;
mongoose.connect(uri).then(() => {
	console.log("connected to db!");
});

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static("public"));

// GET METHOD
app.get("/", (req, res) => {
	VisaTask.find({}, (err, tasks) => {
		res.render("benefits.ejs", { visaTask: tasks });
	});
});

// Post motehod
app.post("/", async (req, res) => {
	const visaTask = new VisaTask({
		title: req.body.title,
		content: req.body.content,
	});

	try {
		await visaTask.save();
		console.log("success");
		res.redirect("/");
	} catch (err) {
		console.log(err);
		res.redirect("/");
	}
});

// UPDATE METHOD
app
	.route("/edit/:id")
	.get((req, res) => {
		const id = req.params.id;
		VisaTask.find({}, (err, tasks) => {
			res.render("benefitsEdit.ejs", { visaTask: tasks, id: id });
		});
	})
	.post((req, res) => {
		const id = req.params.id;
		VisaTask.findByIdAndUpdate(id, { content: req.body.content }, (err) => {
			if (err) return res.send(500, err);
			res.redirect("/");
		});
	});

// REMOVE METHOD
app.route("/remove/:id").get((req, res) => {
	const id = req.params.id;
	VisaTask.findByIdAndRemove(id, (err) => {
		if (err) return res.send(500, err);
		res.redirect("/");
	});
});

app.listen(port, () => {
	console.log("The server is running");
});
