import express from 'express'
import cors from 'cors'
const morgan = require("morgan");
require("dotenv").config();
import {readdirSync} from "fs"

//create express app 
const app = express();

//apply middlewares 
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// app.use(() => console.log("this is my own middleware"));
// app.use((req , res , next) => {console.log("this is my own middleware")
// next();
// });

//route 
readdirSync("./routes").map((r) => app.use("/api" , require(`./routes/${r}`)));


//port 
const port = process.env.PORT || 8000

app.listen(port, () => console.log(`server is running on port ${port}`))
