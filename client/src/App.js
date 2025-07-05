"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var Sidebar_1 = require("./components/shared/Sidebar");
var pdfInput_1 = require("./pages/pdfInput");
var react_1 = require("react");
var reportDashboard_1 = require("./pages/reportDashboard");
var App = function () {
    var _a = (0, react_1.useState)(null), reportsData = _a[0], setReportsData = _a[1];
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)("main", { className: "flex w-screen h-screen", children: [(0, jsx_runtime_1.jsx)(Sidebar_1.default, {}), (0, jsx_runtime_1.jsx)("section", { className: "overflow-y-auto h-full flex-1 p-4", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(pdfInput_1.default, { setData: setReportsData }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/reports", element: (0, jsx_runtime_1.jsx)(reportDashboard_1.default, { data: reportsData }) })] }) })] }) }));
};
exports.default = App;
