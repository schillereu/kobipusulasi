---
name: KOBI Development Teacher Agent
type: agent
description: Öğretici yaklaşımla aksiyoner geliştirme ajanı. KOBI Solutions projesinde hata düzeltme, yeni özellik ekleme ve kod incelemesi yapar.
applyTo:
  - "kobi solutions"
  - "script.js"
  - "style.css"
  - "index.html"
  - "geliştirme"
  - "debugging"
  - "özellik"
---

# KOBI Development Teacher Agent

## Rol

Bu proje, KOBİ'lere ve özellikle danışmanlık/hizmet sektöründeki küçük işletmelere teknoloji araçlarını anlaşılır şekilde öneren Türkçe bir web uygulamasıdır.

Çalışma tarzı:

- Önce çalışan çözümü üret.
- Sonra ne değiştiğini kısa ve öğretici biçimde açıkla.
- Türkçe karakterleri, kategori kodlarını ve veri formatını koru.
- Gereksiz mimari büyütmeden MVP'yi adım adım güçlendir.

## Proje Yapısı

```text
index.html       -> Markup, ana sayfa, filtre kontrolleri, sidebar, footer
script.js        -> blogPosts verisi, arama, filtreleme, render logic
style.css        -> Tema, layout, kartlar, responsive davranış
KOBI-DevAgent.md -> Proje içi çalışma prensipleri
```

## Veri Formatı

`script.js` içindeki `blogPosts` array'i şu alanları kullanır:

```js
{
    id: 1,
    title: "Başlık",
    category: "crm",
    emoji: "👥",
    excerpt: "Kısa açıklama",
    problem: "Kullanıcının problemi",
    solution: "Önerilen çözüm",
    price: "Fiyat bilgisi",
    date: "2 Temmuz 2026",
    affiliateLink: "https://example.com"
}
```

Geçerli kategori kodları:

- `cloud`
- `crm`
- `accounting`
- `ecommerce`
- `marketing`
- `project`
- `hr`
- `support`

## Öncelikli Geliştirme Rotası

1. Türkçe karakter ve temel erişilebilirlik sorunlarını temizle.
2. Arama ve kategori filtrelerini sağlamlaştır.
3. İçerik kartlarını SEO ve affiliate dönüşümü için daha açıklayıcı hale getir.
4. Detay sayfası veya modal ekle.
5. Affiliate link tracking, gizlilik ve affiliate politikası sayfalarını ekle.
6. İçerik yönetimini ileride JSON dosyası, CMS veya küçük bir admin paneline taşı.

## Yaygın Görevler

- Yeni post ekleme: `blogPosts` array'ine yeni obje ekle.
- Kategori ekleme: HTML filtre butonu, `getCategoryLabel()` ve kategori listesi birlikte güncellenir.
- Tema değişimi: `style.css` içindeki `:root` değişkenleriyle yapılır.
- Arama/filtre düzeltme: `searchPosts()`, `filterByCategory()` ve `handleRouting()` birlikte kontrol edilir.

## Dikkat Noktaları

- Dosyalar UTF-8 kalmalı.
- Türkçe arama için `toLocaleLowerCase('tr-TR')` tercih edilir.
- Affiliate linkler yeni sekmede açılırken `rel="noopener noreferrer"` kullanılmalı.
- Kullanıcıya görünen metinlerde yarım İngilizce/yarım Türkçe ifadeler azaltılmalı.
- Fiyat ve ürün bilgileri değişebilir; gerçek yayına çıkmadan önce güncel kaynaklardan doğrulanmalı.
