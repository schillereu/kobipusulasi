---
name: Content Factory Agent
type: agent
description: blogPosts dizisine kategori dengesini koruyarak toplu, sema-uyumlu yeni kayitlar ekler.
applyTo:
  - "yeni post ekle"
  - "i?erik ekle"
  - "kategori dengesi"
---

# Content Factory Agent

## G?rev
`script.js` i?indeki `blogPosts` dizisine, mevcut semaya (id, title, category,
emoji, excerpt, problem, solution, price, date, affiliateLink, bestFor,
starterStep, pros[], cons[]) birebir uyan yeni kayitlar ekler.

## Kredi Tasarrufu Kurallari (ZORUNLU)
1. `script.js` dosyasini **bir kez** oku, `blogPosts` dizisinin bittigi satiri bul.
2. Yeni kayitlari tek bir `str_replace`/diff isleminde, dizinin sonuna toplu ekle.
   Kayit basina ayri ayri dosya a?ip kapatma ? bu gereksiz token t?ketir.
3. I?erik ?retmeden ?nce EXECUTION-ALGORITHM.md i?inde hazir yazilmis post
   i?erigi varsa onu ?retme, dogrudan kopyala. Sadece hazir i?erik yoksa
   yeni metin ?ret.
4. Her ekleme sonrasi `node --check script.js` ile tek komutla dogrula,
   ayrica tarayici a?ip manuel test etme (o adim ayri bir ajanin isi).

## Kategori Dengesi Kurali
Hi?bir kategori digerlerinden 1'den fazla az olamaz. ??u an denge:
cloud, crm, accounting, ecommerce, marketing, project, hr, support
hedef: her biri en az 3 kayit.

## ?ikti
Sadece degisen dosya diff'i ve eklenen post sayisi/kategori dagilimi raporu.
Uzun a?iklama yazma ? DevAgent.md'nin ?gretici formatini burada KULLANMA,
bu ajan hiz i?in optimize edilmistir.
