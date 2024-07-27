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
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode_1 = require("vscode");
const palm_1 = require("./palm");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    var _a;
    console.log(`🤖 OptiSync extension is activated!`);
    const langId = (_a = vscode_1.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document.languageId;
    let disposable = vscode_1.commands.registerCommand('optisyncextension.generateDocstring', () => __awaiter(this, void 0, void 0, function* () {
        const editor = vscode_1.window.activeTextEditor;
        const selection = editor === null || editor === void 0 ? void 0 : editor.selection;
        // let text = "def calculate_sum(n):\n    result = 0\n    for i in range(n):\n        result = result + i\n    return result";
        let text = "";
        let insertionLine = 0;
        if (selection && !selection.isEmpty) {
            const selectionRange = new vscode_1.Range(selection.start.line, selection.start.character, selection.end.line, selection.end.character);
            const highlighted = editor.document.getText(selectionRange);
            text = highlighted;
            insertionLine = editor.selection.start.line;
        }
        if (!text || text === undefined || insertionLine === -1) {
            // console.log("YES");
            const editor = vscode_1.window.activeTextEditor;
            if (!editor) {
                return;
            }
            text = editor.document.getText(editor.selection);
            insertionLine = editor.selection.start.line;
        }
        // show progress window and use PaLM to generate docstring
        vscode_1.window.withProgress({
            location: vscode_1.ProgressLocation.Notification,
            title: "OptiSync",
            cancellable: true
        }, (progress) => __awaiter(this, void 0, void 0, function* () {
            progress.report({
                message: `Creating Docstring...`,
            });
            const res = yield (0, palm_1.getDocumentation)(text, insertionLine);
        }));
    }));
    context.subscriptions.push(disposable);
    let disposableCode = vscode_1.commands.registerCommand("optisyncextension.optimiseCode", () => {
        console.log("Optimise");
        const editor = vscode_1.window.activeTextEditor;
        const selection = editor === null || editor === void 0 ? void 0 : editor.selection;
        // let text = "def calculate_sum(n):\n    result = 0\n    for i in range(n):\n        result = result + i\n    return result";
        let text = "";
        let insertionLine = 0;
        if (selection && !selection.isEmpty) {
            const selectionRange = new vscode_1.Range(selection.start.line, selection.start.character, selection.end.line, selection.end.character);
            const highlighted = editor.document.getText(selectionRange);
            console.log(highlighted);
            text = highlighted;
            insertionLine = editor.selection.start.line;
        }
        if (!text || text === undefined || insertionLine === -1) {
            // console.log("YES");
            const editor = vscode_1.window.activeTextEditor;
            if (!editor) {
                return;
            }
            text = editor.document.getText(editor.selection);
            insertionLine = editor.selection.start.line;
        }
        // show progress window and use PaLM to generate docstring
        vscode_1.window.withProgress({
            location: vscode_1.ProgressLocation.Notification,
            title: "OptiSync",
            cancellable: true
        }, (progress) => __awaiter(this, void 0, void 0, function* () {
            progress.report({
                message: `Optimising Code...`,
            });
            const res = yield (0, palm_1.getOptimisedCode)(text, insertionLine);
        }));
    });
    context.subscriptions.push(disposableCode);
}
// This method is called when your extension is deactivated
function deactivate() { }
//# sourceMappingURL=extension.js.map