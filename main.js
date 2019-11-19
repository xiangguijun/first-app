const { app, BrowserWindow } = require('electron')

// keep a global reference to the window object, 
// if not the window object will automatically close when the JavaScript object
// is garbage collected
let win

function createWindow () {
  // create brower window
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // load index.html file
  win.loadFile('index.html')
  // open developer tool
  win.webContents.closeDevTools()

  // register close event handel for window object
  win.on('closed', () => {
    win = null
  })
}

// the function will be called when Electron has been inited and
// prepared for creating window, some API only can be used when this called
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

