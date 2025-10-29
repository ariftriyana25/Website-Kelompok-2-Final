// Seleksi elemen DOM untuk tombol, konten teks, dan gambar voice
let btn = document.querySelector("#btn3");
let content = document.querySelector("#text");
let voice = document.querySelector("#voice");

// Fungsi untuk membuat browser berbicara dengan teks yang diberikan
function speak(text) {
    // Membuat objek SpeechSynthesisUtterance untuk teks yang akan diucapkan
    let text_speak = new SpeechSynthesisUtterance(text);
    // Mengatur kecepatan bicara (1 = normal)
    text_speak.rate = 1;
    // Mengatur volume (1 = maksimal)
    text_speak.volume = 1;
    // Mengatur pitch (1 = normal)
    text_speak.pitch = 1;
    // Memulai speech synthesis
    window.speechSynthesis.speak(text_speak);
}

// Fungsi untuk menyapa pengguna berdasarkan waktu hari
function wishme() {
    // Mendapatkan objek Date untuk waktu saat ini
    let days = new Date();
    // Mendapatkan jam saat ini
    let hours = days.getHours();
    // Jika jam antara 0-11 (pagi), ucapkan selamat pagi
    if (hours >= 0 && hours < 12) {
        speak("Selamat pagi Mas-Mas dan Mba-Mba yang cantik dan ganteng, sebelumnya saya ingin memperkenalkan diri nama saya fira asisten virtual anda. saya di program atau dibuat oleh Tuan Muhammad Arif Triyana");
    // Jika jam antara 12-15 (siang), ucapkan selamat siang
    } else if (hours >= 12 && hours < 16) {
        speak("Selamat siang Mas-Mas dan Mba-Mba yang cantik dan ganteng, sebelumnya saya ingin memperkenalkan diri nama saya fira asisten virtual anda. saya di program atau dibuat oleh Tuan Muhammad Arif Triyana");
    // Jika jam 16 ke atas (malam), ucapkan selamat malam
    } else {
        speak("Selamat malam Mas-Mas dan Mba-Mba yang cantik dan ganteng, sebelumnya saya ingin memperkenalkan diri nama saya fira asisten virtual anda. saya di program atau dibuat oleh Tuan Muhammad Arif Triyana");
    }
}

// Inisialisasi speech recognition (mendukung browser yang berbeda)
let speechRecognization = window.speechRecognition || window.webkitSpeechRecognition;
// Membuat instance recognization
let recognization = new speechRecognization();
// Event handler ketika hasil speech diterima
recognization.onresult = (event) => {
    // Mendapatkan indeks hasil terbaru
    let currentIndex = event.resultIndex;
    // Mendapatkan transkrip dari hasil
    let transcript = event.results[currentIndex][0].transcript;
    // Menampilkan transkrip di elemen konten
    content.innerText = transcript;
    // Memproses perintah dengan huruf kecil
    takeCommand(transcript.toLowerCase());
};

// Event listener untuk tombol klik
btn.addEventListener("click", () => {
    // Menyembunyikan tombol
    btn.style.display = "none";
    // Menampilkan gambar voice
    voice.style.display = "block";
    // Memulai speech recognition
    recognization.start();
});

// Fungsi untuk menebak kemungkinan masalah curhat berdasarkan kata kunci
function guessCurhatIssue(message) {
    // Jika ada kata terkait cinta atau pacar
    if (message.includes("pacar") || message.includes("mantan") || message.includes("cinta") || message.includes("putus")) {
        return "Masalah cinta ya? Jangan sedih, banyak ikan di laut. Cari yang lebih baik!";
    // Jika ada kata terkait keluarga
    } else if (message.includes("keluarga") || message.includes("orang tua") || message.includes("saudara")) {
        return "Masalah keluarga? Komunikasi adalah kunci. Coba bicara baik-baik dengan mereka.";
    // Jika ada kata terkait pekerjaan atau kuliah
    } else if (message.includes("kerja") || message.includes("kuliah") || message.includes("bos") || message.includes("tugas")) {
        return "Stres kerja atau kuliah? Istirahat sebentar dan fokus pada solusi. Kamu pasti bisa!";
    // Jika ada kata terkait teman
    } else if (message.includes("teman") || message.includes("persahabatan")) {
        return "Masalah teman? Teman sejati akan selalu ada. Evaluasi hubunganmu.";
    // Jika ada kata terkait kesehatan
    } else if (message.includes("sakit") || message.includes("sehat") || message.includes("stres")) {
        return "Kesehatanmu penting! Jaga pola makan dan istirahat yang cukup. Jika perlu, konsultasi dokter.";
    // Jika tidak ada kata kunci spesifik, respons umum
    } else {
        return "Aduh, jangan sedih dong. Ceritakan masalahmu lebih detail, aku di sini untuk mendengarkan. Ingat, setiap masalah ada solusinya!";
    }
}

// Fungsi untuk memproses perintah yang diterima
function takeCommand(message) {
    // Menampilkan tombol kembali
    btn.style.display = "flex";
    // Menyembunyikan gambar voice
    voice.style.display = "none";
    
    // Jika pesan mengandung salam atau kata positif, sapa dan tanya bantuan
    if (message.includes("hello") || message.includes("perkenalkan diri kamu") || message.includes("sayang") || message.includes("hei ganteng")) {
        wishme();
        speak("Hallo sobat Universitas Catur Insan Cendikia apa yang bisa saya bantu?");
    // Jika perintah untuk buka YouTube
    } else if (message.includes("buka youtube")) {
        speak("Buka youtube sabar dulu kang...");
        window.open("https://www.youtube.com/", "_blank");
    // Jika perintah untuk buka Facebook
    } else if (message.includes("buka facebook")) {
        speak("Buka facebook sabar dulu kang...");
        window.open("https://www.facebook.com/", "_blank");
    // Jika perintah untuk buka Instagram
    } else if (message.includes("buka instagram")) {
        speak("Buka instagram sabar dulu kang...");
        window.open("https://www.instagram.com/", "_blank");
    // Jika perintah untuk buka Spotify
    } else if (message.includes("buka spotify")) {
        speak("Buka spotify sabar dulu kang...");
        window.open("https://www.spotify.com/", "_blank");
    // Jika perintah untuk buka kalkulator
    } else if (message.includes("buka kalkulator")) {
        speak("Buka kalkulator sabar dulu kang...");
        window.open("calculator://");
    // Jika perintah untuk buka WhatsApp
    } else if (message.includes("buka whatsapp")) {
        speak("Buka whatsapp emang ada yang nge chat sok sokan luh...");
        window.open("whatsapp://");
    // Jika perintah untuk waktu
    } else if (message.includes("jam")) {
        // Mendapatkan waktu saat ini dalam format jam:menit
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    // Jika perintah untuk tanggal
    } else if (message.includes("tanggal")) {
        // Mendapatkan tanggal saat ini dalam format hari bulan tahun
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short", year: "numeric" });
        speak(date);
    // Jika perintah untuk ngoding
    } else if (message.includes("coding")) {
        speak("Buka Visual Studio Code untuk coding sabar dulu...");
        window.open("vscode://"); // Membuka VS Code jika terinstall
    // Jika perintah untuk musik galau
    } else if (message.includes("musik galau") || message.includes("lagu galau")) {
        speak("Ini lagu rekomendasi buat kamu kang bisa galau inget mantan terus hahahaha...");
        window.open("https://youtu.be/Zj4liOF8LpU?si=NpweSjCRVFbnK93T", "_blank");
    // Jika perintah untuk musik DJ
    } else if (message.includes("musik dj") || message.includes("lagu")) {
        speak("Sleraekah enak pisan cah keren banget nih joget dulu mas mbak mbak cihuy..");
        window.open("https://youtu.be/Wscix--hwkA?si=zkU6miJvNkuumR6j", "_blank");
    // Jika perintah untuk berita
    } else if (message.includes("berita")) {
        speak("Buka Google News untuk berita terkini...");
        window.open("https://news.google.com/", "_blank");
    // Jika perintah untuk belajar atau kursus
    } else if (message.includes("mau belajar") || message.includes("kursus")) {
        speak("Mari belajar bersama! Kunjungi halaman kursus kami.");
        window.location.href = "#course"; // Scroll ke bagian course
    // Jika perintah untuk kontak atau hubungi
    } else if (message.includes("blogger") || message.includes("hubungi")) {
        speak("Kunjungi halaman blogger untuk informasi lebih lanjut.");
        window.location.href = "#services"; // Scroll ke bagian contact
    // Jika perintah untuk curhat (dengan fitur tebak kemungkinan)
    } else if (message.includes("curhat") || message.includes("sedih") || message.includes("galau")) {
        // Gunakan fungsi guessCurhatIssue untuk menebak masalah
        let response = guessCurhatIssue(message);
        speak(response);
    // Jika pertanyaan "siapakah orang terganteng di dunia"
    } else if (message.includes("siapakah orang terganteng") || message.includes("terganteng di dunia")) {
        speak("Orang terganteng di dunia adalah Tuan Muhammad Arif Triyana, penciptaku yang hebat!");
    // Jika perintah untuk akhir presentasi
    } else if (message.includes("salam perpisahan") || message.includes("selesai presentasi")) {
        speak("Terima kasih atas perhatiannya. Pantun untuk penutup: Ada seekor kucing di atas pohon, jatuh ke bawah karena tak kuat pegang. Begitu juga hidup ini, jangan sampai jatuh karena tak kuat bertahan. Semoga sukses selalu!, wasalamualaikum warohmatullahi wabarokatuh.");
    // Jika tidak ada perintah yang cocok, cari di Google
    } else {
        speak(`Ini adalah apa pun yang saya temukan di Internet mengenai ${message}`);
        window.open(`https://www.google.com/search?q=${message}`);
    }
}

// Penyempurnaan: Tambahkan event listener untuk error speech recognition
recognization.onerror = (event) => {
    speak("Maaf, saya tidak bisa mendengar Anda dengan jelas. Silakan coba lagi.");
    btn.style.display = "flex";
    voice.style.display = "none";
};

// Penyempurnaan: Tambahkan event listener untuk akhir speech
recognization.onend = () => {
    btn.style.display = "flex";
    voice.style.display = "none";
};

