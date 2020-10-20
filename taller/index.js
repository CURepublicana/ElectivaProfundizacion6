const { app, BrowserWindow, session } = require('electron')

function createWindow () {
  
  let ses = session.defaultSession
  let getCookies = () => {
    ses.cookies.get({})
    .then( cookies => {
      console.log("Cookies detalladas: " + cookies)
    })
    .catch(errors => {
      console.log("Errores: " +errors)
    })
  }
  
  
  // Crea la ventana del navegador.
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // y carga el index.html de la aplicación.
  win.loadFile('index.html')
  //win.loadURL('https://www.github.com/')

  let cookies_ubicacion = {url: 'https://misitioweb.com', name:'Cookie1', value: 'electron'}
  ses.cookies.set(cookies_ubicacion)
    .then(() => {
      console.log('cookies_ubicacion creada')
      getCookies()
    })
  
    ses.cookies.remove(cookies_ubicacion)
    .then(() => {
      console.log('cookies_ubicacion removida')
      getCookies()
    })
  // Abre las herramientas de desarrollo (DevTools).
  win.webContents.openDevTools()
  
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
