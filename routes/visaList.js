const router = require("express").Router();

const VisaTaskModel = require("../models/visa");

router
	.get("visa-benefits.herokuapp.com", (req, res) => {
		VisaTaskModel.find({}, (err, task) => {
			res.render("benefits", { visaTask: task });
		});
	})
	.post("/add/task", (req, res) => {
		const { task } = req.body;
		const newTask = new VisaTaskModel({
			title: req.body.title,
			content: req.body.content,
		});
		newTask
			.save()
			.then(() => {
				console.log("added");
				res.redirect("/");
			})
			.catch((err) => console.log(err));
	})
	.get("/delete/task/:_id", (req, res) => {
		const { _id } = req.params;
		VisaTaskModel.deleteOne({ _id })
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
