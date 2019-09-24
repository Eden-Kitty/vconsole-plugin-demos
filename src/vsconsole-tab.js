import QRCode from 'qrcode'

class VconsoleTab {
  constructor(myPlugin) {
    this.init(myPlugin)
  }

  typeNameMap = {
    'jfwklc': {
      btntext: '测试app1',
      prefix: 'jfwklc://pushWindow?url='
    },
    'jfwallet': {
      btntext: '测试app2',
      prefix: 'jfwallet://JFWebViewModelProtocol?startPageUrl='
    },
    'Refresh': {
      btntext: 'Refresh',
      prefix: ''
    }
  }

  init = (myPlugin) => {
    this.renderTab(myPlugin)
    this.addTool(myPlugin)
  }
  renderQrcode = () => {
    const canvas = document.getElementById('qrcode')
    let canvasText = window.location.href
    QRCode.toCanvas(canvas, canvasText, function (error) {
      if (error) console.error(error)
      canvas.style.height = '60vw'
      canvas.style.width = '60vw'
      console.log('success!')
    })
  }
  renderTab = myPlugin => {
    const self = this
    myPlugin.on('renderTab', function (callback) {
      let html = '<div style="text-align: center;padding-top:10vh;">' +
        '<canvas id="qrcode" ></canvas>' +
        '</div>'
      callback(html)
      self.renderQrcode()
    })
  }
  addTool = myPlugin => {
    const self = this
    myPlugin.on('addTool', function (callback) {
      let buttonLists = []
      Object.keys(self.typeNameMap).forEach((key) => {
        const event = () => {
          if (self.typeNameMap[key].btntext === 'Refresh') {
            window.location.reload()
          } else {
            window.location = self.typeNameMap[key].prefix + window.location.href
          }
        }

        buttonLists.push({
          name: self.typeNameMap[key].btntext,
          onClick: event
        })
      })
      callback(buttonLists)
    })
  }
}

export default VconsoleTab
