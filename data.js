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
  role: "Engineer — Simulation CFD & Data",
  photo: "assets/images/profil.png",
  tagline: "Fokus computational fluid dynamics dan data science untuk memecahkan masalah rekayasa.",
  about: [
    "Hai saya mahasiswa di Universitas Gadjah Mada dengan program studi Teknik Pertanian dan focus Teknik Mesin Biosistem",
    "Saya tertarik dalam dunia simulasi mengenai bagaimana aliran bisa bergerak dengan CFD dan menganisis suatu data"
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
  { id: "ds", label: "Data" }
];

// ---- 3. PROYEK ----
// Kosongkan array ini biarkan tampil sebagai "slot kosong" per kategori,
// atau isi seperti contoh di bawah (hapus tanda komentar untuk mengaktifkan).
const PROJECTS = [
   {
     title: "Board Game: Labline",
     category: "general",
     description: "Membuat dan menganalisis Board Game dari pra sampai pasca",
     tags: ["Story", "Desain"],
     link: ""
   },
];

// ---- 4. KEAHLIAN ----
// Setiap item butuh: name (nama tool/bahasa) dan category (harus cocok dengan id di CATEGORIES).
const SKILLS = [
  { name: "Python", category: "general" },
  { name: "Git", category: "general" },
  { name: "Ansys", category: "cfd" },
  { name: "ParaView", category: "cfd" },
  { name: "MATLAB", category: "cfd" },
  { name: "Pandas", category: "ds" },
  { name: "Scikit-learn", category: "ds" },
  { name: "SQL", category: "ds" }
];
