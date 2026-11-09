import express from 'express'
import path from 'path'

const app = express();
const port = 3000;

// const path = required("path");
app.use(express.static("./public"));

app.get("/", (req,res) => {
    res.send("Hello")


})
// Serve files from the public folder next to server.js.
// const publicFolder = path.join(import.meta.dirname, "public");


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});