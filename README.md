# vconsole-plugin-demos
### 1、vconsole添加tab，并添加扫描二维码
``` js
import VConsole from 'vconsole'
import VconsoleTab from './vsconsole-tab.js'

window.vConsole = new VConsole()
let myPlugin = new VConsole.VConsolePlugin('my_plugin', '唤起手机app')
new VconsoleTab(myPlugin, [
  {name: 'app测试', url: 'xxx://pushWindow?url='}
])
window.vConsole.addPlugin(myPlugin)

```

### 2、api
| 参数 | 备注 |
| --- | --- | 
| name | 唤起app名 |
| url | 打开当前app方法 |
