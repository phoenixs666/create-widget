"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@umijs/utils");
var args = (0, utils_1.yParser)(process.argv.slice(2), {
    alias: {
        version: ["v"],
        help: ["h"],
    },
    boolean: ["version"],
});
require("./")
    .default({
    cwd: process.cwd(),
    args: args,
})
    .catch(function (err) {
    console.error("Create failed, ".concat(err.message));
    console.error(err);
});
//# sourceMappingURL=cli.js.map