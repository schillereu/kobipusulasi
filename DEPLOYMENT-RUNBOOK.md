# KOBİ Rotası Yayin ve Kalite Kontrol Runbook'u

Bu calisma kitabi, KOBİ Rotası sitesini GitHub Pages uzerinde yayinlamak, yayin durumunu kontrol etmek, hata durumunda geri donmek ve ucretsiz hosting alternatiflerini hazir tutmak icin kullanilir.

## 1. Yayin Oncesi Kontrol

- `index.html`, `style.css`, `script.js`, `.nojekyll`, `robots.txt`, `site.webmanifest`, `privacy.html` ve `affiliate.html` kok dizinde olmali.
- `node --check script.js` hatasiz bitmeli.
- Ana sayfa yerelde acilmali.
- Arama, filtre, siralama, favori, karsilastirma ve link alma ozellikleri denenmeli.
- Mobil ekranda butonlar, kartlar ve modal tasma yapmamali.
- Gizlilik ve affiliate sayfalari footer'dan ulasilabilir olmali.

## 2. GitHub'a Aktarma

Onerilen otomatik akis:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\sync-github.ps1
```

Bu akis:

- JavaScript kontrolu yapar.
- Dosyalari `schillereu/kobirotasi` reposuna aktarir.
- GitHub Pages'in hazirlanmasini bekler.
- Canli linkin acildigini kontrol eder.

Manuel alternatif:

1. GitHub reposunu ac.
2. `Add file` > `Upload files` ile dosyalari yukle.
3. Commit mesaji yaz.
4. `Settings` > `Pages` bolumunde `main` ve `/root` secili oldugunu kontrol et.

## 3. Pages Durum Kontrolu

Kontrol edilecek linkler:

- Repo: https://github.com/schillereu/kobirotasi
- Site: https://schillereu.github.io/kobirotasi/

Beklenen durum:

- GitHub Pages status: `built`
- Canli site HTTP: `200`
- Ana sayfada `KOBİ Rotası` metni gorunur.

## 4. Canli Site Kontrol Listesi

- [ ] Ana sayfa aciliyor.
- [ ] CSS uygulanmis.
- [ ] JavaScript etkilesimleri calisiyor.
- [ ] Kategori filtreleri calisiyor.
- [ ] Arama calisiyor.
- [ ] Siralama calisiyor.
- [ ] Favorilere ekleme calisiyor.
- [ ] Karsilastirma modal'i aciliyor.
- [ ] Link alma ozelligi calisiyor.
- [ ] `privacy.html` aciliyor.
- [ ] `affiliate.html` aciliyor.
- [ ] `robots.txt` aciliyor.
- [ ] `site.webmanifest` aciliyor.
- [ ] Mobil gorunumde tasma yok.

## 5. Hata Durumunda Geri Donus

Once hatayi siniflandir:

- Site tamamen acilmiyor.
- Site aciliyor ama stil veya script yok.
- Bazi sayfalar 404 veriyor.
- GitHub Pages build basarisiz.
- Yeni ozellik canli sitede calismiyor.

Hizli cozum adimlari:

1. GitHub Pages ayarinda branch `main`, klasor `/root` mi kontrol et.
2. `index.html` kok dizinde mi kontrol et.
3. Dosya adlarinda buyuk/kucuk harf hatasi var mi bak.
4. `node --check script.js` calistir.
5. Son degisen dosyayi kucuk bir duzeltmeyle yeniden yayinla.

## 6. Ucretsiz Hosting Alternatifleri

Oncelik sirasi:

1. GitHub Pages: Portfoy icin en uygun ve ucretsiz yol.
2. Netlify: Statik site icin hizli yedek yayin kanali.
3. Vercel: GitHub baglantili otomatik yayin icin iyi alternatif.
4. Cloudflare Pages: CDN ve DNS tarafinda guclu alternatif.

Bu projede `netlify.toml` ve `vercel.json` bulundugu icin Netlify ve Vercel'e gecis kolaydir.

## 7. Yayin Kaydi Sablonu

```text
Yayin tarihi:
Yayinlayan:
Repo:
Canli URL:
Kontrol eden:
Eklenen ozellikler:
Bulunan sorunlar:
Alinan aksiyonlar:
Son durum:
```

## 8. Basari Kriteri

Yayin ancak su kosullar birlikte saglandiginda tamam kabul edilir:

- Canli link herkes tarafindan acilir.
- GitHub Pages durumu `built` olur.
- Ana sayfa ve yasal sayfalar calisir.
- Mobil ve masaustu gorunumde kritik bozulma yoktur.
- Gelir veya affiliate iddialari seffaf sekilde belirtilir.
