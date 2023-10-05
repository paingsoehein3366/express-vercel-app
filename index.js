import express, { json } from "express";
const app = express();

app.use(express.json());

app.use(express.static("public"))

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.send(400);
    console.log("email :", email, ", password :", password);
    res.send(200);
});
app.get("/upload", (req, res) => {
    console.log("email :", req.body.email);
    res.send(200);
});

app.listen(5000, () => {
    console.log("server running port 5000");
})