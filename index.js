import express from "express";
import ejs from "ejs";


const app = express();
const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const fname="ankit kumar";

app.get("/", (req, res) => {
   res.render("index.ejs")
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });