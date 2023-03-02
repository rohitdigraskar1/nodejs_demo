import { Router } from "express";
import ApparelController from "../controllers/ApparelController";


 class Routes{
    private router:Router

    constructor() {
        this.router= Router();
        this.setRoutes();
    }

     getRoutes():Router{

        return this.router;

    }
    private setRoutes():void{

        this.router.post("/",ApparelController.addApparel)

    }
}
export default Routes;