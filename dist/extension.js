/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(__webpack_require__(1));
const common_1 = __webpack_require__(2);
function activate(context) {
    const importDesc = vscode.commands.registerCommand('import-sort.desc-sort-import', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const selectedText = editor.document.getText(selection);
            const sort = common_1.ImportSort.clean().setImportRegex().splitWords(selectedText).descendSort().getResult();
            editor.edit((editBuilder) => {
                editBuilder.replace(selection, sort); // 替换选中的文本
            });
        }
    });
    const importAsc = vscode.commands.registerCommand('import-sort.asc-Sort-import', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const selectedText = editor.document.getText(selection);
            const sort = common_1.ImportSort.clean().setImportRegex().splitWords(selectedText).ascendSort().getResult();
            editor.edit((editBuilder) => {
                editBuilder.replace(selection, sort); // 替换选中的文本
            });
        }
    });
    const commonDesc = vscode.commands.registerCommand('import-sort.desc-sort-common', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const selectedText = editor.document.getText(selection);
            const sort = common_1.ImportSort.clean().setCommonRegex().splitWords(selectedText).descendSort().getResult();
            editor.edit((editBuilder) => {
                editBuilder.replace(selection, sort); // 替换选中的文本
            });
        }
    });
    const commonAsc = vscode.commands.registerCommand('import-sort.asc-Sort-common', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const selectedText = editor.document.getText(selection);
            const sort = common_1.ImportSort.clean().setCommonRegex().splitWords(selectedText).ascendSort().getResult();
            editor.edit((editBuilder) => {
                editBuilder.replace(selection, sort); // 替换选中的文本
            });
        }
    });
    context.subscriptions.push(importDesc);
    context.subscriptions.push(importAsc);
    context.subscriptions.push(commonDesc);
    context.subscriptions.push(commonAsc);
}
function deactivate() { }


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImportSort = void 0;
class ImportSort {
    static importRegex = /import\s+[\s\S]+?\s+from\s+['"][^'"]+['"]\s*;?\r?\n?/g;
    static commonRegex = /\r?\n/g;
    static regex = null;
    static regexType = '';
    static imports = [];
    static result = [];
    constructor() { }
    static clean() {
        ImportSort.imports = [];
        ImportSort.result = [];
        ImportSort.regex = null;
        ImportSort.regexType = '';
        return ImportSort;
    }
    static setImportRegex() {
        ImportSort.regex = ImportSort.importRegex;
        ImportSort.regexType = 'import';
        return ImportSort;
    }
    static setCommonRegex() {
        ImportSort.regex = ImportSort.commonRegex;
        ImportSort.regexType = 'common';
        return ImportSort;
    }
    /**
     * 分割单词
     * @param words
     * @returns
     */
    static splitWords(words) {
        let imports = null;
        switch (ImportSort.regexType) {
            case 'common':
                imports = words.split(ImportSort.regex);
                imports = imports.map((item) => {
                    return item + '\r\n';
                });
                break;
            case 'import':
                imports = words.match(ImportSort.regex);
                break;
        }
        if (imports) {
            ImportSort.imports = imports;
        }
        return ImportSort;
    }
    /**
     * 降序
     * @returns
     */
    static descendSort() {
        ImportSort.result = [...ImportSort.imports].sort((a, b) => {
            return [...b].length - [...a].length;
        });
        return ImportSort;
    }
    /**
     * 升序
     * @returns
     */
    static ascendSort() {
        ImportSort.result = [...ImportSort.imports].sort((a, b) => {
            return [...a].length - [...b].length;
        });
        return ImportSort;
    }
    static getResult() {
        return ImportSort.result.join('');
    }
}
exports.ImportSort = ImportSort;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=extension.js.map