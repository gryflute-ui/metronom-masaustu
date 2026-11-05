# 🎵 Metronom

Alt bölüm destekli metronom ve akort aleti. Windows'a kurulabilir, kurulum yapmadan tarayıcıda da kullanılabilir.

**🌐 Tarayıcıda aç:** https://gryflute-ui.github.io/metronom-masaustu/

**⬇️ Windows için indir:** [Metronom-Kurulum-1.1.0.exe](https://github.com/gryflute-ui/metronom-masaustu/releases/download/v1.1.0/Metronom-Kurulum-1.1.0.exe)

## Özellikler

### Metronom
- **Tempo:** 30–250 BPM; kaydırıcı, −/+ düğmeleri veya ok tuşlarıyla ayarlanır. Tempo adı (Largo, Adagio, Andante, Moderato, Allegro, Presto, Prestissimo) otomatik gösterilir.
- **Ölçü:** 2/4, 3/4, 4/4, 5/4, 6/8, 7/8. Ölçünün ilk vuruşu farklı bir sesle vurgulanır.
- **Alt bölüm:** dörtlük, sekizlik, üçleme ve onaltılık. Ara vuruşlar daha pes ve kısık çalar.
- **Tap Tempo:** düğmeye ritimle dokunarak tempo belirlenir.
- **Görsel gösterge:** her vuruş ve ara vuruş, sesle eş zamanlı yanan noktalarla gösterilir.
- **Hassas zamanlama:** sesler Web Audio API saatine göre önceden planlanır, bu yüzden tempo kaymaz.

### Akort aleti
- **Nota algılama:** mikrofondan gelen sesin notası Türkçe adıyla (Do, Re, Mi…) ve harfli adıyla (C4, A4…) gösterilir.
- **Sapma göstergesi:** −50 ile +50 sent arasında ibre. ±5 sent içinde "✓ Akortta" yazar; değilse pesleştirme veya tizleştirme önerir.
- **Kalibrasyon:** La (A4) frekansı 440–450 Hz arasında 1 Hz adımlarla seçilir ve hatırlanır.
- **Referans ses:** seçili A4 frekansında sürekli La sesi çalınabilir.

İlk kullanımda tarayıcı veya uygulama mikrofon izni ister.

## Klavye kısayolları (Metronom sekmesinde)

| Tuş | İşlev |
|---|---|
| Boşluk | Başlat / Durdur |
| ↑ veya → | Tempoyu 1 BPM artır |
| ↓ veya ← | Tempoyu 1 BPM azalt |

## Kurulum (Windows)

1. [Sürümler](https://github.com/gryflute-ui/metronom-masaustu/releases) sayfasından `Metronom-Kurulum-x.x.x.exe` dosyasını indirin.
2. Dosyayı çalıştırın. Dosya dijital olarak imzalı olmadığı için Windows "Windows kişisel bilgisayarınızı korudu" uyarısı gösterebilir: **Ek bilgi → Yine de çalıştır** seçin.
3. Kurulumdan sonra uygulama Başlat menüsünde ve masaüstünde "Metronom" adıyla görünür.

## Geliştirme

Uygulamanın tamamı tek bir HTML dosyasındadır (`metronom.html`). [Electron](https://www.electronjs.org/) bu sayfayı masaüstü penceresinde açar (`main.js`).

Gereken: [Node.js](https://nodejs.org/)

```bash
npm install        # bağımlılıkları kur
npm start          # uygulamayı geliştirme modunda aç
npm run dist       # Windows kurulum dosyasını dist/ klasörüne oluştur
```

`metronom.html` dosyası Electron olmadan, doğrudan tarayıcıda açılarak da çalışır.

## Dosyalar

| Dosya | Açıklama |
|---|---|
| `metronom.html` | Metronom ve akort aleti (arayüz + tüm kod) |
| `main.js` | Electron ana süreci: pencereyi oluşturur |
| `index.html` | Web adresini `metronom.html`'ye yönlendirir |
| `simge.png`, `build/icon.png` | Uygulama simgesi |
| `package.json` | Proje ayarları ve kurulum dosyası yapılandırması |

## Lisans

[MIT](LICENSE): Kodu herkes ücretsiz kullanabilir, değiştirebilir ve dağıtabilir; tek şart telif ve lisans metninin korunmasıdır.
