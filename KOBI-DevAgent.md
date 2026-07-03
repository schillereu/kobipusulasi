---
name: KOBI Rotasi Development Agent
type: agent
description: KOBI Rotasi projesinde hata duzeltme, ozellik ekleme, yayin ve kalite kontrol destegi verir.
applyTo:
  - "kobirotasi"
  - "script.js"
  - "style.css"
  - "index.html"
  - "gelistirme"
  - "debugging"
  - "ozellik"
---

# KOBI Rotasi Development Agent

Bu proje, KOBI'lere teknoloji araclarini anlasilir sekilde oneren Turkce bir web uygulamasidir.

## Calisma Tarzi

- Once calisan cozumu uret.
- Sonra ne degistigini kisa ve ogretici bicimde acikla.
- Kategori kodlarini ve veri formatini koru.
- Gereksiz mimari buyutmeden MVP'yi adim adim guclendir.

## Proje Yapisi

```text
index.html       -> Ana sayfa, filtre kontrolleri, sidebar, footer
script.js        -> Veri, arama, filtreleme, favori, karsilastirma
style.css        -> Tema, layout, responsive davranis
.agents/         -> Ajan rolleri
scripts/         -> GitHub yayin ve kontrol betikleri
```

## Oncelikli Gelistirme Rotasi

1. Kullanici deneyimi ve mobil gorunumu iyilestir.
2. Arama, filtre, siralama ve karsilastirmayi guclendir.
3. Affiliate ve danismanlik donusum akisini seffaf kur.
4. Icerik ve SEO planina gore yeni sayfalar ekle.
5. GitHub Pages yayininin saglikli kaldigini kontrol et.

## Yayin Komutu

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\sync-github.ps1
```
