// Modulos
const {app, BrowserWindow, session, webContents} = require('electron')

// Mantenga una referencia global del objeto de la ventana, si no lo hace, la ventana
// se cerrará automáticamente cuando el objeto de JavaScript sea basura recogida.
let mainWindow, secWindow, thirdWindow, FourthWindow

// Crear un nuevo BrowserWindow cuando `app` esté listo
function createWindow () {
  // const constante = "No Cambie";
  // let variable = "Cambia"
  // var variable = "Cambia"
  //dev -> socket -      websocket ()  -> 80, 443, 21,25, 5556 .... 2 16 => 0 ... 20 - (65.536) - (20)
  //       C,C#,Java     js,nodejs (js for backend), scala... etc
  
  //padre responsable
  mainWindow = new BrowserWindow({
    width: 1000, height: 800,
    webPreferences: { nodeIntegration: true }
  })

  //primer hijo
  secWindow = new BrowserWindow({
    width: 600, height: 600,
    x: 200, y: 200,
    webPreferences: {
      nodeIntegration: true
    }
  })

  //segundo hijo
  thirdWindow = new BrowserWindow({
    width: 200, height: 200,
    x: 20, y: 20,
    webPreferences: {
      nodeIntegration: true      
    }
  })

  //tercer hijo
  FourthWindow = new BrowserWindow({
    width: 300, height: 300,
    webPreferences: {
      nodeIntegration: true,
      parent: mainWindow, 
      frame: false, //marco 
      modal: true //algo que nos aparece así nosotros deseamos movernos
    }
  })
  
  FourthWindow.once('ready-to-show', () => {
    FourthWindow.show()
  })

  let ses = mainWindow.webContents.session
  let ses2 = secWindow.webContents.session
  let defaultSes = session.defaultSession

//  ses.clearStorageData()

  mainWindow.loadFile('index.html')
  secWindow.loadURL('http://www.urepublicana.edu.co')
  thirdWindow.loadURL('https://www.gmail.com')
  FourthWindow.loadFile('pagina.html')

  //mainWindow.webContents.openDevTools();
  //secWindow.webContents.openDevTools();
  
  mainWindow.on('closed',  () => {
    mainWindow = null
  })
  secWindow.on('closed',  () => {
    secWindow = null
  })
  thirdWindow.on('closed',  () => {
    thirdWindow = null
  })
  FourthWindow.on('closed',  () => {
    FourthWindow = null
  })

}//hasta aqui llega createWindow

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
