// Electron ana süreci: uygulama penceresini oluşturur ve metronom sayfasını yükler.
const { app, BrowserWindow } = require('electron');
const path = require('path');

function pencereOlustur() {
  const pencere = new BrowserWindow({
    width: 440,
    height: 720,
    minWidth: 400,
    minHeight: 620,
    title: 'Metronom',
    icon: path.join(__dirname, 'simge.png'),
    backgroundColor: '#1e1e2e',   // açılırken beyaz parlama olmasın
    autoHideMenuBar: true,        // Dosya/Düzen menü çubuğunu gizle
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,     // sayfa yalnızca HTML/JS çalıştırır, sisteme erişemez
      sandbox: true,
    },
  });

  pencere.removeMenu();
  pencere.loadFile(path.join(__dirname, 'metronom.html'));
  pencere.once('ready-to-show', () => pencere.show());
}

// Aynı anda yalnızca bir metronom penceresi açık olsun
if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', () => {
    const [pencere] = BrowserWindow.getAllWindows();
    if (pencere) {
      if (pencere.isMinimized()) pencere.restore();
      pencere.focus();
    }
  });

  app.whenReady().then(pencereOlustur);
  app.on('window-all-closed', () => app.quit());
}
