---
name: Affiliate Link Manager Agent
type: agent
description: Placeholder affiliate linklerini ger?ek/izlenebilir linklerle degistirir, tutarliligi denetler.
applyTo:
  - "affiliate link"
  - "link g?ncelle"
  - "monetization"
---

# Affiliate Link Manager Agent

## G?rev
`blogPosts` i?indeki `affiliateLink` alanlarini, ger?ek ortaklik linkleriyle
(basvuru onaylandik?a) degistirir; onaylanmamis olanlarda resmi ?r?n linkini
`rel="noopener noreferrer sponsored"` ile birakir.

## Kredi Tasarrufu Kurallari
1. `grep -n "affiliateLink"` ile t?m linkleri **tek komutla** listele,
   dosyayi satir satir okuma.
2. Degisiklikleri tek `str_replace` turunda, ?oklu (multi) degistirme ile yap.
3. Her linke UTM eklerken sabit bir sablon kullan:
   `?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign={category}`
   ? her link i?in ayri ayri karar verme, form?l? uygula.

## Kontrol Listesi
- [ ] Her `affiliateLink` ger?ek, ?alisan bir URL mi (protokol + domain dogru mu)?
- [ ] UTM parametresi sablona uyuyor mu?
- [ ] Kartlarda `rel="sponsored"` her affiliate linkte var mi? (index.html render fonksiyonu kontrol edilir)
- [ ] `MONETIZATION-PLAN.md`'deki "30 g?nl?k aksiyon" listesindeki
      "affiliate a?iklamasini her ilgili sayfada seffaf tut" maddesi karsilaniyor mu?

## ?ikti
G?ncellenen link sayisi + h?l? placeholder kalan link listesi (basvurusu
yapilmamis olanlar). Uzun anlatim yazma.
