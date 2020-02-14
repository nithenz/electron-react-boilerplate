const { app, BrowserWindow } = require('electron');
const path = require('path');
let mainWindow;

function createWindow() {
    const startUrl =
        process.env.ELECTRON_START_URL ||
        `file://${path.join(__dirname, '../build/index.html')}`;
    mainWindow = new BrowserWindow({ width: 800, height: 440 });
    mainWindow.loadURL(startUrl);
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}
app.on('ready', createWindow);
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function() {
    if (mainWindow === null) {
        createWindow();
    }
});
