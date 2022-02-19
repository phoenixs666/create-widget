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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var utils_1 = require("@umijs/utils");
var fs_1 = require("fs");
var path_1 = require("path");
var AppGenerator = /** @class */ (function () {
    function AppGenerator(_a) {
        var cwd = _a.cwd, args = _a.args;
        this.cwd = cwd;
        this.args = args;
        this.prompts = {};
    }
    AppGenerator.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var questions, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        questions = this.prompting();
                        _a = this;
                        return [4 /*yield*/, (0, utils_1.prompts)(questions)];
                    case 1:
                        _a.prompts = _b.sent();
                        return [4 /*yield*/, this.writing()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppGenerator.prototype.prompting = function () {
        return [];
    };
    AppGenerator.prototype.copyTpl = function (opts) {
        var tpl = (0, fs_1.readFileSync)(opts.templatePath, "utf-8");
        var content = utils_1.Mustache.render(tpl, opts.context);
        utils_1.mkdirp.sync((0, path_1.dirname)(opts.target));
        console.log("".concat(utils_1.chalk.green("Write:"), " ").concat((0, path_1.relative)(this.cwd, opts.target)));
        (0, fs_1.writeFileSync)(opts.target, content, "utf-8");
    };
    AppGenerator.prototype.copyDirectory = function (opts) {
        var _this = this;
        var files = utils_1.glob.sync("**/*", {
            cwd: opts.path,
            dot: true,
            ignore: ["**/node_modules/**"],
        });
        files.forEach(function (file) {
            var absFile = (0, path_1.join)(opts.path, file);
            if ((0, fs_1.statSync)(absFile).isDirectory())
                return;
            if (file.endsWith(".tpl")) {
                _this.copyTpl({
                    templatePath: absFile,
                    target: (0, path_1.join)(opts.target, file.replace(/\.tpl$/, "")),
                    context: opts.context,
                });
            }
            else {
                console.log("".concat(utils_1.chalk.green("Copy: "), " ").concat(file));
                var absTarget = (0, path_1.join)(opts.target, file);
                utils_1.mkdirp.sync((0, path_1.dirname)(absTarget));
                (0, fs_1.copyFileSync)(absFile, absTarget);
            }
        });
    };
    AppGenerator.prototype.writing = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cwd, packageName;
            return __generator(this, function (_a) {
                cwd = (0, utils_1.winPath)(this.cwd);
                packageName = this.args.name || cwd.split("/").pop();
                this.copyDirectory({
                    context: {
                        version: require("../../package").version,
                        siteMode: this.args.site,
                        packageName: packageName,
                    },
                    path: (0, path_1.join)(__dirname, "../../templates"),
                    target: this.cwd,
                });
                return [2 /*return*/];
            });
        });
    };
    return AppGenerator;
}());
exports.default = AppGenerator;
//# sourceMappingURL=AppGenerator.js.map