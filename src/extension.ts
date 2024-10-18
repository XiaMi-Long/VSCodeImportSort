import * as vscode from 'vscode'
import { ImportSort } from './common'

export function activate(context: vscode.ExtensionContext) {
    const importDesc = vscode.commands.registerCommand('import-sort.desc-sort-import', () => {
        const editor = vscode.window.activeTextEditor
        if (editor) {
            const selection = editor.selection
            const selectedText = editor.document.getText(selection)
            const sort = ImportSort.clean().setImportRegex().splitWords(selectedText).descendSort().getResult()
            editor.edit((editBuilder) => {
                editBuilder.replace(selection, sort) // 替换选中的文本
            })
        }
    })

    const importAsc = vscode.commands.registerCommand('import-sort.asc-Sort-import', () => {
        const editor = vscode.window.activeTextEditor
        if (editor) {
            const selection = editor.selection
            const selectedText = editor.document.getText(selection)
            const sort = ImportSort.clean().setImportRegex().splitWords(selectedText).ascendSort().getResult()
            editor.edit((editBuilder) => {
                editBuilder.replace(selection, sort) // 替换选中的文本
            })
        }
    })

    const commonDesc = vscode.commands.registerCommand('import-sort.desc-sort-common', () => {
        const editor = vscode.window.activeTextEditor
        if (editor) {
            const selection = editor.selection
            const selectedText = editor.document.getText(selection)
            const sort = ImportSort.clean().setCommonRegex().splitWords(selectedText).descendSort().getResult()
            editor.edit((editBuilder) => {
                editBuilder.replace(selection, sort) // 替换选中的文本
            })
        }
    })

    const commonAsc = vscode.commands.registerCommand('import-sort.asc-Sort-common', () => {
        const editor = vscode.window.activeTextEditor
        if (editor) {
            const selection = editor.selection
            const selectedText = editor.document.getText(selection)
            const sort = ImportSort.clean().setCommonRegex().splitWords(selectedText).ascendSort().getResult()
            editor.edit((editBuilder) => {
                editBuilder.replace(selection, sort) // 替换选中的文本
            })
        }
    })

    context.subscriptions.push(importDesc)
    context.subscriptions.push(importAsc)
    context.subscriptions.push(commonDesc)
    context.subscriptions.push(commonAsc)
}

export function deactivate() {}
