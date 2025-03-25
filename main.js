const obsidian = require('obsidian');

class ToggleDarkModePlugin extends obsidian.Plugin {
	onload() {
		this.addCommand(
			{
				id: 'toggle-dark-mode',
				name: 'Toggle',
				callback: () => {
					if (document.body.classList.contains('theme-dark')) {
						this.app.commands.executeCommandById('theme:use-light')
					} else {
						this.app.commands.executeCommandById('theme:use-dark')
					}
				},
			},
		);
	}
}

module.exports = ToggleDarkModePlugin;
