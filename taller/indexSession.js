const { app, BrowserWindow, webContents, session } = require('electron')

function createWindow () {
  
  let customSession = session.fromPartition("persist:parte_1")
  // Crea la ventana del navegador.
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      session: customSession
    }
  })



  const hijo = new BrowserWindow({
    width: 600,
    height: 400,
    x: 200, y: 200,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // y carga el index.html de la aplicación.
  win.loadFile('index.html')
  hijo.loadFile('index.html')

  let ses = win.webContents.session
  let sesHijo = hijo.webContents.session
  let sesdefault = session.defaultSession

  console.log("Sessión de la padre: " + ses)
  console.log("Sessión de la hijo: " + sesHijo)
  console.log("Sessión de la sesDefault: " + sesdefault)

  console.log("Padre e Hijo comparten datos: " + Object.is(ses, sesHijo))
  console.log("\n\nDefault: " + sesdefault)
  // Abre las herramientas de desarrollo (DevTools).
  win.webContents.openDevTools()
  sesHijo.webContents.openDevTools()
  
  let wc = webContents
  wc.on('new-window', (e, URL) => {
    e.preventDefault(),
    console.log("Abre la nueva ventana {URL}")
})

}

// Este método se llamará cuando Electron haya finalizado
// la inicialización y esté preparado para crear la ventana del navegador.
// Algunas APIs pueden solamente ser usadas despues de que este evento ocurra.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// En este archivo puede incluir el resto del código del proceso principal específico
// de su aplicación. Tu también puedes ponerlos en archivos separados y requerirlos aquí.
