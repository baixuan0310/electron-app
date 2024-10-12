const { app, BrowserWindow } = require('electron');
// 在你文件顶部导入 Node.js 的 path 模块
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  });
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})