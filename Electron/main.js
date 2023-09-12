const { app, BrowserWindow, ipcMain, Menu, globalShortcut } = require('electron')
const os = require('os')
const path = require('path')

const isDev = process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'development' ? true : false
const isMac = process.platform === 'darwin' ? true : false
function createWindow() {

    const win = new BrowserWindow({
        width: "600px",
        height: "600px",
        show: false,
        icon: path.join(__dirname, 'assets', 'images', 'Screenshot_6.png'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false

        }

    })
    win.loadFile('./src/index.html')

    if (isDev) {

        win.webContents.openDevTools()
    }
    win.once('ready-to-show', () => {
        win.show()
        setTimeout(() => {
            win.webContents.send('cpu name', os.cpus()[0].model)

        }, 3000);

        const menuTemplate = [
            { role: 'appMenu' },
            { role: "fileMenu" },
            { label: 'sexo', submenu: [{ label: "transar", click: console.log("transou") }] },
            { label: 'Window', submenu: [{ label: 'New Window', click: () => { createWindow() }, accelerator: 'control + b' }, { type: 'separator' }, { label: 'close window', click: () => BrowserWindow.getAllWindows().forEach(window => window.close()), accelerator: "control  + f" }] }
        ]

        const menu = Menu.buildFromTemplate(menuTemplate)
        Menu.setApplicationMenu(menu)
    })

}

app.whenReady().then(() => {
    createWindow()
    globalShortcut.register('control + d',() => {
        console.log("globao shortburt")
        BrowserWindow.getAllWindows()[0].setAlwaysOnTop(true)
        BrowserWindow.getAllWindows()[0].setAlwaysOnTop(false)

    })
})
app.on('will-quit', () => {
    globalShortcut.unregisterAll()
})

app.on('window-all-closed', () => {

    if (!isMac) {
        app.quit()

    }

})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {

        createWindow()
    }
})

ipcMain.on('open_new_window', () => {
    createWindow()
})