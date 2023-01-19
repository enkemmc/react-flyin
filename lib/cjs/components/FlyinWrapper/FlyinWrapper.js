"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlyinWrapper = void 0;
const react_1 = __importDefault(require("react"));
const FlyinWrapper = ({ style, children }) => {
    return (react_1.default.createElement("div", { className: 'flyinWrapper', style: Object.assign({ position: 'relative' }, style) }, children));
};
exports.FlyinWrapper = FlyinWrapper;
