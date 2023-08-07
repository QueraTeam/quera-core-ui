"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSSRBreakpointValue = void 0;
const react_1 = require("@chakra-ui/react");
const useSSRBreakpointValue = (values, { ssr = false } = {}) => (0, react_1.useBreakpointValue)(values, { ssr });
exports.useSSRBreakpointValue = useSSRBreakpointValue;
