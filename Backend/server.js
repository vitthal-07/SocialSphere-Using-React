const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

let posts = require("./posts.json");

app.use(
    cors({
        origin: "*",
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(express.json());

app.get("/api/posts", (req, res) => {
    res.json(posts);
});

app.post("/api/posts", (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        body: req.body.body,
        tags: req.body.tags,
        views: parseInt(req.body.views),
    };
    posts.unshift(newPost);
    fs.writeFileSync("./posts.json", JSON.stringify(posts, null, 2));
    res.json({ message: `Post added successfully` });
});

app.delete("/api/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = posts.findIndex((post) => post.id === id);
    if (index !== -1) {
        posts.splice(index, 1);
        fs.writeFileSync("./posts.json", JSON.stringify(posts, null, 2));
        res.json({ message: `Post with id ${id} deleted successfully` });
    } else {
        res.status(404).json({ message: `Post with id ${id} not found` });
    }
});

app.listen(3001, () => {
    console.log("Server started on port 3001");
});
