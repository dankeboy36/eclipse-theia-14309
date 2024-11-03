// @ts-check
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const alwaysEmptyTreeDataProvider = {
		getTreeItem() { return {}; },
		getChildren() { return []; },
	};
	const setContext = ({ key, value }) => vscode.commands.executeCommand('setContext', `eclipse-theia-14309-${key}`, value)
	context.subscriptions.push(
		vscode.window.createTreeView('eclipse-theia-14309.emptyView', {
			treeDataProvider: alwaysEmptyTreeDataProvider
		}),
		vscode.commands.registerCommand('eclipse-theia-14309.setEnablementContextFoo', () => setContext({
			key: 'enablement',
			value: 'foo',
		})),
		vscode.commands.registerCommand('eclipse-theia-14309.setEnablementContextBar', () => setContext({
			key: 'enablement',
			value: 'bar',
		})),
		vscode.commands.registerCommand('eclipse-theia-14309.unsetEnablementContext', () => setContext({
			key: 'enablement',
			value: undefined,
		})),
		vscode.commands.registerCommand('eclipse-theia-14309.setWhenContextA', () => setContext({
			key: 'when',
			value: 'a',
		})),
		vscode.commands.registerCommand('eclipse-theia-14309.setWhenContextB', () => setContext({
			key: 'when',
			value: 'b',
		})),
		vscode.commands.registerCommand('eclipse-theia-14309.unsetWhenContext', () => setContext({
			key: 'when',
			value: undefined,
		})),
		vscode.commands.registerCommand('eclipse-theia-14309.helloWorld', () => vscode.window.showInformationMessage('helloWorld')),
	);
}

module.exports = {
	activate
}
