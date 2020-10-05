// Modulos
const {app, BrowserWindow, session} = require('electron')

let mainWindow

function createWindow () {

  let ses = session.defaultSession

  let getCookies = () => {
    ses.cookies.get({ name:'cookie1' })
      .then( cookies => {
        console.log(cookies)
      })
      .catch( errors => {
        console.log(errors)
      })
  }

  mainWindow = new BrowserWindow({
    width: 1000, height: 800,
    webPreferences: { nodeIntegration: true }
  })

  mainWindow.loadFile('index.html')
//  mainWindow.loadURL('http://www.urepublicana.edu.co')

  ses.cookies.remove('https://www.urepublicana.edu.co', 'cookie1')
    .then( () => {
      getCookies()
    })

  // let cookie = { url:'https://myappdomain.com', name:'cookie1', value:'electron', expirationDate:1622818789 }
  //
  // ses.cookies.set(cookie)
  //   .then( () => {
  //     console.log('cookie1 set')
  //     getCookies()
  //   })

  // mainWindow.webContents.on('did-finish-load', e => {
  //   getCookies()
  // })

  //mainWindow.webContents.openDevTools();

  mainWindow.on('closed',  () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
