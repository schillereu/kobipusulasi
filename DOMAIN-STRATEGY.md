# KOBI Solutions Domain ve Marka Stratejisi

## Ana Karar

Hosting ucretsiz kalabilir: GitHub Pages.

Ozel alan adi ise genelde ucretlidir ve bir domain registrar uzerinden satin alinmalidir. Satin alma sonrasi site yine GitHub Pages uzerinde ucretsiz yayinlanabilir.

Mevcut canli link:

```text
https://schillereu.github.io/kobi-solutions/
```

Domain alindiktan sonra hedef:

```text
https://secili-domain.com/
```

## Turkce Karakter Notu

`teknolojidünyası.com` gibi Turkce karakterli domainler teknik olarak IDN ile mumkun olabilir; ancak pratikte her yerde sorunsuz gorunmeyebilir. Portfoy, e-posta, sosyal medya ve tarayici uyumu icin ASCII yazim daha sagliklidir.

Onerilen yazim:

```text
teknolojidunyasi.com
```

## Marka Onerileri

### En Guclu Onerim

**KOBI Pusulasi**  
Alan adi: `kobipusulasi.com`

Neden iyi:

- KOBI hedef kitlesini direkt anlatir.
- "Pusula" karar verme ve rehberlik hissi verir.
- Sadece teknoloji haber sitesi gibi durmaz; secim rehberi ve danismanlik modeline uygundur.
- Affiliate, danismanlik lead'i ve premium rehberlere genisleyebilir.

### Ikinci Oneri

**KOBI Teknoloji Rehberi**  
Alan adi: `kobiteknolojirehberi.com`

Neden iyi:

- SEO acisindan cok net.
- Sitenin ne yaptigini aninda anlatir.
- Biraz uzun ama arama niyetiyle uyumlu.

### Ucuncu Oneri

**Dijital KOBI Rehberi**  
Alan adi: `dijitalkobirehberi.com`

Neden iyi:

- Dijital donusum, yazilim ve is araci secimini kapsar.
- Danismanlik ve icerik urunlerine uygundur.

### Geniş Marka Secenegi

**Teknoloji Dunyasi**  
Alan adi: `teknolojidunyasi.com`

Neden dikkatli kullanilmali:

- Akilda kalici ve genis.
- Ama KOBI odagi daha zayif.
- Haber sitesi gibi algilanabilir.
- Gelir modeli KOBI yazilim rehberi olacaksa daha nis bir isim daha iyi olabilir.

## Ilk Uygunluk Kontrolu

2026-07-03 tarihinde RDAP uzerinden ilk kontrol yapildi. Asagidaki adaylar "bos olabilir" sonucuyla dondu. Bu kesin satin alma garantisi degildir; satin almadan once registrar ekraninda son kez dogrulanmalidir.

- `teknolojidunyasi.com`
- `kobipusulasi.com`
- `kobiteknolojirehberi.com`
- `dijitalkobirehberi.com`
- `akillikobirehberi.com`
- `kobiyazilimrehberi.com`
- `isletmepusulasi.com`

## Satin Alma Sonrasi Teknik Yol

1. Domain satin alinir.
2. GitHub Pages custom domain ayari yapilir.
3. Repo kokune `CNAME` dosyasi eklenir.
4. DNS tarafinda asagidaki kayitlar girilir.
5. HTTPS aktif olana kadar beklenir.
6. Eski GitHub Pages linki de calismaya devam eder; ana paylasim yeni domain olur.

## DNS Ayari

Root domain icin GitHub Pages A kayitlari:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

`www` icin CNAME:

```text
www -> schillereu.github.io
```

## Benim Onerdigim Karar

Bu proje para kazanan bir KOBI teknoloji rehberine evrilecekse:

```text
kobipusulasi.com
```

Bu isim hem marka gibi durur, hem de KOBI'lere karar rehberi sundugunu hissettirir.

Eger daha genis, medya markasi gibi buyutmek istersen:

```text
teknolojidunyasi.com
```

## Satin Alma Oncesi Kontrol Listesi

- [ ] Domain registrar ekraninda musaitlik dogrulandi.
- [ ] Yillik yenileme fiyati kontrol edildi.
- [ ] Whois privacy dahil mi bakildi.
- [ ] Marka ismi sosyal medya kullanici adlarinda da kontrol edildi.
- [ ] E-posta adresi ihtiyaci dusunuldu.
- [ ] Domain alindiktan sonra DNS erisimi elde edildi.
