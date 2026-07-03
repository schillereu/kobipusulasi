const leadForm = document.getElementById('leadForm');
const leadSummary = document.getElementById('leadSummary');
const copyLeadSummary = document.getElementById('copyLeadSummary');
const copyStatus = document.getElementById('copyStatus');

function buildLeadSummary(data) {
    return [
        `Ad soyad: ${data.name || '-'}`,
        `E-posta: ${data.email || '-'}`,
        `Isletme turu: ${data.businessType || '-'}`,
        `Ekip buyuklugu: ${data.teamSize || '-'}`,
        `En acil ihtiyac: ${data.need || '-'}`,
        `Mevcut araclar: ${data.currentTools || '-'}`,
        `Hedef: ${data.goal || '-'}`,
        '',
        'Onerilen ilk aksiyon: Ana sayfada ilgili kategoriyi filtrele, 2-3 araci kisa listeye ekle ve ilk hafta tek sureci sisteme tasi.'
    ].join('\n');
}

function getStoredLead() {
    try {
        return JSON.parse(localStorage.getItem('kobirotasiLead') || '{}');
    } catch (error) {
        return {};
    }
}

if (leadForm) {
    leadForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(leadForm);
        const payload = Object.fromEntries(formData.entries());
        payload.createdAt = new Date().toISOString();
        localStorage.setItem('kobirotasiLead', JSON.stringify(payload));
        window.location.href = 'tesekkur.html';
    });
}

if (leadSummary) {
    const data = getStoredLead();
    leadSummary.textContent = data.email ? buildLeadSummary(data) : 'Henüz kayıtlı analiz bulunamadı. İhtiyaç analizi formunu doldurarak başlayabilirsin.';
}

if (copyLeadSummary && leadSummary) {
    copyLeadSummary.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(leadSummary.textContent);
            if (copyStatus) copyStatus.textContent = 'Özet kopyalandı.';
        } catch (error) {
            if (copyStatus) copyStatus.textContent = 'Kopyalama desteklenmedi; metni seçerek kopyalayabilirsin.';
        }
    });
}
