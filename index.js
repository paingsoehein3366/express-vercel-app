import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Express on vercel");
})

app.listen(5000, () => {
    console.log("server running port 5000");
})