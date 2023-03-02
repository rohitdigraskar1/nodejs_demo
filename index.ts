import express,{ Express} from "express";
import Routes from "./routes/ApparelRoutes";
import dotenv from "dotenv";


const routes= new Routes();
const app: Express = express();
dotenv.config();

const port= process.env.PORT || 3200;
console.log("hello");
app.use(routes.getRoutes());
app.listen(port,()=>{
    console.log(`server is listening to port ${port}`);
});

