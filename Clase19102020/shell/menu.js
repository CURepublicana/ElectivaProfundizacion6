const {app, BrowserWindow, BrowserWindowProxy} = require('electron')

// Mantenga una referencia global del objeto de la ventana, si no lo hace, la ventana
// se cerrará automáticamente cuando el objeto de JavaScript sea basura recogida.
let mainWindow

// Crear un nuevo BrowserWindow cuando `app` esté listo
function createWindow () {

  let recursoRemoto = BrowserWindowProxy;

  mainWindow = new BrowserWindow({
    width: 1000, height: 800,
    webPreferences: { nodeIntegration: true }
  })

  // Cargar index.html en la nueva BrowserWindow
  mainWindow.loadFile('index.html')

  // Open DevTools - ¡Quítese para la PRODUCCIÓN!
  //mainWindow.webContents.openDevTools();
  recursoRemoto.call('https://www.youtube.com/watch?v=OMD8hBsA-RI&list=RDOMD8hBsA-RI&start_radio=1')
  

  // Escuche como se cierra la ventana
  mainWindow.on('closed',  () => {
    mainWindow = null
  })
}

// El electrón `app` está listo
app.on('ready', createWindow)

// Salir cuando todas las ventanas estén cerradas - (No macOS - Darwin)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// Cuando se hace clic en el icono de la aplicación y la aplicación se está ejecutando, (macOS) recrear la BrowserWindow
app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
