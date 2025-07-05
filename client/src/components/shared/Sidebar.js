"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var lucide_react_1 = require("lucide-react");
var react_router_dom_1 = require("react-router-dom");
var Sidebar = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var onClick = function (path) {
        navigate("/".concat(path));
    };
    var menuList = [
        {
            name: "Extract PDF",
            code: "",
        }
    ];
    return ((0, jsx_runtime_1.jsxs)("section", { className: "w-72 bg-[#090040] h-full text-white p-4 flex flex-col gap-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "font-bold text-2xl", children: "PDF Extractor" }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-2", children: menuList.map(function (menu, key) { return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-1 cursor-pointer hover:bg-[#687FE5] p-1", onClick: function () { return onClick(menu.code); }, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.ChevronsRight, {}), menu.name] }, key)); }) })] }));
};
exports.default = Sidebar;
