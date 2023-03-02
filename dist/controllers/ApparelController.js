"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApparelController {
    static addApparel(req, res) {
        const { code, sizes } = req.body;
        const reqbody = req.body;
        console.log(reqbody);
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
}
ApparelController.stock = [];
exports.default = ApparelController;
//# sourceMappingURL=ApparelController.js.map