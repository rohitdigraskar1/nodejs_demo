"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApparelController {
    static addApparel(req, res) {
        const { code, sizes } = req.body;
        // const reqbody:Apparel = req.body;
        console.log({ code, sizes });
        // console.log("from req body")
        const index = ApparelController.stock.findIndex((apparel) => apparel.code === code);
        if (index !== -1) {
            //if apparels exist we need to update the sizes only
            for (const size in sizes) {
                ApparelController.stock[index].sizes[size] = sizes[size];
            }
        }
        else {
            //apparel doesn't exist need to add newly
            ApparelController.stock.push({ code, sizes });
        }
        //return response
        res.status(200).json({ message: "Apparel added successfully." });
    }
    static getApparel(req, res) {
        const code = req.params.code;
        //finding apparel with the code
        const apparel = ApparelController.stock.find((apparel) => apparel.code === code);
        if (!apparel) {
            res.status(404).json({ error: "Apparel did not found" });
        }
        else {
            res.status(200).json(apparel);
        }
    }
}
ApparelController.stock = [];
exports.default = ApparelController;
//# sourceMappingURL=ApparelController.js.map