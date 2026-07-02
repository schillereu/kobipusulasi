# KOBI Solutions Conversion ve QA Playbook

Bu playbook, KOBI Solutions web sitesinde ziyaretcileri nitelikli lead'e donusturmek, teklif/iletisim akisini sade tutmak ve canli sitede kaliteyi surekli kontrol etmek icin kullanilir.

## 1. Ziyaretciyi Lead'e Donusturme Akisi

### Ana hedef

Ziyaretcinin su sorulara hizli yanit bulmasi gerekir:

- KOBI Solutions hangi problemi cozer?
- Benim isletmem icin uygun mu?
- Nasil karsilastiririm veya karar veririm?
- Hemen ne yapmaliyim?

### Oncelikli donusum yollari

1. Ana CTA: `Ucretsiz Danisma Al`
2. Ikincil CTA: `Cozumleri Karsilastir`
3. Dusuk niyetli CTA: `Kisa Listeye Ekle`
4. Geri donus CTA'si: `Teklif Iste`

### Sayfa bazli niyet

- Ana sayfa: Hizi, guveni ve ilk aksiyonu hedefler.
- Cozum sayfalari: Problem, fayda, kanit ve sektor uygunlugu anlatilir.
- Karsilastirma sayfasi: Alternatifleri sade kriterlerle yan yana gosterir.
- Iletisim/teklif sayfasi: Formu kisa tutar, kullanicidan yalnizca gerekli bilgileri ister.
- Blog/kaynak sayfalari: Ziyaretciyi ilgili cozum veya danisma CTA'sina tasir.

### Lead form ilkeleri

- Formda ilk adimda en fazla 4 alan kullanilir: ad, sirket, e-posta/telefon, ihtiyac.
- Uzun formlar yerine iki adimli form tercih edilir.
- Telefon zorunluysa neden istendigi mikro metinle aciklanir.
- Gonderim sonrasi net beklenti verilir: "Ekibimiz 1 is gunu icinde size doner."
- Basarisiz form durumlari anlasilir mesajlarla gosterilir.

## 2. CTA Testleri

### Test edilecek CTA degiskenleri

- Metin:
  - `Ucretsiz Danisma Al`
  - `Teklif Iste`
  - `Size Uygun Cozumu Bulalim`
  - `Kobi Icin Cozumleri Incele`
- Konum:
  - Hero alani
  - Ilk ekran sonrasi sabit bant
  - Cozum kartlari
  - Karsilastirma tablosu sonu
  - Mobil alt sabit CTA
- Renk ve kontrast:
  - Ana CTA arka plan rengi
  - Ikincil CTA outline/stil farki
  - Hover/focus durumlari
- Baglam:
  - Fiyat/teklif oncesi CTA
  - Musteri kaniti sonrasi CTA
  - SSS sonrasi CTA

### CTA test kurallari

- Ayni anda tek ana degisken test edilir.
- Test suresi en az 1 tam hafta veya yeterli trafik varsa 500+ ziyaretci olmalidir.
- Mobil ve masaustu performansi ayri okunur.
- Kazanan yalnizca tiklama oranina gore degil, form tamamlanma ve lead kalitesine gore secilir.

### Basari metrikleri

- CTA tiklama orani
- Form baslatma orani
- Form tamamlama orani
- Lead basina maliyet
- Nitelikli lead orani
- Geri donus suresi ve satis ekibi kabul orani

## 3. Kisa Liste ve Karsilastirma Akisi

### Kisa liste amaci

Ziyaretcinin birden fazla cozum veya paket arasinda kaybolmadan karar vermesine yardimci olur. Ozellikle arastirma asamasindaki kullanicilar icin dusuk baskili bir ara adimdir.

### Beklenen akis

1. Kullanici cozum kartindan `Kisa Listeye Ekle` aksiyonunu secer.
2. Secilen cozumler sayfa uzerinde veya sabit panelde gorunur.
3. Kullanici `Karsilastir` aksiyonuna gecer.
4. Karsilastirma ekraninda kriterler sade tutulur:
   - Uygun isletme tipi
   - Temel ihtiyac
   - Kurulum hizi
   - Entegrasyon ihtiyaci
   - Destek seviyesi
   - Tahmini baslangic maliyeti veya teklif gereksinimi
5. Karsilastirma sonunda iki CTA sunulur:
   - `Bu Cozumler Icin Danisma Al`
   - `Teklif Iste`

### Kisa liste QA kontrolleri

- Secim sayfa yenilenince korunuyor mu?
- Ayni cozum iki kez eklenemiyor mu?
- Cikarma aksiyonu calisiyor mu?
- Mobilde panel ekrani kapatmiyor mu?
- Bos kisa liste durumunda anlasilir yonlendirme var mi?
- Karsilastirma tablosu 2, 3 ve 4 secimde okunakli mi?

## 4. Canli Site Hata Kontrolu

### Gunluk kontrol

- Ana sayfa aciliyor mu?
- Ana CTA'lar calisiyor mu?
- Iletisim formu gonderiliyor mu?
- Tesekkur veya basari mesaji gorunuyor mu?
- Telefon, e-posta ve WhatsApp linkleri dogru hedefe gidiyor mu?
- En kritik 5 sayfada 404/500 hatasi yok mu?

### Haftalik kontrol

- Tum navigasyon linkleri calisiyor mu?
- Footer linkleri guncel mi?
- Cozum sayfalari dogru CTA'ya gidiyor mu?
- Form verileri CRM/e-posta/alici sisteme dusuyor mu?
- Analytics ve event olcumleri aktif mi?
- Arama motoru index ayarlari dogru mu?
- Sayfa basliklari ve meta aciklamalari eksik degil mi?

### Kritik hata siniflari

- P0: Site acilmiyor, form calismiyor, odeme/teklif akisi kirik.
- P1: Ana CTA veya ana sayfa kritik bolumu calismiyor.
- P2: Bir cozum sayfasinda icerik, link veya gorsel hatasi var.
- P3: Kucuk tasarim, metin veya hizalama sorunu var.

### Hata kaydi formati

- Tarih:
- Sayfa URL:
- Cihaz/tarayici:
- Hata ozeti:
- Beklenen davranis:
- Gercek davranis:
- Ekran goruntusu/video:
- Oncelik:
- Sorumlu:
- Durum:

## 5. Mobil Kontrol

### Kontrol edilecek cihaz kirilimlari

- 360px genislik: kucuk Android
- 390px genislik: iPhone standard
- 430px genislik: buyuk telefon
- 768px genislik: tablet

### Mobil UX checklist

- Ilk ekranda deger onerisi ve CTA gorunuyor.
- Metinler tasma yapmiyor.
- CTA butonlari parmakla rahat tiklanabilir.
- Mobil alt sabit CTA varsa icerigi kapatmiyor.
- Menu acilip kapanirken kayma veya kilitlenme yok.
- Form alanlari klavye acildiginda kullanilabilir kaliyor.
- Telefon ve e-posta linkleri dogru uygulamayi aciyor.
- Karsilastirma tablosu yatay kaydirma veya kart yapisiyla okunabiliyor.
- Gorseller hizli yukleniyor ve kirpilmiyor.

### Mobil performans hedefleri

- Ilk anlamli icerik hizli gorunmeli.
- Buyuk gorseller sikistirilmis olmali.
- Gereksiz animasyonlar mobilde azaltilmali.
- Form gonderimi zayif baglantida da net durum gostermeli.

## 6. Olcum ve Raporlama

### Takip edilecek eventler

- `cta_click`
- `lead_form_start`
- `lead_form_submit`
- `lead_form_error`
- `shortlist_add`
- `shortlist_remove`
- `comparison_view`
- `comparison_cta_click`
- `phone_click`
- `email_click`
- `whatsapp_click`

### Temel dashboard

- Trafik kaynagi
- Sayfa bazli donusum orani
- CTA tiklama orani
- Form baslatma/tamamlama farki
- Mobil ve masaustu donusum farki
- En cok kisa listeye eklenen cozumler
- En cok karsilastirilan cozum kombinasyonlari
- Nitelikli lead orani

### Haftalik yorumlama sorulari

- Hangi sayfalar trafik aliyor ama lead uretmiyor?
- Hangi CTA tiklaniyor ama form tamamlatmiyor?
- Mobilde nerede dusus var?
- Karsilastirma akisi satisa daha yakin lead getiriyor mu?
- Form hatalari belirli cihaz veya tarayicida yogunlasiyor mu?

## 7. Yayin Oncesi Checklist

### Icerik

- Ana mesaj net ve sektor diline uygun.
- CTA metinleri tutarli.
- Yazim hatalari kontrol edildi.
- Eski kampanya, fiyat veya tarih bilgisi yok.
- Musteri kanitlari ve referanslar dogru kullanildi.

### Donusum

- Ana CTA dogru hedefe gidiyor.
- Ikincil CTA dogru hedefe gidiyor.
- Form alanlari calisiyor.
- Form basari ve hata durumlari test edildi.
- Lead bildirimi ilgili ekibe ulasiyor.
- Kisa liste ve karsilastirma akisi test edildi.

### Teknik

- Kritik sayfalarda 404/500 hatasi yok.
- Analytics eventleri tetikleniyor.
- Sayfa basliklari ve meta aciklamalari var.
- Canonical ve index ayarlari dogru.
- Gorseller optimize edildi.
- Masaustu, tablet ve mobil gorunumler kontrol edildi.

### Erisilebilirlik

- Butonlar klavye ile secilebiliyor.
- Focus durumlari gorunur.
- Form alanlarinda label veya aciklayici metin var.
- Renk kontrasti okunabilir.
- Gorsellerde gerekli alt metinler var.

## 8. Yayin Sonrasi Checklist

### Ilk 30 dakika

- Site canli URL'de aciliyor.
- Ana sayfa, cozum sayfalari ve iletisim sayfasi kontrol edildi.
- Ana CTA'lar calisiyor.
- Test lead'i basariyla alindi.
- Analytics gercek zamanli event gosteriyor.

### Ilk 24 saat

- Hata loglari kontrol edildi.
- Form gonderimlerinde sorun yok.
- Mobil trafik davranisi kontrol edildi.
- Beklenmeyen trafik kaynagi veya bot aktivitesi yok.
- Satis ekibi lead kalitesi hakkinda ilk geri bildirimi verdi.

### Ilk 7 gun

- CTA performansi raporlandi.
- Form terk orani incelendi.
- Kisa liste ve karsilastirma eventleri incelendi.
- En dusuk performansli sayfalar belirlendi.
- Bir sonraki test hipotezi secildi.

## 9. Surekli Iyilestirme Ritmi

- Gunluk: Kritik akis ve form kontrolu.
- Haftalik: Donusum dashboard'u ve hata listesi incelemesi.
- Iki haftada bir: CTA veya form testi.
- Aylik: Karsilastirma akisi, lead kalitesi ve satis geri bildirimi degerlendirmesi.
- Ceyreklik: Mesaj, teklif, segment ve SEO performansi revizyonu.

## 10. Karar Kaydi Sablonu

- Degisiklik:
- Hipotez:
- Etkilenen sayfalar:
- Baslangic tarihi:
- Bitis tarihi:
- Basari metrigi:
- Sonuc:
- Karar:
- Sonraki aksiyon:
