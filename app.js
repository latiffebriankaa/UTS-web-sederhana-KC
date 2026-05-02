const questions = [
  {
    id: "q1",
    category: "POLA TIDUR",
    text: "Berapa lama rata-rata waktu yang Anda butuhkan untuk bisa tertidur setelah berbaring?",
    hint: "Hitung dari saat Anda menutup mata hingga benar-benar tertidur",
    options: [
      { label: "Kurang dari 15 menit", value: 0, fact: "latensi_normal" },
      {
        label: "15 - 30 menit",
        value: 1,
        fact: "latensi_sedang",
        sub: "Sedikit lebih lama dari normal",
      },
      {
        label: "30 - 60 menit",
        value: 2,
        fact: "latensi_panjang",
        sub: "Butuh waktu cukup lama",
      },
      {
        label: "Lebih dari 60 menit",
        value: 3,
        fact: "latensi_sangat_panjang",
        sub: "Bisa memakan lebih dari 1 jam",
      },
    ],
  },
  {
    id: "q2",
    category: "KUALITAS TIDUR",
    text: "Seberapa sering Anda terbangun di tengah malam tanpa alasan yang jelas?",
    hint: "Tidak termasuk terbangun karena buang air kecil atau suara keras",
    options: [
      { label: "Hampir tidak pernah", value: 0, fact: "bangun_malam_tidak" },
      { label: "1 - 2 kali seminggu", value: 1, fact: "bangun_malam_kadang" },
      { label: "3 - 4 kali seminggu", value: 2, fact: "bangun_malam_sering" },
      { label: "Hampir setiap malam", value: 3, fact: "bangun_malam_selalu" },
    ],
  },
  {
    id: "q3",
    category: "PERNAPASAN SAAT TIDUR",
    text: "Apakah Anda atau pasangan pernah menyadari adanya gejala berikut saat tidur?",
    hint: "Pilih yang paling mendekati kondisi Anda",
    options: [
      { label: "Tidak ada keluhan pernapasan", value: 0, fact: "napas_normal" },
      {
        label: "Mendengkur keras (snoring)",
        value: 1,
        fact: "mendengkur",
        sub: "Bunyi keras saat tidur",
      },
      {
        label: "Mendengkur + napas berhenti sesaat",
        value: 3,
        fact: "apnea",
        sub: "Orang lain melihat napas terhenti",
      },
      {
        label: "Sering terbangun karena sesak/tercekik",
        value: 3,
        fact: "bangun_sesak",
      },
    ],
  },
  {
    id: "q4",
    category: "KANTUK SIANG HARI",
    text: "Bagaimana tingkat kantuk Anda di siang hari (meski sudah tidur cukup malam sebelumnya)?",
    hint: "Berdasarkan kondisi rata-rata dalam 1 bulan terakhir",
    options: [
      { label: "Segar dan bertenaga", value: 0, fact: "kantuk_siang_tidak" },
      {
        label: "Sedikit mengantuk tapi masih bisa fokus",
        value: 1,
        fact: "kantuk_siang_ringan",
      },
      {
        label: "Sangat mengantuk, sulit konsentrasi",
        value: 2,
        fact: "kantuk_siang_berat",
      },
      {
        label: "Tertidur tiba-tiba tanpa bisa dicegah",
        value: 3,
        fact: "sleep_attack",
        sub: "Serangan tidur mendadak",
      },
    ],
  },
  {
    id: "q5",
    category: "PENGALAMAN UNIK",
    text: "Pernahkah Anda mengalami salah satu fenomena berikut?",
    hint: "Pilih yang pernah atau sering terjadi",
    options: [
      {
        label: "Tidak pernah mengalami keduanya",
        value: 0,
        fact: "tidak_katapleksi",
      },
      {
        label: "Badan lemas/jatuh tiba-tiba saat tertawa/kaget (katapleksi)",
        value: 3,
        fact: "katapleksi",
        sub: "Otot mendadak lemas saat emosi intens",
      },
      {
        label: "Halusinasi saat mau tidur atau bangun tidur",
        value: 2,
        fact: "halusinasi_tidur",
        sub: "Melihat/mendengar hal yang tidak ada",
      },
      {
        label:
          "Tubuh tidak bisa bergerak sesaat setelah bangun (sleep paralysis)",
        value: 2,
        fact: "sleep_paralysis",
      },
    ],
  },
  {
    id: "q6",
    category: "PERILAKU SAAT TIDUR",
    text: "Apakah Anda pernah melakukan aktivitas berikut saat tidur (tanpa sadar)?",
    hint: "Bisa diketahui dari laporan orang lain atau menemukan buktinya saat bangun",
    options: [
      { label: "Tidak pernah", value: 0, fact: "tidak_parasomnia" },
      {
        label: "Berjalan saat tidur (somnambulisme)",
        value: 3,
        fact: "somnambulisme",
      },
      { label: "Berbicara saat tidur", value: 2, fact: "sleep_talking" },
      {
        label: "Menangis, berteriak, atau bertingkah seperti bermimpi",
        value: 3,
        fact: "rem_behavior",
      },
    ],
  },
  {
    id: "q7",
    category: "SENSASI FISIK",
    text: "Apakah Anda merasakan sensasi tidak nyaman di kaki saat berbaring atau mau tidur?",
    hint: "Seperti kesemutan, geli, atau dorongan kuat untuk menggerakkan kaki",
    options: [
      { label: "Tidak pernah", value: 0, fact: "tidak_rls" },
      {
        label: "Kadang-kadang (1 - 2x seminggu)",
        value: 1,
        fact: "rls_ringan",
      },
      { label: "Sering (3 - 5x seminggu)", value: 2, fact: "rls_sedang" },
      {
        label: "Hampir setiap malam dan sangat mengganggu",
        value: 3,
        fact: "rls_berat",
      },
    ],
  },
  {
    id: "q8",
    category: "DURASI & KONSISTENSI",
    text: "Berapa total jam tidur Anda per malam secara rata-rata?",
    hint: "Kebutuhan tidur orang dewasa normal adalah 7 - 9 jam",
    options: [
      { label: "7 - 9 jam (normal)", value: 0, fact: "durasi_normal" },
      { label: "5 - 6 jam", value: 1, fact: "durasi_kurang" },
      { label: "Kurang dari 5 jam", value: 2, fact: "durasi_sangat_kurang" },
      {
        label: "Lebih dari 10 jam tapi tetap tidak segar",
        value: 2,
        fact: "hipersomnia",
      },
    ],
  },
  {
    id: "q9",
    category: "DAMPAK PSIKOLOGIS",
    text: "Seberapa besar masalah tidur Anda mempengaruhi kualitas hidup sehari-hari?",
    hint: "Termasuk pekerjaan, hubungan sosial, suasana hati",
    options: [
      {
        label: "Tidak berpengaruh signifikan",
        value: 0,
        fact: "dampak_minimal",
      },
      {
        label: "Sedikit berpengaruh, masih bisa ditoleransi",
        value: 1,
        fact: "dampak_ringan",
      },
      {
        label: "Cukup berdampak pada produktivitas",
        value: 2,
        fact: "dampak_sedang",
      },
      {
        label: "Sangat berdampak, mengganggu fungsi normal",
        value: 3,
        fact: "dampak_berat",
      },
    ],
  },
  {
    id: "q10",
    category: "FAKTOR LINGKUNGAN",
    text: "Bagaimana kondisi lingkungan dan kebiasaan tidur Anda?",
    hint: "Pilih yang paling menggambarkan situasi Anda",
    options: [
      {
        label: "Lingkungan tenang, jadwal tidur teratur",
        value: 0,
        fact: "hygiene_baik",
      },
      {
        label: "Sering menggunakan HP/layar sebelum tidur",
        value: 1,
        fact: "screen_time",
      },
      {
        label: "Jadwal tidur tidak teratur (shift kerja/jam tidur berubah)",
        value: 2,
        fact: "jadwal_tidak_teratur",
      },
      {
        label: "Kecemasan/stres berat yang membuat tidak bisa tidur",
        value: 3,
        fact: "anxiety_insomnia",
      },
    ],
  },
  {
    id: "q11",
    category: "RIWAYAT & DURASI",
    text: "Sudah berapa lama Anda mengalami masalah tidur ini?",
    hint: "Insomnia akut: <3 bulan, kronis: >3 bulan",
    options: [
      { label: "Baru-baru ini saja (< 2 minggu)", value: 1, fact: "akut" },
      { label: "2 minggu - 3 bulan", value: 2, fact: "subakut" },
      { label: "Lebih dari 3 bulan", value: 3, fact: "kronis" },
      {
        label: "Sejak kecil / sudah sangat lama",
        value: 3,
        fact: "kronis_lama",
      },
    ],
  },
  {
    id: "q12",
    category: "FAKTOR RISIKO",
    text: "Apakah Anda memiliki salah satu faktor risiko berikut?",
    hint: "Faktor ini dapat memperparah gangguan tidur",
    options: [
      { label: "Tidak ada faktor risiko khusus", value: 0, fact: "no_risk" },
      {
        label: "Kelebihan berat badan (BMI > 27) / leher gemuk",
        value: 2,
        fact: "obesitas",
        sub: "Faktor risiko utama sleep apnea",
      },
      { label: "Konsumsi kafein/alkohol berlebih", value: 1, fact: "stimulan" },
      {
        label: "Riwayat keluarga dengan gangguan tidur serupa",
        value: 2,
        fact: "genetik",
      },
    ],
  },
];

// rule base — 15 Rule (Forward Chaining)
const rules = [
  // Insomnia
  {
    id: "R01",
    label: "Insomnia Onset",
    conditions: ["latensi_panjang", "anxiety_insomnia"],
    conclusion: "insomnia",
    weight: 3,
    explanation:
      "IF latensi tidur > 30 menit AND ada kecemasan/stres → kemungkinan Insomnia",
  },
  {
    id: "R02",
    label: "Insomnia Maintenance",
    conditions: ["bangun_malam_sering", "bangun_malam_selalu"],
    conclusion: "insomnia",
    weight: 2,
    explanation:
      "IF sering terbangun di malam hari → mendukung diagnosis Insomnia",
  },
  {
    id: "R03",
    label: "Insomnia Kronis",
    conditions: ["kronis", "dampak_berat"],
    conclusion: "insomnia_kronis",
    weight: 3,
    explanation:
      "IF masalah tidur > 3 bulan AND dampak berat → Insomnia Kronis",
  },
  {
    id: "R04",
    label: "Insomnia Psikofisiologis",
    conditions: ["latensi_sangat_panjang", "screen_time"],
    conclusion: "insomnia",
    weight: 2,
    explanation:
      "IF latensi > 60 menit AND penggunaan layar berlebih → Insomnia Psikofisiologis",
  },

  // Sleep apnea
  {
    id: "R05",
    label: "Sleep Apnea Obstruktif",
    conditions: ["apnea", "mendengkur"],
    conclusion: "sleep_apnea",
    weight: 4,
    explanation:
      "IF napas terhenti saat tidur AND mendengkur → OSAS (Obstructive Sleep Apnea Syndrome)",
  },
  {
    id: "R06",
    label: "Sleep Apnea + Obesitas",
    conditions: ["mendengkur", "obesitas"],
    conclusion: "sleep_apnea",
    weight: 3,
    explanation:
      "IF mendengkur AND kelebihan berat badan → risiko tinggi Sleep Apnea",
  },
  {
    id: "R07",
    label: "Sleep Apnea Tersembunyi",
    conditions: ["bangun_sesak", "kantuk_siang_berat"],
    conclusion: "sleep_apnea",
    weight: 3,
    explanation:
      "IF bangun karena sesak AND kantuk siang berat → Sleep Apnea tanpa mendengkur",
  },

  // Narkolepsia
  {
    id: "R08",
    label: "Narkolepsi Klasik (Tipe 1)",
    conditions: ["sleep_attack", "katapleksi"],
    conclusion: "narkolepsi",
    weight: 5,
    explanation:
      "IF sleep attack AND katapleksi → Narkolepsi Tipe 1 (sangat spesifik)",
  },
  {
    id: "R09",
    label: "Narkolepsi Tipe 2",
    conditions: ["sleep_attack", "halusinasi_tidur"],
    conclusion: "narkolepsi",
    weight: 4,
    explanation:
      "IF sleep attack AND halusinasi hipnagogik → Narkolepsi Tipe 2",
  },
  {
    id: "R10",
    label: "Narkolepsi Ringan",
    conditions: ["kantuk_siang_berat", "sleep_paralysis", "hipersomnia"],
    conclusion: "narkolepsi",
    weight: 3,
    explanation:
      "IF kantuk berat siang AND sleep paralysis AND hipersomnia → kemungkinan Narkolepsi",
  },

  // Parasomnia
  {
    id: "R11",
    label: "Parasomnia Motorik",
    conditions: ["somnambulisme"],
    conclusion: "parasomnia",
    weight: 4,
    explanation: "IF berjalan saat tidur → Somnambulisme (NREM Parasomnia)",
  },
  {
    id: "R12",
    label: "REM Sleep Behavior Disorder",
    conditions: ["rem_behavior"],
    conclusion: "parasomnia",
    weight: 4,
    explanation: "IF bertingkah seperti bermimpi → REM Sleep Behavior Disorder",
  },
  {
    id: "R13",
    label: "Parasomnia Campuran",
    conditions: ["sleep_paralysis", "halusinasi_tidur"],
    conclusion: "parasomnia",
    weight: 2,
    explanation:
      "IF sleep paralysis AND halusinasi → Parasomnia, bisa tumpang tindih dengan Narkolepsi",
  },

  // Restkess leg syndrome
  {
    id: "R14",
    label: "RLS Definitif",
    conditions: ["rls_berat", "latensi_panjang"],
    conclusion: "rls",
    weight: 4,
    explanation:
      "IF sensasi kaki berat AND latensi panjang → Restless Leg Syndrome",
  },
  {
    id: "R15",
    label: "RLS Probable",
    conditions: ["rls_sedang", "bangun_malam_sering"],
    conclusion: "rls",
    weight: 3,
    explanation:
      "IF sensasi kaki sedang AND sering terbangun → kemungkinan RLS",
  },
];

// hypothesis database : hipotesis dan rekomendasi
const hypotheses = {
  insomnia: {
    name: "Insomnia",
    severity: "sedang",
    desc: "Gangguan dalam memulai atau mempertahankan tidur, atau tidur yang tidak restoratif. Merupakan gangguan tidur paling umum, memengaruhi 10–30% populasi dewasa.",
    color: "var(--warn)",
    recommendations: [
      {
        text: "Terapkan Cognitive Behavioral Therapy for Insomnia (CBT-I) — terbukti lebih efektif dari obat tidur jangka panjang",
      },
      {
        text: "Hentikan penggunaan layar (HP/TV) minimal 1 jam sebelum tidur — blue light menekan produksi melatonin",
      },
      {
        text: "Pertahankan jadwal tidur-bangun yang konsisten setiap hari, termasuk akhir pekan",
      },
      {
        text: "Hindari kafein setelah pukul 14.00 dan alkohol — keduanya mengganggu arsitektur tidur",
      },
      {
        text: "Jika persisten > 3 bulan, konsultasikan dengan dokter spesialis tidur atau psikiater",
      },
    ],
  },
  insomnia_kronis: {
    name: "Insomnia Kronis",
    severity: "berat",
    desc: "Insomnia yang berlangsung lebih dari 3 bulan dengan dampak signifikan pada fungsi siang hari. Memerlukan intervensi profesional segera.",
    color: "var(--danger)",
    recommendations: [
      {
        text: "Segera konsultasi dengan dokter spesialis tidur (somnologi) atau psikiater",
      },
      {
        text: "Evaluasi kemungkinan kondisi komorbid: depresi, kecemasan, atau penyakit fisik lainnya",
      },
      {
        text: "Pertimbangkan program CBT-I terstruktur (6 - 8 sesi) atau dengan panduan terapis",
      },
      {
        text: "Buat sleep diary selama 2 minggu untuk membantu dokter menganalisis pola tidur Anda",
      },
      {
        text: "Mungkin diperlukan polysomnography (PSG) untuk menyingkirkan gangguan tidur lain",
      },
    ],
  },
  sleep_apnea: {
    name: "Sleep Apnea",
    severity: "berat",
    desc: "Gangguan pernapasan saat tidur dengan episode berhentinya napas berulang. Meningkatkan risiko hipertensi, stroke, dan penyakit kardiovaskular secara signifikan.",
    color: "var(--danger)",
    recommendations: [
      {
        text: "WAJIB konsultasi dokter spesialis paru/tidur — ini kondisi serius yang dapat mengancam jiwa",
      },
      {
        text: "Pertimbangkan pemeriksaan polisomnografi atau home sleep apnea test (HSAT)",
      },
      {
        text: "Terapi CPAP (Continuous Positive Airway Pressure) adalah gold standard untuk OSAS sedang-berat",
      },
      {
        text: "Penurunan berat badan 10% terbukti mengurangi keparahan apnea hingga 50%",
      },
      {
        text: "Tidur dalam posisi miring (lateral) dapat mengurangi episode apnea",
      },
    ],
  },
  narkolepsi: {
    name: "Narkolepsi",
    severity: "berat",
    desc: "Gangguan neurologis kronik akibat defisiensi oreksin/hipokretin yang menyebabkan kantuk berlebih dan gangguan kontrol tidur-bangun. Memerlukan diagnosis konfirmasi medis.",
    color: "var(--danger)",
    recommendations: [
      {
        text: "Konsultasi SEGERA dengan neurolog atau spesialis tidur — narkolepsi memerlukan konfirmasi diagnostik",
      },
      {
        text: "Pemeriksaan Multiple Sleep Latency Test (MSLT) dan kadar oreksin CSF mungkin diperlukan",
      },
      {
        text: "Modalitas terapi meliputi stimulan (modafinil), sodium oxybate, dan antidepresan untuk katapleksi",
      },
      {
        text: "Jadwalkan tidur siang singkat (15 - 20 menit) 2 - 3x sehari untuk mengelola kantuk",
      },
      {
        text: "Hindari mengemudi atau mengoperasikan mesin berat — risiko kecelakaan sangat tinggi",
      },
    ],
  },
  parasomnia: {
    name: "Parasomnia",
    severity: "sedang",
    desc: "Perilaku abnormal yang terjadi saat tidur atau transisi tidur-bangun. Mencakup somnambulisme, REM sleep behavior disorder, dan gangguan perilaku NREM.",
    color: "var(--warn)",
    recommendations: [
      {
        text: "Amankan lingkungan tidur: kunci pintu/jendela, singkirkan benda berbahaya dari jangkauan",
      },
      {
        text: "Pastikan durasi tidur cukup — kurang tidur adalah pemicu utama somnambulisme",
      },
      {
        text: "Konsultasikan dengan dokter jika episode sering atau berpotensi berbahaya (berjalan keluar rumah)",
      },
      {
        text: "REM Behavior Disorder perlu evaluasi neurologis karena dapat berhubungan dengan penyakit Parkinson dini",
      },
      {
        text: "Rekam episode dengan kamera tidur untuk membantu dokter membuat diagnosis yang akurat",
      },
    ],
  },
  rls: {
    name: "Restless Leg Syndrome",
    severity: "sedang",
    desc: "Gangguan sensorimotorik dengan sensasi tidak nyaman di kaki yang memburuk saat istirahat, membaik dengan gerakan. Berhubungan dengan defisiensi zat besi dan dopamin.",
    color: "var(--warn)",
    recommendations: [
      {
        text: "Periksa kadar ferritin serum — defisiensi zat besi adalah penyebab sekunder RLS paling umum",
      },
      {
        text: "Berjalan kaki atau meregangkan kaki dapat memberikan bantuan gejala sementara",
      },
      {
        text: "Mandi air hangat atau kompres dingin/hangat pada kaki sebelum tidur dapat membantu",
      },
      {
        text: "Kurangi atau eliminasi kafein, alkohol, dan nikotin — ketiganya memperburuk gejala RLS",
      },
      {
        text: "Untuk kasus berat, dokter dapat meresepkan agonis dopamin (pramipexole, ropinirole) atau antikonvulsan",
      },
    ],
  },
  normal: {
    name: "Tidak Terdeteksi Gangguan Signifikan",
    severity: "ringan",
    desc: "Berdasarkan jawaban Anda, tidak ditemukan pola yang mengarah pada gangguan tidur spesifik. Namun tetap perhatikan kualitas tidur Anda sebagai bagian dari gaya hidup sehat.",
    color: "var(--success)",
    recommendations: [
      {
        text: "Pertahankan jadwal tidur konsisten setiap hari — ini adalah pondasi sleep hygiene yang baik",
      },
      {
        text: "Olahraga teratur (30 menit, minimal 3x seminggu) secara signifikan meningkatkan kualitas tidur",
      },
      {
        text: "Gunakan kamar tidur hanya untuk tidur dan seks — kuatkan asosiasi tempat tidur dengan rasa ngantuk",
      },
      {
        text: "Jaga suhu kamar antara 18 - 22°C — suhu optimal untuk kualitas tidur terbaik",
      },
      {
        text: "Monitor pola tidur menggunakan aplikasi atau sleep tracker untuk deteksi dini",
      },
    ],
  },
};

// Fakta-fakta "normal/negatif" yang tidak perlu ditampilkan sebagai chip gejala
const NEGATIVE_FACTS = new Set([
  "napas_normal",
  "tidak_rls",
  "tidak_parasomnia",
  "bangun_malam_tidak",
  "latensi_normal",
  "kantuk_siang_tidak",
  "tidak_katapleksi",
  "durasi_normal",
  "dampak_minimal",
  "hygiene_baik",
  "no_risk",
  "akut",
]);

//App state

let currentQ = 0;
let answers = {};
let activeFacts = new Set();

// forward chaining inference engine
function runInference() {
  // mengumpulkan fakta
  activeFacts = new Set();
  questions.forEach((q) => {
    const answerIndex = answers[q.id];
    if (answerIndex !== undefined) {
      const selectedOption = q.options[answerIndex];
      if (selectedOption && selectedOption.fact) {
        activeFacts.add(selectedOption.fact);
      }
    }
  });

  // pencocokan pola dan skoring
  const scores = {}; // skorf kumulatif
  const firedRules = []; // rules yang terpenuhi (penuh/sebagian)

  rules.forEach((rule) => {
    const matched = rule.conditions.filter((cond) => activeFacts.has(cond));

    if (matched.length > 0) {
      const confidence = matched.length / rule.conditions.length;
      const score = confidence * rule.weight;

      scores[rule.conclusion] = (scores[rule.conclusion] || 0) + score;

      firedRules.push({
        ...rule,
        matched,
        confidence: Math.round(confidence * 100),
      });
    }
  });

  // pilih hipotesis terbaik
  let maxScore = 0;
  let primary = "normal";

  for (const [hypo, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      primary = hypo;
    }
  }

  // Normalisasi skor ke 0–100 untuk tampilan
  const MAX_POSSIBLE = 15;
  const normalized = {};
  for (const [h, s] of Object.entries(scores)) {
    normalized[h] = Math.min(100, Math.round((s / MAX_POSSIBLE) * 100));
  }

  return {
    primary,
    scores: normalized,
    firedRules,
    maxScore,
    activeFacts: [...activeFacts],
  };
}

// UI FUNCTIONS UI functions
//Mulai pertanyaan
function startQuiz() {
  document.getElementById("screen-intro").classList.remove("active");
  document.getElementById("screen-questions").classList.add("active");
  document.getElementById("progressWrap").style.display = "flex";
  renderQuestion();
}

// Render pertanyaan saat ini
function renderQuestion() {
  const q = questions[currentQ];

  document.getElementById("qCounter").textContent =
    `Pertanyaan ${currentQ + 1} dari ${questions.length}`;
  document.getElementById("qCategory").textContent = q.category;
  document.getElementById("qText").textContent = q.text;
  document.getElementById("qHint").textContent = q.hint || "";

  // Render pilihan jawaban
  const grid = document.getElementById("optionsGrid");
  grid.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn" + (answers[q.id] === i ? " selected" : "");
    btn.innerHTML = `
      <div class="opt-radio"></div>
      <div class="opt-label">
        ${opt.label}
        ${opt.sub ? `<small>${opt.sub}</small>` : ""}
      </div>
    `;
    btn.onclick = () => selectOption(i);
    grid.appendChild(btn);
  });

  updateProgress();

  document.getElementById("btnNext").disabled = answers[q.id] === undefined;
  document.getElementById("btnPrev").style.display =
    currentQ === 0 ? "none" : "";

  const isLast = currentQ === questions.length - 1;
  document.getElementById("btnNext").textContent = isLast
    ? "Lihat Hasil →"
    : "Lanjut →";
}

// Simpan pilihan dan update UI
function selectOption(idx) {
  answers[questions[currentQ].id] = idx;

  document.querySelectorAll(".option-btn").forEach((btn, i) => {
    btn.classList.toggle("selected", i === idx);
  });

  document.getElementById("btnNext").disabled = false;
}

// Lanjut ke pertanyaan berikutnya atau tampilkan hasil
function nextQuestion() {
  if (answers[questions[currentQ].id] === undefined) return;

  if (currentQ < questions.length - 1) {
    currentQ++;
    renderQuestion();
  } else {
    showResult();
  }
}

// Kembali ke pertanyaan sebelumnya
function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    renderQuestion();
  }
}

// Update progress bar
function updateProgress() {
  const answered = Object.keys(answers).length;
  const pct = Math.round((answered / questions.length) * 100);

  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("progressPct").textContent = pct + "%";
  document.getElementById("progressLabel").textContent =
    `Pertanyaan ${currentQ + 1} / ${questions.length}`;
}

// Tampilkan halaman hasil setelah semua pertanyaan dijawab
function showResult() {
  document.getElementById("screen-questions").classList.remove("active");
  document.getElementById("screen-result").classList.add("active");

  const { primary, scores, firedRules, activeFacts } = runInference();
  const hypo = hypotheses[primary] || hypotheses.normal;

  renderResultCard(hypo, primary, scores, activeFacts);
  renderReasoningCard(hypo, primary, firedRules);
  renderRecommendationCard(hypo);
}

// Render kartu diagnosis utama
function renderResultCard(hypo, primary, scores, activeFacts) {
  const severityClass = {
    ringan: "badge-ringan",
    sedang: "badge-sedang",
    berat: "badge-berat",
  }[hypo.severity];

  const severityLabel = {
    ringan: "Ringan",
    sedang: "Perlu perhatian",
    berat: "Perlu penanganan cepat",
  }[hypo.severity];

  // Diferensial diagnosis (hipotesis lain dengan skor tertinggi)
  const otherScores = Object.entries(scores)
    .filter(([k]) => k !== primary)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  // Chip gejala aktif (filter fakta negatif)
  const symptomChips = activeFacts
    .filter((f) => !NEGATIVE_FACTS.has(f))
    .map((f) => `<span class="chip">${f.replace(/_/g, " ")}</span>`)
    .join("");

  document.getElementById("resultCard").innerHTML = `
    <div class="result-badge ${severityClass}">${severityLabel}</div>
    <div class="result-title">${hypo.name}</div>
    <p class="result-desc">${hypo.desc}</p>

    <div class="section-title">Gejala yang Terdeteksi</div>
    <div class="chips-wrap">${symptomChips || '<span style="color:var(--muted);font-size:13px">Tidak ada gejala signifikan terdeteksi</span>'}</div>

    ${
      otherScores.length > 0
        ? `
      <div class="section-title">Diferensial Diagnosis</div>
      <div class="score-section">
        ${otherScores
          .map(
            ([k, v]) => `
          <div class="score-card">
            <div class="score-value" style="color:var(--primary)">${v}%</div>
            <div class="score-label">${hypotheses[k]?.name || k}</div>
          </div>
        `,
          )
          .join("")}
      </div>
    `
        : ""
    }

    <div class="disclaimer">
      <span>Perhatian:</span>
      <span>Hasil ini adalah skrining edukasi berbasis rule IF-THEN, bukan pengganti diagnosis medis. Tetap konsultasikan ke tenaga kesehatan untuk konfirmasi.</span>
    </div>
  `;
}

// Render kartu reasoning / proses inferensi
function renderReasoningCard(hypo, primary, firedRules) {
  const relevantRules = firedRules
    .filter((r) => r.conclusion === primary || firedRules.length < 4)
    .slice(0, 6);

  document.getElementById("reasoningCard").innerHTML = `
    <div class="reasoning-title">Proses Inferensi (Forward Chaining)</div>
    <p style="font-size:13px; color:var(--muted); margin-bottom:16px; line-height:1.6;">
      Sistem membaca fakta dari jawaban Anda lalu mencocokkan ke rule base.
      Rule yang cocok akan menambah bobot hipotesis terkait.
    </p>
    ${relevantRules
      .map(
        (r, i) => `
      <div class="rule-step">
        <div class="rule-num">${i + 1}</div>
        <div class="rule-text">
          <span class="rule-if">${r.id} — ${r.label}</span><br>
          ${r.explanation}<br>
          <small style="color:var(--muted)">
            Fakta cocok: ${r.matched.join(", ")} &bull;
            Keyakinan: ${r.confidence}% &bull;
            Bobot: +${((r.confidence / 100) * r.weight).toFixed(1)}
          </small>
        </div>
      </div>
    `,
      )
      .join("")}
    <div style="margin-top:16px; padding-top:16px; border-top:1px solid var(--border); font-size:13px; color:var(--muted);">
      <strong style="color:var(--primary)">Kesimpulan:</strong>
      Dari ${firedRules.length} rule yang terpenuhi,
      hipotesis <strong style="color:var(--text)">${hypo.name}</strong>
      memperoleh skor tertinggi → dipilih sebagai diagnosis utama.
    </div>
  `;
}

// Render kartu rekomendasi tindakan
function renderRecommendationCard(hypo) {
  document.getElementById("recCard").innerHTML = `
    <div class="reasoning-title">Rekomendasi Tindakan</div>
    <ul class="rec-list">
      ${hypo.recommendations
        .map(
          (r) => `
        <li><span>${r.text}</span></li>
      `,
        )
        .join("")}
    </ul>
  `;
}

// Reset aplikasi ke halaman awal
function resetApp() {
  currentQ = 0;
  answers = {};
  activeFacts = new Set();

  document.getElementById("screen-result").classList.remove("active");
  document.getElementById("screen-intro").classList.add("active");
  document.getElementById("progressWrap").style.display = "none";
  document.getElementById("progressFill").style.width = "0%";
  document.getElementById("progressPct").textContent = "0%";
}
