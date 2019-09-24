import VConsole from 'vconsole'
import VconsoleTab from './vsconsole-tab.js'

window.vConsole = new VConsole()
let myPlugin = new VConsole.VConsolePlugin('my_plugin', '唤起手机app')
new VconsoleTab(myPlugin)
window.vConsole.addPlugin(myPlugin)
