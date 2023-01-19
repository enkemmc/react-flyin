"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlyinItem = void 0;
const react_1 = __importStar(require("react"));
const FlyinItem = ({ image, startPosition, endPosition, zIndex = 0 }) => {
    const pos = Object.assign({ left: '0px', right: '0px', top: '0px', bottom: '0px' }, startPosition);
    const [pageLoaded, setPageLoaded] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (!pageLoaded) {
            const onPageLoad = () => {
                setPageLoaded(true);
                window.removeEventListener('load', onPageLoad);
            };
            if (document.readyState === 'complete') {
                onPageLoad();
            }
            else {
                window.addEventListener('load', onPageLoad);
            }
        }
    }, [pageLoaded]);
    return (react_1.default.createElement("img", { className: 'flyin', alt: "", src: image, style: Object.assign(Object.assign(Object.assign({}, pos), (pageLoaded ? endPosition : {})), { zIndex }) }));
};
exports.FlyinItem = FlyinItem;
