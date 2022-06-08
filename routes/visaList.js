const router = require("express").Router();

const VisaTaskModel = require("../models/visa");

router
	.get("/", async (req, res) => {
		await VisaTaskModel.find({}, (err, task) => {
			res.render("benefits", { visaTask: task });
		});
	})
	.post("/add/task", async (req, res) => {
		const { task } = req.body;
		const newTask = await new VisaTaskModel({
			title: req.body.title,
			content: req.body.content,
		});
		await newTask
			.save()
			.then(() => {
				console.log("added");
				res.redirect("/");
			})
			.catch((err) => console.log(err));
	})
	.get("/delete/task/:_id", async (req, res) => {
		const { _id } = req.params;
		await VisaTaskModel.deleteOne({ _id })
			.then(() => {
				console.log("deleted");
				res.redirect("/");
			})
			.catch((err) => console.log(err));
	});
// .get('/update/task/:_id', (req,res)=> {
//     const {id} = req.params
//     const info = VisaTaskModel.find()
//     VisaTaskModel.updateOne({_id}, )
// })

module.exports = router;
