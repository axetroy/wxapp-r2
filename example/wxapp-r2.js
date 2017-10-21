(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["r2"] = factory();
	else
		root["r2"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Created by axetroy on 17-6-23.
 */
/// <reference path="./index.d.ts" />
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var defaultOptions = {
    method: 'GET',
    url: '',
    body: '',
    header: {}
};
function resolve(data) {
    return Promise.resolve(data);
}
function reject(data) {
    return Promise.reject(data);
}
var isDebug = false;
var R2 = /** @class */ (function () {
    function R2(argv) {
        if (typeof argv === 'string') {
            this.options = __assign({}, defaultOptions, { url: argv });
        }
        else if (typeof argv === 'object') {
            this.options = __assign({}, defaultOptions, argv);
        }
    }
    /**
     * set request method
     * @param {string} method
     * @returns {R2}
     * @private
     */
    R2.prototype._setMethod = function (method) {
        this.options.method = method;
        return this;
    };
    R2.prototype.request = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var method, url;
            return __generator(this, function (_a) {
                method = this.options.method;
                url = this.options.url;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        wx.request({
                            method: method,
                            url: url,
                            data: _this.options.body,
                            header: _this.options.header,
                            dataType: 'json',
                            success: function (res) {
                                if (res.statusCode >= 400) {
                                    reject(res.data);
                                }
                                else {
                                    resolve(res.data);
                                }
                            },
                            fail: function (res) {
                                reject(res.data);
                            }
                        });
                    })
                        .then(function (data) {
                        if (isDebug) {
                            console.log("%c[" + method + "]%c: " + url, 'color:green', 'color:black');
                        }
                        return resolve(data);
                    })
                        .catch(function (data) {
                        if (isDebug) {
                            console.log("%c[" + method + "]%c: " + url, 'color:red', 'color:black');
                        }
                        return reject(data);
                    })];
            });
        });
    };
    Object.defineProperty(R2.prototype, "text", {
        /**
         * get response text
         * @returns {Promise<any>}
         */
        get: function () {
            return this.request().then(function (data) {
                if (typeof data !== 'object') {
                    try {
                        data = JSON.stringify(data);
                    }
                    catch (err) {
                        return reject(err);
                    }
                }
                return resolve(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R2.prototype, "json", {
        /**
         * get response json
         * @returns {Promise<any>}
         */
        get: function () {
            return this.request().then(function (data) {
                if (typeof data !== 'object') {
                    try {
                        data = JSON.parse(data);
                    }
                    catch (err) {
                        return reject(err);
                    }
                }
                return resolve(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    return R2;
}());
function main(opts) {
    return new R2(opts);
}
Object.defineProperty(main, 'debug', {
    set: function (val) {
        isDebug = val;
    }
});
module.exports = main;
module.exports['get'] = function (argv, opts) {
    return new R2(argv)._setMethod('GET');
};
module.exports['post'] = function (argv, opts) {
    return new R2(argv)._setMethod('POST');
};
module.exports['put'] = function (argv, opts) {
    return new R2(argv)._setMethod('PUT');
};
module.exports['delete'] = function (argv, opts) {
    return new R2(argv)._setMethod('DELETE');
};


/***/ })
/******/ ]);
});