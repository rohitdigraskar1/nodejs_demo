import { Request,Response } from "express";
// import fs from "fs";
import Apparel from "../models/Apparel";

class ApparelController {
    private static stock: Apparel[]=[];

    public static addApparel(req:Request,res:Response):void{
        let reqbody= req.body;
        console.log(reqbody);
        const {code,sizes}=reqbody;
        console.log(JSON.stringify({code,sizes}));
        console.log("from req body")

const index = ApparelController.stock.findIndex(
    (apparel)=> apparel.code === code
)
// const getData =(req:Request,res:Response)=>{
//     fs.readFile("data.json,"utf8",(err,data)=>{
//         if(err){
//             console.error(err);
//             res.status(500).send("error in readng the file");
//             return;
//         }
//         const jsonData = JSON.parse(data)
//         res.json(jsonData);
//     })
if(index !== -1) {
    //if apparels exist we need to update the sizes only
    for (const size in sizes) {
        ApparelController.stock[index].sizes[size]=sizes[size];
    }
} else {
    //apparel doesn't exist need to add newly
    ApparelController.stock.push({code,sizes});
}
//return response

res.status(200).json({message:"Apparel added successfully."});
    }

public static getApparel(req:Request,res:Response):void{

    const code = req.params.code;

    //finding apparel with the code

    const apparel = ApparelController.stock.find(
        (apparel)=> apparel.code === code
    );

    if(!apparel){

        res.status(404).json({error:"Apparel did not found"});
    }else {
        res.status(200).json(apparel);
    }

}

}

export default ApparelController;