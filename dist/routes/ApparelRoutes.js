"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ApparelController_1 = __importDefault(require("../controllers/ApparelController"));
class Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.setRoutes();
    }
    getRoutes() {
        return this.router;
    }
    setRoutes() {
        this.router.post("/", ApparelController_1.default.addApparel);
    }
}
exports.default = Routes;
//# sourceMappingURL=ApparelRoutes.js.map