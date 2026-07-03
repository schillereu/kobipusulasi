const blogPosts = [
    { id: 1, title: "Google Workspace ile \u0130\u015fbirli\u011fini 3x Art\u0131r", category: "cloud", emoji: "&#9729;&#65039;", excerpt: "Gmail, Drive, Docs ve Meet tek pakette.", problem: "Ekip da\u011f\u0131n\u0131k, dosyalar kayboluyor.", solution: "Mail, depolama, dok\u00fcman ve toplant\u0131 s\u00fcre\u00e7lerini tek merkezde toplar.", price: "6-18$/ki\u015fi/ay", date: "2 Temmuz 2026", affiliateLink: "https://workspace.google.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=cloud", bestFor: "Dosya ve ileti\u015fim karma\u015fas\u0131 ya\u015fayan ekipler", starterStep: "\u00d6nce ortak Drive klas\u00f6r yap\u0131s\u0131 ve ekip e-mail hesaplar\u0131n\u0131 kur.", pros: ["Kolay ba\u015flang\u0131\u00e7", "G\u00fc\u00e7l\u00fc i\u015fbirli\u011fi", "Mobil kullan\u0131m rahat"], cons: ["Kullan\u0131c\u0131 ba\u015f\u0131 maliyet artabilir", "Eski dosyalar\u0131 ta\u015f\u0131mak zaman alabilir"] },
    { id: 2, title: "Dropbox ile Dosya Y\u00f6netimi", category: "cloud", emoji: "&#9729;&#65039;", excerpt: "Dosyalar otomatik senkronize olur.", problem: "Bilgisayar bozuldu\u011funda veriler risk alt\u0131nda.", solution: "Bulut depolamas\u0131 ve cihazlar aras\u0131 senkronizasyon sa\u011flar.", price: "11.99$/ay", date: "1 Temmuz 2026", affiliateLink: "https://dropbox.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=cloud", bestFor: "Sadece dosya depolama ve payla\u015f\u0131m isteyen ekipler", starterStep: "En kritik dosyalar\u0131 tek bir klas\u00f6r plan\u0131yla Dropbox'a ta\u015f\u0131.", pros: ["Basit aray\u00fcz", "G\u00fcvenilir senkronizasyon", "Kolay payla\u015f\u0131m"], cons: ["Ofis paketi ihtiyac\u0131n\u0131 tek ba\u015f\u0131na \u00e7\u00f6zmez", "B\u00fcy\u00fck ekipte maliyet artar"] },
    { id: 3, title: "Microsoft Teams ile Ekip \u0130leti\u015fimi", category: "cloud", emoji: "&#9729;&#65039;", excerpt: "Chat, video g\u00f6r\u00fc\u015fme ve dosya payla\u015f\u0131m\u0131.", problem: "\u0130leti\u015fim ara\u00e7lar\u0131 da\u011f\u0131n\u0131k.", solution: "Ekip konu\u015fmalar\u0131n\u0131, toplant\u0131lar\u0131 ve dosyalar\u0131 tek platformda toplar.", price: "4-6$/ay", date: "30 Haziran 2026", affiliateLink: "https://microsoft.com/teams?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=cloud", bestFor: "Microsoft 365 kullanan ekipler", starterStep: "Her hizmet veya proje i\u00e7in ayr\u0131 kanal a\u00e7.", pros: ["Microsoft ekosistemiyle uyumlu", "Toplant\u0131 altyap\u0131s\u0131 g\u00fc\u00e7l\u00fc", "Kurumsal kullan\u0131ma uygun"], cons: ["K\u00fc\u00e7\u00fck ekipler i\u00e7in fazla kapsaml\u0131 gelebilir", "D\u00fczen kurulmazsa kanal kalabal\u0131\u011f\u0131 olu\u015fur"] },
    { id: 4, title: "HubSpot Free CRM ile \u00dccretsiz Ba\u015fla", category: "crm", emoji: "&#128101;", excerpt: "M\u00fc\u015fteri bilgileri ve sat\u0131\u015f pipeline'\u0131.", problem: "M\u00fc\u015fteri verisi Excel'de da\u011f\u0131l\u0131yor.", solution: "M\u00fc\u015fteri kay\u0131tlar\u0131n\u0131 ve sat\u0131\u015f f\u0131rsatlar\u0131n\u0131 takip eder.", price: "\u00dccretsiz ba\u015flang\u0131\u00e7", date: "28 Haziran 2026", affiliateLink: "https://hubspot.com/products/crm?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=crm", bestFor: "CRM'e ilk kez ge\u00e7en k\u00fc\u00e7\u00fck ekipler", starterStep: "Mevcut m\u00fc\u015fteri listesini temizleyip pipeline a\u015famalar\u0131n\u0131 tan\u0131mla.", pros: ["G\u00fc\u00e7l\u00fc \u00fccretsiz plan", "Kolay aray\u00fcz", "Sat\u0131\u015f takibi net"], cons: ["Geli\u015fmi\u015f otomasyonlar \u00fccretli", "Veri yap\u0131s\u0131 ba\u015ftan d\u00fc\u015f\u00fcn\u00fclmeli"] },
    { id: 5, title: "Zoho CRM ile Uygun Fiyatl\u0131 Sat\u0131\u015f Y\u00f6netimi", category: "crm", emoji: "&#128101;", excerpt: "M\u00fc\u015fteri verisi ve sat\u0131\u015f takibi.", problem: "Kurumsal CRM ara\u00e7lar\u0131 pahal\u0131.", solution: "CRM, raporlama ve otomasyonu daha eri\u015filebilir fiyatla sunar.", price: "10-50$/ki\u015fi/ay", date: "25 Haziran 2026", affiliateLink: "https://zoho.com/crm?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=crm", bestFor: "Uygun fiyatla profesyonel CRM isteyen ekipler", starterStep: "\u00d6nce lead, teklif ve kazan\u0131lan m\u00fc\u015fteri a\u015famalar\u0131n\u0131 kur.", pros: ["Fiyat performans iyi", "Mod\u00fcler ekosistem", "Raporlama se\u00e7enekleri var"], cons: ["Aray\u00fcz ilk ba\u015fta yo\u011fun gelebilir", "Kurulum kararlar\u0131 dikkat ister"] },
    { id: 6, title: "Pipefy ile S\u00fcre\u00e7 Y\u00f6netimi", category: "crm", emoji: "&#128101;", excerpt: "M\u00fc\u015fteri s\u00fcreci ve \u015fikayet y\u00f6netimi.", problem: "Her m\u00fc\u015fteri farkl\u0131 s\u00fcre\u00e7te takip ediliyor.", solution: "Tekrarlanan i\u015fleri no-code ak\u0131\u015flara d\u00f6n\u00fc\u015ft\u00fcr\u00fcr.", price: "$200/ay", date: "22 Haziran 2026", affiliateLink: "https://pipefy.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=crm", bestFor: "Operasyonel s\u00fcre\u00e7leri standartla\u015ft\u0131rmak isteyen ekipler", starterStep: "En s\u0131k tekrar eden m\u00fc\u015fteri s\u00fcrecini kart ad\u0131mlar\u0131na b\u00f6l.", pros: ["No-code mant\u0131k", "S\u00fcre\u00e7 g\u00f6r\u00fcn\u00fcrl\u00fc\u011f\u00fc", "Form ve otomasyon deste\u011fi"], cons: ["Klasik CRM yerine s\u00fcre\u00e7 arac\u0131 gibi d\u00fc\u015f\u00fcn\u00fclmeli", "Fiyat k\u00fc\u00e7\u00fck ekip i\u00e7in y\u00fcksek olabilir"] },
    { id: 7, title: "Wave ile K\u00fc\u00e7\u00fck \u0130\u015fletme Muhasebesi", category: "accounting", emoji: "&#128202;", excerpt: "Faturalar, raporlar ve vergi takibi.", problem: "Muhasebe ara\u00e7lar\u0131 k\u00fc\u00e7\u00fck i\u015fletme i\u00e7in pahal\u0131.", solution: "\u00dccretsiz muhasebe ve faturalama i\u015fleri i\u00e7in temel altyap\u0131 sa\u011flar.", price: "\u00dccretsiz", date: "20 Haziran 2026", affiliateLink: "https://wave.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=accounting", bestFor: "Yeni ba\u015flayan ve basit muhasebe isteyen i\u015fletmeler", starterStep: "Gelir-gider kategorilerini belirleyip ilk faturay\u0131 olu\u015ftur.", pros: ["\u00dccretsiz ba\u015flang\u0131\u00e7", "Fatura ve rapor kolay", "K\u00fc\u00e7\u00fck ekipler i\u00e7in sade"], cons: ["Yerel mevzuat uyumu kontrol edilmeli", "B\u00fcy\u00fcyen operasyonlarda yetersiz kalabilir"] },
    { id: 8, title: "Xero ile \u00d6l\u00e7eklenebilir Muhasebe", category: "accounting", emoji: "&#128202;", excerpt: "Vergi ve entegrasyon destekleri.", problem: "Basit muhasebe arac\u0131 b\u00fcy\u00fcmeyi ta\u015f\u0131m\u0131yor.", solution: "Muhasebe, entegrasyon ve raporlama ihtiya\u00e7lar\u0131n\u0131 daha kapsaml\u0131 y\u00f6netir.", price: "\u00a312-80/ay", date: "18 Haziran 2026", affiliateLink: "https://xero.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=accounting", bestFor: "B\u00fcy\u00fcmeye ba\u015flayan hizmet i\u015fletmeleri", starterStep: "Banka entegrasyonu ve fatura \u015fablonlar\u0131yla ba\u015fla.", pros: ["G\u00fc\u00e7l\u00fc raporlama", "Entegrasyon ekosistemi", "\u00d6l\u00e7eklenebilir"], cons: ["\u00d6\u011frenme e\u011frisi var", "Yerel muhasebeciyle uyum kontrol edilmeli"] },
    { id: 9, title: "Shopify ile E-Ticaret Platformu", category: "ecommerce", emoji: "&#128722;", excerpt: "Website, \u00f6deme sistemi ve envanter.", problem: "Kendi e-ticaret sitemi kurmak zor.", solution: "Ma\u011faza, tema, \u00f6deme ve envanter ak\u0131\u015f\u0131n\u0131 tek pakette sunar.", price: "$29-299/ay", date: "15 Haziran 2026", affiliateLink: "https://shopify.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=ecommerce", bestFor: "\u00dcr\u00fcn sat\u0131\u015f\u0131na h\u0131zl\u0131 ba\u015flamak isteyenler", starterStep: "\u00d6nce 5-10 \u00fcr\u00fcnle katalog ve \u00f6deme ak\u0131\u015f\u0131n\u0131 test et.", pros: ["H\u0131zl\u0131 kurulum", "Tema ve uygulama ekosistemi", "\u00d6deme ak\u0131\u015f\u0131 haz\u0131r"], cons: ["Ayl\u0131k maliyet ve komisyonlar izlenmeli", "Tam \u00f6zelle\u015ftirme i\u00e7in geli\u015ftirici gerekebilir"] },
    { id: 10, title: "WooCommerce ile A\u00e7\u0131k Kaynak Ma\u011faza", category: "ecommerce", emoji: "&#128722;", excerpt: "WordPress eklentisi.", problem: "Shopify'dan ba\u011f\u0131ms\u0131z sistem gerekiyor.", solution: "WordPress \u00fczerinden esnek ve sahipli\u011fi sizde olan e-ticaret altyap\u0131s\u0131 kurar.", price: "\u00dccretsiz", date: "12 Haziran 2026", affiliateLink: "https://woocommerce.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=ecommerce", bestFor: "WordPress bilen veya kontrol isteyen ekipler", starterStep: "Hosting, tema ve temel \u00f6deme eklentisini se\u00e7.", pros: ["Esnek ve a\u00e7\u0131k kaynak", "Sahiplik sizde", "Eklenti ekosistemi geni\u015f"], cons: ["Bak\u0131m sorumlulu\u011fu sizde", "Performans ve g\u00fcvenlik dikkat ister"] },
    { id: 11, title: "Mailchimp ile E-mail Pazarlama", category: "marketing", emoji: "&#128231;", excerpt: "E-mail listesi ve kampanya y\u00f6netimi.", problem: "Potansiyel m\u00fc\u015fterilere d\u00fczenli follow-up yap\u0131lam\u0131yor.", solution: "Liste, kampanya ve temel otomasyon ak\u0131\u015flar\u0131 kurar.", price: "\u00dccretsiz ba\u015flang\u0131\u00e7", date: "10 Haziran 2026", affiliateLink: "https://mailchimp.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=marketing", bestFor: "E-mail pazarlamaya yeni ba\u015flayanlar", starterStep: "\u0130lk listeyi olu\u015fturup ayl\u0131k b\u00fclten \u015fablonu haz\u0131rla.", pros: ["Ba\u015flamas\u0131 kolay", "\u015eablonlar kullan\u0131\u015fl\u0131", "Temel otomasyon yeterli"], cons: ["Liste b\u00fcy\u00fcd\u00fck\u00e7e maliyet artar", "Geli\u015fmi\u015f segmentasyon i\u00e7in plan gerekebilir"] },
    { id: 12, title: "ActiveCampaign ile Geli\u015fmi\u015f Otomasyon", category: "marketing", emoji: "&#128231;", excerpt: "CRM, e-mail ve SMS otomasyonu.", problem: "Basit e-mail arac\u0131 yetersiz kal\u0131yor.", solution: "Davran\u0131\u015fa g\u00f6re otomasyon, segmentasyon ve CRM ak\u0131\u015flar\u0131 sa\u011flar.", price: "$9-229/ay", date: "8 Haziran 2026", affiliateLink: "https://activecampaign.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=marketing", bestFor: "Sat\u0131\u015f ve pazarlamay\u0131 otomasyona ba\u011flamak isteyenler", starterStep: "Tek bir kar\u015f\u0131lama serisiyle ba\u015fla, sonra segmentleri ekle.", pros: ["G\u00fc\u00e7l\u00fc otomasyon", "CRM ba\u011flant\u0131s\u0131", "Segmentasyon iyi"], cons: ["Yanl\u0131\u015f kurulum karma\u015fa yarat\u0131r", "\u0130lk ay dikkatli tasar\u0131m gerekir"] },
    { id: 13, title: "Asana ile Proje Takibi", category: "project", emoji: "&#128203;", excerpt: "G\u00f6revler, deadline'lar ve ekip takibi.", problem: "Proje y\u00f6netimi da\u011f\u0131n\u0131k ilerliyor.", solution: "G\u00f6revleri, sorumlular\u0131 ve teslim tarihlerini g\u00f6r\u00fcn\u00fcr k\u0131lar.", price: "\u00dccretsiz, Premium $11", date: "6 Haziran 2026", affiliateLink: "https://asana.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=project", bestFor: "Hizmet projelerini takip eden ekipler", starterStep: "Devam eden tek projeyi Asana'ya ta\u015f\u0131 ve sorumlu ki\u015fileri ata.", pros: ["G\u00f6rsel takip kolay", "Ekip sorumlulu\u011fu netle\u015fir", "\u00dccretsiz plan i\u015fe yarar"], cons: ["S\u00fcre\u00e7 disiplini yoksa bo\u015f kal\u0131r", "Fazla alan a\u00e7mak kar\u0131\u015ft\u0131rabilir"] },
    { id: 14, title: "Monday.com ile Operasyon Y\u00f6netimi", category: "project", emoji: "&#128203;", excerpt: "Workflow ve otomasyon.", problem: "Temel proje arac\u0131 operasyonu ta\u015f\u0131m\u0131yor.", solution: "Projeleri, operasyon tablolar\u0131n\u0131 ve otomasyonlar\u0131 birlikte y\u00f6netir.", price: "$9-16/ki\u015fi/ay", date: "4 Haziran 2026", affiliateLink: "https://monday.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=project", bestFor: "Daha g\u00f6rsel ve operasyon odakl\u0131 takip isteyen ekipler", starterStep: "Sat\u0131\u015f, proje ve operasyon i\u00e7in ayr\u0131 board plan\u0131 yap.", pros: ["G\u00f6rsel ve esnek", "Otomasyon se\u00e7enekleri", "Takip panolar\u0131 g\u00fc\u00e7l\u00fc"], cons: ["Fazla \u00f6zelle\u015ftirme karma\u015fa yaratabilir", "Kullan\u0131c\u0131 ba\u015f\u0131 maliyet izlenmeli"] },
    { id: 15, title: "Paychex ile Bordro & HR", category: "hr", emoji: "&#128188;", excerpt: "Bordro ve insan kaynaklar\u0131 y\u00f6netimi.", problem: "Bordro s\u00fcre\u00e7leri manuel ilerliyor.", solution: "Bordro, HR ve \u00e7al\u0131\u015fan y\u00f6netimini tek ak\u0131\u015fta toplar.", price: "Teklif", date: "2 Haziran 2026", affiliateLink: "https://paychex.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=hr", bestFor: "Ekip b\u00fcy\u00fcd\u00fck\u00e7e bordro s\u00fcreci zorla\u015fan i\u015fletmeler", starterStep: "\u00c7al\u0131\u015fan verilerini ve bordro periyotlar\u0131n\u0131 netle\u015ftir.", pros: ["HR ve bordro birlikte", "Profesyonel destek", "B\u00fcy\u00fcyen ekibe uygun"], cons: ["Fiyat teklif bazl\u0131", "Yerel mevzuat uyumu ayr\u0131ca kontrol edilmeli"] },
    { id: 16, title: "Zendesk ile M\u00fc\u015fteri Destek", category: "support", emoji: "&#128172;", excerpt: "Chat, e-mail ve telefon deste\u011fi.", problem: "M\u00fc\u015fteri sorular\u0131 farkl\u0131 kanallara da\u011f\u0131l\u0131yor.", solution: "Destek taleplerini tek gelen kutusunda toplay\u0131p takip eder.", price: "$49-149/ay", date: "31 May\u0131s 2026", affiliateLink: "https://zendesk.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=support", bestFor: "M\u00fc\u015fteri deste\u011fi hacmi artan ekipler", starterStep: "\u00d6nce e-mail destek kanal\u0131n\u0131 Zendesk'e ba\u011fla.", pros: ["Destek takibi net", "Kanal birle\u015ftirme", "Raporlama g\u00fc\u00e7l\u00fc"], cons: ["K\u00fc\u00e7\u00fck ekip i\u00e7in maliyetli olabilir", "Kurallar iyi tasarlanmal\u0131"] },
    { id: 17, title: "QuickBooks ile Online Muhasebe", category: "accounting", emoji: "&#128202;", excerpt: "Fatura, gider ve rapor takibini tek panelde izleyin.", problem: "Gelir-gider kayitlari daginik ve raporlama gec hazirlaniyor.", solution: "QuickBooks fatura, gider, banka eslestirme ve temel raporlari bulutta toplar.", price: "$30/ay", date: "26 Haziran 2026", affiliateLink: "https://quickbooks.intuit.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=accounting", bestFor: "Basit ama duzenli finans takibi isteyen hizmet isletmeleri", starterStep: "Ilk ay sadece gelir, gider ve fatura akisini sisteme tasi.", pros: ["Raporlama kolay", "Bulut tabanli", "Kucuk ekipler icin uygun"], cons: ["Yerel mevzuat uyumu kontrol edilmeli", "Gelismis ozellikler ucretli"] },
    { id: 18, title: "WooCommerce ile WordPress Magaza", category: "ecommerce", emoji: "&#128722;", excerpt: "WordPress sitesine esnek satis altyapisi ekleyin.", problem: "Mevcut siteye yeni platforma gecmeden satis ozelligi eklemek gerekiyor.", solution: "WooCommerce urun, odeme, kargo ve siparis yonetimini WordPress icinde sunar.", price: "Ucretsiz", date: "24 Haziran 2026", affiliateLink: "https://woocommerce.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=ecommerce", bestFor: "WordPress kullanan ve kontrolu elinde tutmak isteyen ekipler", starterStep: "Once 3 urunle test magaza ac, odeme akisini dene.", pros: ["Esnek", "Eklenti ekosistemi genis", "Sahiplik sizde"], cons: ["Bakim sorumlulugu var", "Performans optimizasyonu gerekebilir"] },
    { id: 19, title: "Buffer ile Sosyal Medya Planlama", category: "marketing", emoji: "&#128231;", excerpt: "Paylasimlari onceden planlayip duzenli yayin yapin.", problem: "Sosyal medya paylasimlari son dakikaya kaliyor.", solution: "Buffer farkli platformlar icin icerik takvimi ve zamanlanmis paylasim sunar.", price: "Ucretsiz - $6/kanal/ay", date: "22 Haziran 2026", affiliateLink: "https://buffer.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=marketing", bestFor: "Duzenli sosyal medya ritmi kurmak isteyen kucuk ekipler", starterStep: "Haftalik 3 paylasimlik basit bir takvimle basla.", pros: ["Basit arayuz", "Ucretsiz plan var", "Takvim mantigi net"], cons: ["Icerigi sizin uretmeniz gerekir", "Gelismis analizler ucretli"] },
    { id: 20, title: "ClickUp ile Esnek Proje Yonetimi", category: "project", emoji: "&#128203;", excerpt: "Gorev, dokuman ve hedefleri tek alanda toplayin.", problem: "Gorevler, notlar ve proje hedefleri farkli araclarda dagiliyor.", solution: "ClickUp listeler, panolar, dokumanlar ve hedefleri tek calisma alaninda birlestirir.", price: "Ucretsiz - $7/kisi/ay", date: "20 Haziran 2026", affiliateLink: "https://clickup.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=project", bestFor: "Tek platformda daha fazla operasyon takip etmek isteyen ekipler", starterStep: "Tek bir proje icin liste gorunumuyle basla, sonra pano ekle.", pros: ["Cok yonlu", "Ucretsiz plan genis", "Dokuman ve gorev bir arada"], cons: ["Ilk kurulum yogun gelebilir", "Fazla ozellestirme karmasa yaratabilir"] },
    { id: 21, title: "Gusto ile Bordro ve HR", category: "hr", emoji: "&#128188;", excerpt: "Bordro, yan haklar ve calisan bilgilerini birlestirin.", problem: "Calisan bilgileri ve bordro surecleri manuel ilerliyor.", solution: "Gusto bordro, calisan kayitlari ve temel HR sureclerini tek platformda toplar.", price: "$40/ay + kisi basi", date: "18 Haziran 2026", affiliateLink: "https://gusto.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=hr", bestFor: "ABD odakli ekip veya uzaktan calisan yoneten isletmeler", starterStep: "Calisan listesini ve bordro periyodunu netlestirerek basla.", pros: ["Bordro ve HR birlikte", "Kullanimi kolay", "Destek ekosistemi genis"], cons: ["Ulke uyumu kontrol edilmeli", "Kisi basi maliyet artar"] },
    { id: 22, title: "BambooHR ile Calisan Yonetimi", category: "hr", emoji: "&#128188;", excerpt: "Ozluk, izin ve performans sureclerini duzenleyin.", problem: "Calisan dosyalari ve izin talepleri farkli kanallarda tutuluyor.", solution: "BambooHR calisan kayitlari, izinler ve temel performans akisini bir araya getirir.", price: "Teklif", date: "16 Haziran 2026", affiliateLink: "https://bamboohr.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=hr", bestFor: "HR sureclerini profesyonellestirmek isteyen buyuyen ekipler", starterStep: "Once calisan kayitlarini ve izin tiplerini sisteme aktar.", pros: ["HR odakli", "Izin takibi kolay", "Buyuyen ekibe uygun"], cons: ["Fiyat teklif bazli", "Kucuk ekip icin fazla gelebilir"] },
    { id: 23, title: "Tawk.to ile Ucretsiz Canli Destek", category: "support", emoji: "&#128172;", excerpt: "Web sitenize hizli ve ucretsiz chat ekleyin.", problem: "Ziyaretciler anlik soru soramiyor ve iletisim kaybi olusuyor.", solution: "Tawk.to canli sohbet widget'i ve ekip gelen kutusu sunar.", price: "Ucretsiz", date: "14 Haziran 2026", affiliateLink: "https://tawk.to?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=support", bestFor: "Butce ayirmadan canli destek denemek isteyen siteler", starterStep: "Widget kodunu ekle ve ilk hafta yanit surelerini izle.", pros: ["Ucretsiz", "Kurulumu hizli", "Mobil uygulama var"], cons: ["Marka ozellestirme sinirli", "Otomasyonlar icin ek ayar gerekir"] },
    { id: 24, title: "Freshdesk ile Cok Kanalli Destek", category: "support", emoji: "&#128172;", excerpt: "E-posta, chat ve sosyal destek taleplerini birlestirin.", problem: "Destek talepleri farkli kanallara dagiliyor ve takip zorlasiyor.", solution: "Freshdesk talepleri tek gelen kutusunda toplar, onceliklendirme ve raporlama saglar.", price: "Ucretsiz - $29/ajan/ay", date: "12 Haziran 2026", affiliateLink: "https://freshdesk.com?utm_source=kobirotasi&utm_medium=affiliate&utm_campaign=support", bestFor: "Destek hacmi artan ve kanal birlestirmek isteyen ekipler", starterStep: "Once e-posta destek kanalini bagla, sonra chat ekle.", pros: ["Coklu kanal", "Raporlama iyi", "Ucretsiz plan mevcut"], cons: ["Ust planlar pahali olabilir", "Kurallar dikkatli tasarlanmali"] }
];

const blogGrid = document.getElementById('blogGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const sortSelect = document.getElementById('sortSelect');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const filterAnnounce = document.getElementById('filterAnnounce');
const resultCount = document.getElementById('resultCount');
const detailModal = document.getElementById('detailModal');
const modalContent = document.getElementById('modalContent');
const favoriteList = document.getElementById('favoriteList');
const compareBtn = document.getElementById('compareBtn');
const shareListBtn = document.getElementById('shareListBtn');
const shareStatus = document.getElementById('shareStatus');

let currentCategory = 'all';
let filteredPosts = [...blogPosts];
let favoriteIds = [];

try {
    favoriteIds = JSON.parse(localStorage.getItem('favoriteTools') || '[]');
} catch (error) {
    favoriteIds = [];
}

hydrateFavoritesFromUrl();

function getCategoryLabel(category) {
    const labels = {
        cloud: "Cloud & \u0130\u015fbirli\u011fi",
        crm: "CRM & M\u00fc\u015fteri",
        accounting: "Muhasebe",
        ecommerce: "E-Ticaret",
        marketing: "Pazarlama",
        project: "Proje Y\u00f6netimi",
        hr: "HR & Bordro",
        support: "\u0130leti\u015fim & Destek"
    };

    return labels[category] || category;
}

function createPostCard(post) {
    const isFavorite = favoriteIds.includes(post.id);

    return `
        <article class="post-card">
            <div class="post-card-button">
                <div class="post-image" aria-hidden="true">${post.emoji}</div>
                <div class="post-content">
                    <span class="post-category">${getCategoryLabel(post.category)}</span>
                    <h3>${post.title}</h3>
                    <p><strong>Problem:</strong> ${post.problem}</p>
                    <p><strong>\u00c7\u00f6z\u00fcm:</strong> ${post.solution}</p>
                    <p class="price">Fiyat: ${post.price}</p>
                    <div class="post-footer">
                        <span class="post-date">${post.date}</span>
                        <span class="post-actions">
                            <button class="icon-action favorite-action ${isFavorite ? 'active' : ''}" type="button" data-favorite-id="${post.id}" aria-pressed="${isFavorite}" aria-label="${post.title} k\u0131sa listeye ekle">${isFavorite ? '\u2605' : '\u2606'}</button>
                            <button class="details-pill" type="button" data-post-id="${post.id}">Detay</button>
                        </span>
                    </div>
                </div>
            </div>
        </article>
    `;
}

function displayPosts(posts) {
    if (posts.length === 0) {
        blogGrid.innerHTML = '<div class="empty-state"><p>Sonu\u00e7 bulunamad\u0131.</p></div>';
    } else {
        blogGrid.innerHTML = posts.map(post => createPostCard(post)).join('');
    }

    updateResultCount(posts.length);
    renderFavorites();
}

function updateResultCount(count) {
    const text = `${count} \u00e7\u00f6z\u00fcm`;
    if (resultCount) resultCount.textContent = text;
    if (filterAnnounce) filterAnnounce.textContent = `${count} \u00e7\u00f6z\u00fcm listeleniyor.`;
}

function getPostsForCurrentCategory() {
    return currentCategory === 'all'
        ? [...blogPosts]
        : blogPosts.filter(post => post.category === currentCategory);
}

function filterByCategory(category) {
    currentCategory = category;
    filteredPosts = applySort(getPostsForCurrentCategory());
    displayPosts(filteredPosts);
}

function searchPosts() {
    const searchTerm = searchInput.value.toLocaleLowerCase('tr-TR').trim();
    const categoryPosts = getPostsForCurrentCategory();

    filteredPosts = searchTerm === ''
        ? categoryPosts
        : categoryPosts.filter(post => {
            const searchableText = [
                post.title,
                post.excerpt,
                post.problem,
                post.solution,
                post.price,
                getCategoryLabel(post.category)
            ].join(' ').toLocaleLowerCase('tr-TR');

            return searchableText.includes(searchTerm);
        });

    filteredPosts = applySort(filteredPosts);
    displayPosts(filteredPosts);
}

function getNumericPriceValue(price) {
    const lowerPrice = price.toLocaleLowerCase('tr-TR');
    if (lowerPrice.includes('\u00fccretsiz')) return 0;
    if (lowerPrice.includes('teklif')) return 9999;

    const numbers = price.match(/\d+(\.\d+)?/g);
    return numbers ? Number(numbers[0]) : 9999;
}

function applySort(posts) {
    const sortValue = sortSelect ? sortSelect.value : 'newest';
    const sortedPosts = [...posts];

    if (sortValue === 'price-low') {
        return sortedPosts.sort((a, b) => getNumericPriceValue(a.price) - getNumericPriceValue(b.price));
    }

    if (sortValue === 'starter') {
        return sortedPosts.sort((a, b) => {
            const aScore = a.price.toLocaleLowerCase('tr-TR').includes('\u00fccretsiz') ? 0 : 1;
            const bScore = b.price.toLocaleLowerCase('tr-TR').includes('\u00fccretsiz') ? 0 : 1;
            return aScore - bScore || a.title.localeCompare(b.title, 'tr');
        });
    }

    if (sortValue === 'name') {
        return sortedPosts.sort((a, b) => a.title.localeCompare(b.title, 'tr'));
    }

    return sortedPosts.sort((a, b) => b.id - a.id);
}

function applyCurrentFilters() {
    searchPosts();
}

function resetFilters() {
    currentCategory = 'all';
    searchInput.value = '';
    if (sortSelect) sortSelect.value = 'newest';
    setActiveCategoryButton('all');
    filteredPosts = applySort(blogPosts);
    displayPosts(filteredPosts);
    history.replaceState(null, '', '#blog');
}

function hydrateFavoritesFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const tools = params.get('tools');
    if (!tools) return;

    const sharedIds = tools
        .split(',')
        .map(id => Number(id.trim()))
        .filter(id => blogPosts.some(post => post.id === id));

    if (sharedIds.length === 0) return;

    favoriteIds = [...new Set(sharedIds)];
    saveFavorites();
}

function populateTrending() {
    const trendingList = document.getElementById('trendingList');
    if (!trendingList) return;

    const recommended = [4, 1, 13].map(id => blogPosts.find(post => post.id === id));
    trendingList.innerHTML = recommended
        .filter(Boolean)
        .map(post => `<li><a href="#" data-post-link="${post.id}">${post.title}</a></li>`)
        .join('');
}

function populateCategories() {
    const categoryList = document.getElementById('categoryList');
    if (!categoryList) return;

    const categories = ['cloud', 'crm', 'accounting', 'ecommerce', 'marketing', 'project', 'hr', 'support'];
    const counts = {};
    blogPosts.forEach(post => counts[post.category] = (counts[post.category] || 0) + 1);

    categoryList.innerHTML = categories
        .map(category => `<li><a href="#blog?category=${category}">${getCategoryLabel(category)} (${counts[category] || 0})</a></li>`)
        .join('');
}

function saveFavorites() {
    localStorage.setItem('favoriteTools', JSON.stringify(favoriteIds));
}

function toggleFavorite(postId) {
    const id = Number(postId);
    favoriteIds = favoriteIds.includes(id)
        ? favoriteIds.filter(item => item !== id)
        : [...favoriteIds, id];

    saveFavorites();
    displayPosts(filteredPosts);
}

function renderFavorites() {
    if (!favoriteList) return;

    const favorites = favoriteIds
        .map(id => blogPosts.find(post => post.id === id))
        .filter(Boolean);

    if (favorites.length === 0) {
        favoriteList.innerHTML = '<li class="empty-favorites">Hen\u00fcz ara\u00e7 eklenmedi.</li>';
        if (compareBtn) compareBtn.disabled = true;
        if (shareListBtn) shareListBtn.disabled = true;
        return;
    }

    if (compareBtn) compareBtn.disabled = favorites.length < 2;
    if (shareListBtn) shareListBtn.disabled = false;

    favoriteList.innerHTML = favorites
        .map(post => `
            <li>
                <a href="#" data-post-link="${post.id}">${post.title}</a>
                <button type="button" data-favorite-id="${post.id}" aria-label="${post.title} k\u0131sa listeden kald\u0131r">Kald\u0131r</button>
            </li>
        `)
        .join('');
}

function getFavoritePosts() {
    return favoriteIds
        .map(id => blogPosts.find(post => post.id === id))
        .filter(Boolean);
}

function createShareUrl() {
    const url = new URL(window.location.href);
    url.searchParams.set('tools', favoriteIds.join(','));
    url.hash = 'blog';
    return url.toString();
}

async function shareFavoriteList() {
    if (favoriteIds.length === 0) return;

    const shareUrl = createShareUrl();

    try {
        await navigator.clipboard.writeText(shareUrl);
        if (shareStatus) shareStatus.textContent = 'Link kopyaland\u0131.';
    } catch (error) {
        if (shareStatus) shareStatus.textContent = shareUrl;
    }
}

function openCompareModal() {
    const favorites = getFavoritePosts();
    if (favorites.length < 2) {
        if (shareStatus) shareStatus.textContent = 'Kar\u015f\u0131la\u015ft\u0131rmak i\u00e7in en az iki ara\u00e7 se\u00e7.';
        return;
    }

    modalContent.innerHTML = `
        <span class="post-category">K\u0131sa Liste</span>
        <h2 id="modalTitle">Ara\u00e7 kar\u015f\u0131la\u015ft\u0131rmas\u0131</h2>
        <p class="modal-excerpt">Se\u00e7ti\u011fin ara\u00e7lar\u0131 fiyat, uygunluk ve ilk ad\u0131m a\u00e7\u0131s\u0131ndan yan yana g\u00f6r.</p>
        <div class="compare-table-wrap">
            <table class="compare-table">
                <thead>
                    <tr>
                        <th>Ara\u00e7</th>
                        <th>Kategori</th>
                        <th>Fiyat</th>
                        <th>Kimler i\u00e7in?</th>
                    </tr>
                </thead>
                <tbody>
                    ${favorites.map(post => `
                        <tr>
                            <td>${post.title}</td>
                            <td>${getCategoryLabel(post.category)}</td>
                            <td>${post.price}</td>
                            <td>${post.bestFor}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        <div class="modal-footer">
            <span class="price">${favorites.length} ara\u00e7 se\u00e7ildi</span>
            <button class="primary-link" type="button" id="modalShareBtn">Linki kopyala</button>
        </div>
    `;

    detailModal.classList.add('open');
    detailModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    detailModal.querySelector('.modal-close').focus();
}

function setActiveCategoryButton(category) {
    filterBtns.forEach(btn => {
        const isActive = btn.dataset.category === category;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });
}

function handleRouting() {
    const hash = window.location.hash;
    if (!hash.startsWith('#blog')) return;

    const params = new URLSearchParams(hash.substring(6));
    const category = params.get('category');
    const hasCategoryButton = category && document.querySelector(`button[data-category="${category}"]`);

    if (hasCategoryButton) {
        setActiveCategoryButton(category);
        searchInput.value = '';
        filterByCategory(category);
    }
}

function openPostModal(postId) {
    const post = blogPosts.find(item => item.id === Number(postId));
    if (!post) return;

    modalContent.innerHTML = `
        <span class="post-category">${getCategoryLabel(post.category)}</span>
        <h2 id="modalTitle">${post.title}</h2>
        <p class="modal-excerpt">${post.excerpt}</p>
        <div class="modal-grid">
            <div>
                <h3>Kimler i\u00e7in uygun?</h3>
                <p>${post.bestFor}</p>
            </div>
            <div>
                <h3>\u0130lk ad\u0131m</h3>
                <p>${post.starterStep}</p>
            </div>
        </div>
        <div class="pros-cons">
            <div>
                <h3>Art\u0131lar</h3>
                <ul>${post.pros.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
            <div>
                <h3>Dikkat</h3>
                <ul>${post.cons.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
        </div>
        <div class="modal-footer">
            <span class="price">${post.price}</span>
            <a class="primary-link" href="${post.affiliateLink}" target="_blank" rel="noopener noreferrer sponsored">Resmi siteye git</a>
        </div>
    `;

    detailModal.classList.add('open');
    detailModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    detailModal.querySelector('.modal-close').focus();
}

function closePostModal() {
    detailModal.classList.remove('open');
    detailModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        setActiveCategoryButton(category);
        searchInput.value = '';
        filterByCategory(category);
    });
});

searchBtn.addEventListener('click', searchPosts);
searchInput.addEventListener('input', searchPosts);
if (sortSelect) sortSelect.addEventListener('change', applyCurrentFilters);
if (clearFiltersBtn) clearFiltersBtn.addEventListener('click', resetFilters);
if (compareBtn) compareBtn.addEventListener('click', openCompareModal);
if (shareListBtn) shareListBtn.addEventListener('click', shareFavoriteList);
window.addEventListener('hashchange', handleRouting);

document.addEventListener('click', event => {
    const cardButton = event.target.closest('[data-post-id]');
    const sidebarLink = event.target.closest('[data-post-link]');
    const closeButton = event.target.closest('[data-close-modal]');
    const favoriteButton = event.target.closest('[data-favorite-id]');
    const modalShareButton = event.target.closest('#modalShareBtn');

    if (modalShareButton) {
        shareFavoriteList();
        return;
    }
    if (favoriteButton) {
        event.preventDefault();
        toggleFavorite(favoriteButton.dataset.favoriteId);
        return;
    }
    if (cardButton) openPostModal(cardButton.dataset.postId);
    if (sidebarLink) {
        event.preventDefault();
        openPostModal(sidebarLink.dataset.postLink);
    }
    if (closeButton) closePostModal();
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && detailModal.classList.contains('open')) closePostModal();
});

const newsletter = document.getElementById('newsletterForm');
if (newsletter) {
    newsletter.addEventListener('submit', event => {
        event.preventDefault();
        const email = document.getElementById('newsletterEmail');

        if (email && email.value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
            if (!subscribers.includes(email.value)) subscribers.push(email.value);
            localStorage.setItem('subscribers', JSON.stringify(subscribers));
            alert('Te\u015fekk\u00fcrler! Aboneli\u011finiz kaydedildi.');
            email.value = '';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayPosts(filteredPosts);
    populateTrending();
    populateCategories();
    handleRouting();
});
