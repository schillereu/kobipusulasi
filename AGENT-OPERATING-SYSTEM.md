# KOBİ Pusulası Agent Operating System

Bu dokuman, KOBİ Pusulası projesinin gelir uretebilecek bir urune evrilmesi icin ajanlarin nasil yonetilecegini anlatir.

## Ana Yonetim

Ana Koordinator, tum ajanlarin ciktisini denetler. Son karar ve GitHub'a aktarim onayi Ana Koordinator'dedir.

## Ajanlar

- Main Orchestrator: Sureci yonetir.
- Roadmap Planner: Urun yol haritasini belirler.
- GitHub Live Sync & QA: GitHub aktarimi ve canli site kontrolunu yapar.
- Free Hosting Publisher: Ucretsiz yayin yollarini korur.
- Revenue Strategist: Gelir modelini planlar.
- Content & SEO: Trafik getirecek icerik sistemini kurar.
- Conversion & QA: Ziyaretciyi lead'e veya tiklamaya goturen akisi denetler.
- Analytics Operator: Metrikleri ve aylik raporlari takip eder.
- Partnership & Outreach: Affiliate, sponsor ve portfoy gorunurlugu icin calisir.
- Compliance & Trust: Guven, seffaflik ve yasal metinleri kontrol eder.

## Haftalik Calisma Ritmi

1. Pazartesi: Roadmap ve gelir hedefleri kontrol edilir.
2. Sali-Carsamba: Icerik, UX ve yeni ozellikler uygulanir.
3. Persembe: QA, canli link ve mobil kontrol yapilir.
4. Cuma: GitHub'a aktarim, Pages kontrolu ve kisa ilerleme notu yazilir.

## Gelir Yolculugu

1. Trafik: SEO icerikleri ve karsilastirma sayfalari.
2. Guven: Seffaf affiliate notu, sade rehberler ve gercek fayda odakli metin.
3. Donusum: Resmi site cikislari, kisa liste, e-posta kaydi ve danismanlik talebi.
4. Gelir: Affiliate komisyonu, sponsorlu listeleme, premium rehber veya danismanlik lead'i.

## Denetim Kurallari

- Her yayin oncesi `node --check script.js` calisir.
- Her yayin sonrasi canli site 200 yaniti vermelidir.
- GitHub Pages durumu `built` olmalidir.
- Yasal ve guven metinleri yeni gelir modeline gore guncellenmelidir.
- Hicbir ajan baska ajanin veya kullanicinin degisikligini topluca geri almaz.

## Komut Akisi

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\sync-github.ps1
```

Bu komut JavaScript kontrolu yapar, GitHub'a aktarir ve canli siteyi kontrol eder.
