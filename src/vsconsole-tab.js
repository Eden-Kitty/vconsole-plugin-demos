  import QRCode from 'qrcode'

  class VconsoleTab {
    constructor(myPlugin, ops = []) {
      this.ops = ops
      alert(JSON.stringify(ops))
      this.init(myPlugin)
    }


    map = [
      {
        name: 'Refresh',
        url: ''
      }
    ]

    init = (myPlugin) => {
      this.map = this.map.concat(this.ops)
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
        self.map.forEach((item) => {
          const event = () => {
            if (item.name === 'Refresh') {
              window.location.reload()
            } else {
              window.location = self.map.url + window.location.href
            }
          }
          buttonLists.push({
            name: item.name,
            onClick: event
          })
        })
        callback(buttonLists)
      })
    }
  }

  export default VconsoleTab
