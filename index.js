import express, { json } from "express";
const app = express();

app.use(express.json());

app.use(express.static("public"))

app.get("/", (req, res) => {
    const Array = [
        { id: 1, name: "paing", email: "paing@email.com", password: "paing" },
        { id: 1, name: "soe", email: "soe@email.com", password: "soe" }
    ];
    res.send(Array);
});
app.listen(5000, () => {
    console.log("server running port 5000");
})