import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/adi", (req, res) => {
	res.send("Hello Adi!");
});

app.listen(3000, () => {
	console.log(`Server started on 3000`);
});
