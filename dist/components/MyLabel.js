"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./MyLabel.css");
const MyLabel = ({ allCaps = false, backgroundColor = 'transparent', color = 'primary', fontColor = '#000', label = 'No Label', size = 'normal', }) => {
    return ((0, jsx_runtime_1.jsx)("span", { className: `label ${size} text-${color} `, style: { color: fontColor, backgroundColor: backgroundColor }, children: allCaps ? label.toUpperCase() : label }));
};
exports.MyLabel = MyLabel;
