import * as vscode from 'vscode'
import { ImportSort } from './common'
import { ImportSortPlus } from './common/plus'

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

    const importAsc = vscode.commands.registerCommand('import-sort.asc-sort-import', () => {
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

    const commonAsc = vscode.commands.registerCommand('import-sort.asc-sort-common', () => {
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

    const demo = vscode.commands.registerCommand('import-sort.sort-demo', () => {
        const editor = vscode.window.activeTextEditor
        if (editor) {
            const selection = editor.selection
            const selectedText = editor.document.getText(selection)
            if (selectedText.length > 0) {
                try {
                } catch (error) {
                    vscode.window.showErrorMessage(String(error))
                }
                // const sort = ImportSortPlus.splitImport(selectedText).splitWord()
            }
            // editor.edit((editBuilder) => {
            // editBuilder.replace(selection, sort) // 替换选中的文本
            // })
        }
    })

    context.subscriptions.push(importDesc)
    context.subscriptions.push(importAsc)
    context.subscriptions.push(commonDesc)
    context.subscriptions.push(commonAsc)
    context.subscriptions.push(demo)
}

export function deactivate() {}
