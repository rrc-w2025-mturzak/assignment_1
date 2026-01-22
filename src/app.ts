import express, {Express} from "express";

const app: Express = express();

app.get("/", (req, res) => {
    res.statusCode = 500;
    res.send("Hello, World");
});

export default app;
