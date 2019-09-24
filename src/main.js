import VConsole from 'vconsole'
import VconsoleTab from './vsconsole-tab.js'

window.vConsole = new VConsole()
let myPlugin = new VConsole.VConsolePlugin('my_plugin', '唤起手机app')
new VconsoleTab(myPlugin, [
  {name: 'app测试', url: 'jfwklc://pushWindow?url='}
])
window.vConsole.addPlugin(myPlugin)
