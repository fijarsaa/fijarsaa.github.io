# Portofolio

Situs statis satu halaman. Tanpa build tool, tanpa framework — cukup HTML, CSS, dan JavaScript murni.

## Struktur folder

```
index.html          struktur halaman (jarang perlu diedit)
css/style.css        semua styling + variabel warna/font di bagian atas file
js/data.js            SEMUA KONTEN ada di sini — edit file ini paling sering
js/script.js          logika render, tidak perlu diedit untuk ganti konten
assets/images/        taruh foto profil, screenshot proyek, dsb di sini
```

## Cara mengedit konten

Buka `js/data.js`. Semua yang tampil di halaman diatur dari sana:

- **Profil & hero** — ubah objek `PROFILE` (nama, tagline, email, link GitHub/LinkedIn).
- **Menambah proyek** — tambahkan object baru ke array `PROJECTS`, contoh formatnya sudah ada sebagai komentar di dalam file. Category harus salah satu dari `general`, `cfd`, atau `ds`.
- **Menambah keahlian** — tambahkan object baru ke array `SKILLS` dengan `name` dan `category`.
- **Menambah kategori baru** — tambahkan ke array `CATEGORIES`, otomatis muncul di filter proyek dan grouping skills.

Tidak perlu menyentuh `index.html` atau `js/script.js` untuk perubahan konten sehari-hari.

## Cara mengubah tampilan

Buka `css/style.css`, bagian paling atas (`:root`) berisi semua variabel warna dan font. Ubah nilai di situ akan berlaku ke seluruh halaman secara konsisten.

## Menambahkan foto profil

1. Taruh file foto di `assets/images/`, misal `assets/images/profil.jpg`.
2. Di `index.html`, cari elemen dengan class `hero` dan tambahkan `<img src="assets/images/profil.jpg" alt="Foto profil">` sesuai kebutuhan.

## Melihat hasil di komputer sendiri

Buka `index.html` langsung di browser, atau jalankan server lokal sederhana:

```bash
python3 -m http.server 8000
```

lalu buka `http://localhost:8000` di browser.

## Publish ke GitHub Pages

1. Buat repository baru di GitHub, misal `portfolio`.
2. Push seluruh isi folder ini ke repository tersebut:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/USERNAME/portfolio.git
   git push -u origin main
   ```
3. Di GitHub: buka tab **Settings** repo → **Pages** → pada **Source** pilih branch `main` dan folder `/ (root)` → **Save**.
4. Situs akan aktif di `https://USERNAME.github.io/portfolio/` dalam beberapa menit.

Jika ingin domain jadi `https://USERNAME.github.io` langsung (tanpa `/portfolio/`), beri nama repository persis `USERNAME.github.io`.
