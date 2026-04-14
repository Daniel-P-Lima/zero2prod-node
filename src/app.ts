import express from "express";
import emailsRouter from "./routers/emails-router.js";

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    const randomUUID = crypto.randomUUID();
    console.log(`Request: ${randomUUID} - ${req.method} - ${req.url}`)
    next();
})
app.use(express.json());

app.use("/emails", emailsRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

export {
  app
}