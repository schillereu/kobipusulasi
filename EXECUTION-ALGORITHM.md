# KOBİ Rotası — Yayına Hazırlık Algoritması
### (Kod editörüne olduğu gibi verilecek, kredi/token tüketimini en aza indirecek şekilde tasarlanmıştır)

**Kullanım talimatı (editöre söyle):** "Bu dosyayı EXECUTION-ALGORITHM.md
olarak proje köküne kaydet, `.agents/` klasörüne 11-14 numaralı yeni ajan
dosyalarını ekle (ayrı olarak veriliyor), sonra `00-main-orchestrator.md`'ye
'Her görevden önce 14-credit-budget-orchestrator-agent.md kurallarını uygula'
notunu ekle. Ardından Adım 0'dan başlayarak sırayla ilerle, her adım
sonunda commit at, adım numarasını commit mesajına yaz."

Her adımda şu üç şey net: **hedef dosya(lar)**, **aksiyon**, **bitiş kriteri**.
Editör bu üçünü biliyorsa dosyaları keşfetmeye gerek kalmaz — bu da en büyük
kredi tasarrufu kaynağıdır.

---

## Adım 0 — Marka geçişi (KOBİ Rotası → KOBİ Rotası)

**Neden önce bu:** Site henüz canlı trafik/indeks almadığı için isim
değişikliği şu an ucuz. Sonraki adımlarda üretilecek içerikler doğrudan
yeni isimle yazılacak, böylece ikinci kez değiştirme olmaz.

**Hedef dosyalar:** `index.html`, `privacy.html`, `affiliate.html`,
`README.md`, `PROJECT-ROADMAP.md`, `MONETIZATION-PLAN.md`,
`DOMAIN-STRATEGY.md`, `DEPLOYMENT-RUNBOOK.md`, `.agents/README.md`,
`site.webmanifest`, `scripts/*.ps1`, `publish-github.ps1`, `github-login.ps1`

**Aksiyon:** Toplu bul-değiştir (tek komut, dosya dosya açmadan):
- `KOBİ Rotası` → `KOBİ Rotası`
- `KOBİ Rotasi` → `KOBİ Rotasi`
- `kobirotasi` → `kobirotasi` (repo adı, URL'ler, dosya içi referanslar)
- `schillereu.github.io/kobirotasi` → `schillereu.github.io/kobirotasi`

**Bitiş kriteri:** `grep -ri "rota" .` komutu proje kökünde 0 sonuç döner
(kod bloklarının içindeki değişken adları etkilenmez, sadece marka metni).

---

## Adım 1 — İçerik dengesi (8 yeni post)

**Hedef dosya:** `script.js` — sadece `blogPosts` dizisi.

**Aksiyon:** Ayrı verilen `yeni-postlar-yapistir.js` dosyasının **tamamını**,
`blogPosts` dizisinin son elemanından (id: 16) sonra, kapanış `];`
parantezinden hemen önce yapıştır. İçerik zaten hazır — yeniden yazma,
üretme, sadece kopyala.

**Bitiş kriteri:**
- `node --check script.js` hatasız çalışır.
- `grep -c "id:" script.js` → 24 döner.
- Her kategoriden tam 3 kayıt olur (cloud, crm, accounting, ecommerce,
  marketing, project, hr, support).

---

## Adım 2 — Affiliate link temizliği

**Hedef dosya:** `script.js`

**Aksiyon:** `12-affiliate-link-manager-agent.md` kurallarına göre tüm
`affiliateLink` alanlarına şu şablonla UTM ekle:
```
?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign={category}
```
`{category}` yerine o kaydın `category` değeri yazılır. `index.html`
render fonksiyonunda affiliate linklerinin `rel="noopener noreferrer sponsored"`
ile açıldığını doğrula (script.js'te `createPostCard` fonksiyonu).

**Bitiş kriteri:** `grep -c "utm_source=kobirotasi" script.js` → 24 döner
(her post linkinde UTM var).

---

## Adım 3 — Affiliate açıklaması ve KVKK metni

**Hedef dosya:** `affiliate.html`, `privacy.html`

**Aksiyon:** Bu iki dosya şu an 33'er satır — muhtemelen taslak/placeholder
seviyesinde. `09-compliance-trust-agent.md` talimatına göre şunları içerecek
şekilde genişlet:
- `affiliate.html`: Sitenin affiliate linklerden komisyon kazanabileceği,
  bunun ürün önerilerini etkilemediği, fiyatların değişebileceği için resmi
  siteden teyit edilmesi gerektiği açıkça yazılmalı.
- `privacy.html`: Hangi verinin toplandığı (varsa analytics, newsletter
  e-postası), üçüncü taraflarla paylaşılmadığı, KVKK kapsamında kullanıcının
  haklarının ne olduğu.

**Bitiş kriteri:** Her iki dosya da en az 40 satır, footer'daki linkler
(`index.html` içindeki `<a href="privacy.html">` / `affiliate.html`) çalışır.

---

## Adım 4 — Performans ve erişilebilirlik denetimi

**Hedef dosyalar:** `style.css`, `script.js`, `index.html`

**Aksiyon:** `13-performance-accessibility-agent.md` kontrol listesini
uygula. 24 posta çıkıldığı için özellikle `.blog-grid` render performansını
ve mobil taşmayı kontrol et.

**Bitiş kriteri:** DEPLOYMENT-RUNBOOK.md bölüm 4'teki "Canlı Site Kontrol
Listesi" yerelde (tarayıcıda `index.html` açılarak) tek tek işaretlenebiliyor.

---

## Adım 5 — Yayına alma

**Hedef:** GitHub repo adı `kobirotasi` olarak yeniden oluşturulur (veya
mevcut repo `kobirotasi` yeniden adlandırılır), `sync-github.ps1` ile
yayınlanır.

**Aksiyon:**
```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\sync-github.ps1
```
Sonra `scripts/check-live-site.ps1` ile canlı link doğrulanır:
`https://schillereu.github.io/kobirotasi/`

**Bitiş kriteri:** DEPLOYMENT-RUNBOOK.md bölüm 8'deki "Başarı Kriteri"
tamamı sağlanır.

---

## Adım 6 — Domain (opsiyonel, bütçe uygun olduğunda)

`kobirotasi.com` domainini bir kayıt firmasından satın al, ardından:
```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\set-custom-domain.ps1
```
Bu adım sitenin çalışması için ZORUNLU değil — GitHub Pages URL'i
(`schillereu.github.io/kobirotasi`) tek başına yeterli ve ücretsiz.
Domain sadece marka algısı ve SEO için sonradan eklenir.

---

## Adım 7 — Gelir motorunu çalıştır (tekrarlayan görev, tek seferlik değil)

Bu adımdan itibaren proje "kur" değil "işlet" moduna geçer.
`MONETIZATION-PLAN.md`'deki 30/60/90 günlük plan zaten hazır — editöre
her oturumda şunu sor: **"MONETIZATION-PLAN.md'de hangi gün aralığındayız,
o aralığın maddelerinden hangisi henüz yapılmadı?"** Bu soru, planı yeniden
yazmak yerine var olanı takip etmeyi sağlar (kredi tasarrufu).

Öncelik sırası (ilk 30 gün):
1. Gerçek affiliate programlarına başvur (HubSpot, Zoho, Xero, WooCommerce
   vb. — çoğunun ücretsiz ortaklık programı var, başvuru formu doldurmak
   yeterli, onay birkaç gün sürer).
2. E-posta toplama formunu gerçek bir servise bağla (Mailchimp ücretsiz
   plan yeterli, 500 aboneye kadar).
3. LinkedIn'de haftada 1 paylaşım ritmi başlat (siteyi tanıtan kısa
   içerikler — bu adım kod değil, içerik/pazarlama işidir, editöre değil
   sana kalır).

---

## Özet Kontrol Tablosu

| Adım | Ne değişiyor | Dosya sayısı | Tahmini kredi maliyeti |
|---|---|---|---|
| 0 | Marka adı | ~14 dosya, toplu bul-değiştir | Düşük |
| 1 | 8 yeni post | 1 dosya, hazır içerik yapıştırma | Çok düşük |
| 2 | UTM linkler | 1 dosya, formül uygulama | Düşük |
| 3 | Yasal sayfalar | 2 dosya, içerik genişletme | Orta |
| 4 | QA | 3 dosya, kontrol listesi | Düşük |
| 5 | Yayın | script çalıştırma | Çok düşük |
| 6 | Domain | opsiyonel | Çok düşük |
| 7 | Gelir işletmesi | tekrarlayan, kod dışı | Sürekli ama düşük |

Adım 0-5 toplamda tek bir oturumda, kredi limitinin büyük kısmını
"keşif" değil "uygulama" harcayarak bitirilebilecek şekilde tasarlandı.
