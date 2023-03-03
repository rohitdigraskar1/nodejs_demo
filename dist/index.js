"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ApparelRoutes_1 = __importDefault(require("./routes/ApparelRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes = new ApparelRoutes_1.default();
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.PORT || 3200;
console.log("hello");
app.use(routes.getRoutes());
app.listen(port, () => {
    console.log(`server is listening to port ${port}`);
});
//# sourceMappingURL=index.js.map