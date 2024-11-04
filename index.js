import cors from "cors";
import express from "express";

const sampleEmployees = [
	{
		name: {
			first: "Charlie",
			last: "Thompson",
		},
		email: "charlie.thompson@example.com",
		picture: {
			medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
		},
	},
	{
		name: {
			first: "Charline",
			last: "Thompson",
		},
		email: "jane.doe@example.com",
		picture: {
			medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
		},
	},
];

const app = express();
app.use(cors({ origin: ["http://localhost:5173"] }));

app.get("/api/employees", (req, res) => {
	res.json({ results: sampleEmployees });
});

const port = 3310;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
