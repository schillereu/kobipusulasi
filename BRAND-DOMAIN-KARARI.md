# Marka ve Domain Kararı

## Sorun

Mevcut marka **"KOBİ Rotası"** ve planlanan domain `kobirotasi.com` zaten
başka bir şirket (Alcoren Intelligence) tarafından, neredeyse aynı konumlamayla
(KOBİ'ler için finans/kriz/büyüme rehberi) kullanılıyor: `https://kobirotasi.com/`.
Bu isimle devam etmek marka karışıklığına ve olası hukuki/SEO risklerine yol açar.

## Yeni Karar: "KOBİ Rotası"

**Neden:**
- "Rota" ile aynı yön/rehberlik metaforunu sürdürür (rota çizmek = doğru yolu bulmak),
  bu yüzden mevcut metinlerde kavramsal değişiklik gerekmez, sadece isim değişir.
- Arama sonuçlarında ve sosyal medyada net biçimde ayrışıyor — yaptığım taramalarda
  aynı isim/domain ile çakışan bir işletme bulunmadı.
- "Rotası" kelimesi affiliate + danışmanlık + karşılaştırma modeline doğal uyuyor
  ("doğru aracın rotasını çiz" gibi pazarlama diline açık).

**Domain önceliği:**
1. `kobirotasi.com` (birincil tercih)
2. `kobidumeni.com` (yedek — "dümen tutmak" metaforu)
3. `teknokobi.com` (yedek — dikkat: bu isimde küçük bir Facebook sayfası var,
   domain boş görünüyor ama marka çakışması riski birinci sıradakinden yüksek)

**Not:** Bu taramalar canlı arama sonuçlarına dayanıyor, gerçek zamanlı WHOIS
sorgusu değil. Satın almadan önce bir domain kayıt firmasında (örn. natro.com,
isimtescil.com, ya da Namecheap) `kobirotasi.com` müsaitlik kontrolünü mutlaka
yap — bu adım 2 dakika sürer ve en büyük riski kapatır.

## Geçiş Kapsamı (ucuz, çünkü site henüz trafiksiz/indekssiz)

Site henüz gerçek trafiğe açılmadığı için isim değişikliği şu an neredeyse
bedavaya mal oluyor — ileride (Google indexlendikten, backlink toplandıktan
sonra) yapılırsa çok daha maliyetli olur. Bu yüzden rebrand **EXECUTION-ALGORITHM.md
dosyasındaki Adım 0** olarak en başa alındı.

Değişecek yerler (find & replace ile, dosya dosya okumaya gerek yok):
- Tüm `.html` dosyalarında: "KOBİ Rotası" → "KOBİ Rotası", "KOBİ Rotasi" → "KOBİ Rotası"
- `README.md`, `PROJECT-ROADMAP.md`, `MONETIZATION-PLAN.md`, `DOMAIN-STRATEGY.md`,
  `DEPLOYMENT-RUNBOOK.md`, `.agents/README.md` içindeki marka adı ve repo/URL referansları
- `site.webmanifest` içindeki `name`/`short_name`
- GitHub repo adı: `kobirotasi` → `kobirotasi` (script'lerdeki repo referansları da güncellenmeli)
