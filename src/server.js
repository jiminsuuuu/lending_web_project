import express from "express";
import path from "path";

const app = express();
const PORT = 3002;



console.log(__dirname);

app.set("view engine", "pug");
app.use(express.static(  path.join(__dirname, "/assets")));

app.get("/", (req, res) =>{
    res.render("index");
});

app.listen(PORT, () => {
    

    console.log(`${PORT} Server Start!`);
});