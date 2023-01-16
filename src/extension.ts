import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let jump = vscode.commands.registerCommand('jumpto.jump', async () => {
		const linesToJumpInputResult = await vscode.window.showInputBox({
			placeHolder: "[+|-] lines to jump",
			prompt: "Number of lines to jump."
		})

		if (!linesToJumpInputResult) {
			return;
		}

		const linesToJump = Number.parseInt(linesToJumpInputResult, 10);

		const editor = vscode.window.activeTextEditor;
		const position = editor?.selection.active;
		const proposedNewLineNumber = position!.line + linesToJump;
		let newLineNumber;

		if (proposedNewLineNumber <= editor!.document.lineCount && proposedNewLineNumber > 0) {
			newLineNumber = proposedNewLineNumber;
		} else if (proposedNewLineNumber < 0) {
			newLineNumber = 0;
		} else {
			newLineNumber = editor!.document.lineCount;
		}

		const newPosition = new vscode.Position(newLineNumber, 0);
		const newSelection = new vscode.Selection(newPosition, newPosition);
		const range = newLineNumber-1 < 0 ? 0 : newLineNumber-1;

		editor!.selection = newSelection;
		editor?.revealRange(editor?.document.lineAt(range).range);
	})

	context.subscriptions.push(jump);
}

export function deactivate() {}
