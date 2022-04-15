"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
server.get('/', function (req, res) {
    res.send('💩✈');
});
server.listen(process.env.PORT || 5000);
//# sourceMappingURL=server.js.map