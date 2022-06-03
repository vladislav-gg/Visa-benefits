const mongoose = require("mongoose");

const visaSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
});

module.exports = mongoose.model("VisaTask", visaSchema);
