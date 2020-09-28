// Modulos
const {app, BrowserWindow, session} = require('electron')

// Mantenga una referencia global del objeto de la ventana, si no lo hace, la ventana
// se cerrará automáticamente cuando el objeto de JavaScript sea basura recogida.
let mainWindow, secWindow

// Crear un nuevo BrowserWindow cuando `app` esté listo
function createWindow () {

  mainWindow = new BrowserWindow({
    width: 1000, height: 800,
    webPreferences: { nodeIntegration: true }
  })
  secWindow = new BrowserWindow({
    width: 800, height: 600,
    x: 200, y: 200,
    webPreferences: {
      nodeIntegration: true,
      partition: 'persist:part1'
    }
  })

  let ses = mainWindow.webContents.session
  let ses2 = secWindow.webContents.session
  let defaultSes = session.defaultSession

  ses.clearStorageData()

  mainWindow.loadFile('index.html')
  secWindow.loadFile('index.html')

  mainWindow.webContents.openDevTools();
  secWindow.webContents.openDevTools();

  mainWindow.on('closed',  () => {
    mainWindow = null
  })
  secWindow.on('closed',  () => {
    secWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
