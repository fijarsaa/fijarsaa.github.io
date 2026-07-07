/*
  ============================================================
  DATA SITUS — edit file ini untuk mengubah isi portofolio
  Tidak perlu menyentuh HTML atau CSS untuk perubahan konten.
  ============================================================
*/

// ---- 1. PROFIL ----
// Info dasar yang tampil di navbar, hero, dan bagian about.
const PROFILE = {
  name: "Fijar Saefuddin Al'abdi",
  role: "Engineer — CFD & Data Science",
  photo: "assets/images/profil.png"
  tagline: "Fokus computational fluid dynamics dan data science untuk memecahkan masalah rekayasa.",
  about: [
    "Tulis 2-3 kalimat tentang latar belakang Anda di sini. Ceritakan bagaimana Anda mulai tertarik pada engineering, computational fluid dynamics, dan data science.",
    "Kalimat kedua bisa menjelaskan apa yang sedang Anda pelajari atau kerjakan saat ini."
  ],
  email: "fijarsaefuddin@gmail.com",
  github: "https://github.com/fijarsaa",
  linkedin: "https://linkedin.com/in/fijarsaa",
  resumeUrl: "" // isi dengan path CV, contoh: "assets/cv.pdf" — kosongkan jika belum ada
};

// ---- 2. KATEGORI ----
// Dipakai untuk tombol filter di bagian Proyek dan pengelompokan di Keahlian.
// Tambah/kurangi kategori di sini akan otomatis memperbarui filter dan grouping.
const CATEGORIES = [
  { id: "general", label: "General" },
  { id: "cfd", label: "CFD" },
  { id: "ds", label: "Data science" }
];

// ---- 3. PROYEK ----
// Kosongkan array ini biarkan tampil sebagai "slot kosong" per kategori,
// atau isi seperti contoh di bawah (hapus tanda komentar untuk mengaktifkan).
const PROJECTS = [
  // {
  //   title: "Simulasi aliran udara di sekitar airfoil",
  //   category: "cfd",
  //   description: "Simulasi 2D menggunakan OpenFOAM untuk menganalisis pola aliran dan koefisien drag pada berbagai sudut serang.",
  //   tags: ["OpenFOAM", "ParaView"],
  //   link: "https://github.com/username/nama-repo"
  // },
];

// ---- 4. KEAHLIAN ----
// Setiap item butuh: name (nama tool/bahasa) dan category (harus cocok dengan id di CATEGORIES).
const SKILLS = [
  { name: "Python", category: "general" },
  { name: "Git", category: "general" },
  { name: "OpenFOAM", category: "cfd" },
  { name: "ParaView", category: "cfd" },
  { name: "MATLAB", category: "cfd" },
  { name: "Pandas", category: "ds" },
  { name: "Scikit-learn", category: "ds" },
  { name: "SQL", category: "ds" }
];
