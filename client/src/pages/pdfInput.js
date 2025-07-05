"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PdfExtract;
var jsx_runtime_1 = require("react/jsx-runtime");
// frontend/src/App.tsx
var react_1 = require("react");
var button_1 = require("../components/ui/button");
var react_router_dom_1 = require("react-router-dom");
var lucide_react_1 = require("lucide-react");
function PdfExtract(_a) {
    var _this = this;
    var setData = _a.setData;
    var _b = (0, react_1.useState)(null), file = _b[0], setFile = _b[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var handleUpload = function () { return __awaiter(_this, void 0, void 0, function () {
        var formData, response, json;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!file)
                        return [2 /*return*/];
                    formData = new FormData();
                    formData.append("report", file);
                    return [4 /*yield*/, fetch("http://localhost:5001/upload", {
                            method: "POST",
                            body: formData,
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json = _a.sent();
                    setData(json);
                    navigate("/reports");
                    return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)("div", { className: "h-full flex items-center justify-center p-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "p-8 w-full max-w-lg", children: [(0, jsx_runtime_1.jsxs)("label", { htmlFor: "file-upload", className: "flex flex-col items-center justify-center border-2 border-dashed border-[#090040] rounded-xl p-6 cursor-pointer hover:bg-indigo-50 transition", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.UploadCloud, { className: "w-12 h-12 text-[#090040] mb-2" }), (0, jsx_runtime_1.jsx)("span", { className: "text-[#090040] font-medium", children: file
                                ? file.name
                                : "Click to select or drag your PDF here" }), (0, jsx_runtime_1.jsx)("input", { id: "file-upload", type: "file", className: "hidden", onChange: function (e) { var _a; return setFile(((_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0]) || null); } })] }), (0, jsx_runtime_1.jsx)(button_1.Button, { className: "w-full mt-6 bg-[#090040] hover:bg-[#687FE5]", onClick: handleUpload, disabled: !file, children: "Upload & Analyze" })] }) }));
}
