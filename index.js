// Importing the needed APIs//
import express from "express"
import axios from "axios"
import ejs from "ejs"


const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/",async(req,res)=>{
    try {
        //Fetching the /networks API //
        const response = await axios.get("https://api.geckoterminal.com/api/v2/networks?page=1");
        const result = response.data.data;
        res.render("index.ejs",{
            cont : result
        });
    } catch (error) {
        console.log(error.message);
    }   
});

// To check if its running properly on the port//
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});