import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "import-sort" is now active!')

    const disposable = vscode.commands.registerCommand('import-sort.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from Import Sort!')
    })

    context.subscriptions.push(disposable)
}

export function deactivate() {}
