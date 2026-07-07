/*
  ============================================================
  RENDER PROFIL & TEKS STATIS
  ============================================================
*/
document.getElementById("nav-name").textContent = PROFILE.name.toLowerCase().replace(/\s+/g, "") + ".dev";
document.getElementById("hero-role").textContent = PROFILE.role;
document.getElementById("hero-name").textContent = "Halo, saya " + PROFILE.name;
document.getElementById("hero-tagline").textContent = PROFILE.tagline;

const heroPhotoImg = document.getElementById("hero-photo-img");
const heroPhotoPlaceholder = document.getElementById("hero-photo-placeholder");
if (PROFILE.photo) {
  heroPhotoImg.src = PROFILE.photo;
  heroPhotoImg.style.display = "block";
  heroPhotoPlaceholder.style.display = "none";
}

document.getElementById("footer-text").textContent = "\u00A9 " + new Date().getFullYear() + " " + PROFILE.name;

const aboutText = document.getElementById("about-text");
PROFILE.about.forEach(paragraph => {
  const p = document.createElement("p");
  p.textContent = paragraph;
  aboutText.appendChild(p);
});

const contactLinks = document.getElementById("contact-links");
contactLinks.innerHTML = `
  <a href="mailto:${PROFILE.email}">Email</a>
  <a href="${PROFILE.github}" target="_blank" rel="noopener">GitHub</a>
  <a href="${PROFILE.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
`;

/*
  ============================================================
  RENDER FILTER PROYEK
  ============================================================
*/
const filtersEl = document.getElementById("filters");
let activeCategory = "all";

function renderFilters() {
  const allBtn = `<button class="filter-btn ${activeCategory === "all" ? "active" : ""}" data-cat="all">Semua</button>`;
  const catBtns = CATEGORIES.map(cat =>
    `<button class="filter-btn ${activeCategory === cat.id ? "active" : ""}" data-cat="${cat.id}">${cat.label}</button>`
  ).join("");

  filtersEl.innerHTML = allBtn + catBtns;

  filtersEl.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      renderFilters();
      renderProjects();
    });
  });
}

/*
  ============================================================
  RENDER KARTU PROYEK
  Jika kategori belum punya proyek, tampilkan slot ajakan
  untuk mengisi — bukan pesan kosong yang terasa negatif.
  ============================================================
*/
const projectGrid = document.getElementById("project-grid");

function renderProjects() {
  const visible = activeCategory === "all"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  if (visible.length === 0) {
    const label = activeCategory === "all"
      ? "proyek"
      : CATEGORIES.find(c => c.id === activeCategory)?.label.toLowerCase() ?? "proyek";
    projectGrid.innerHTML = `
      <div class="project-empty">
        Proyek ${label} pertama akan segera hadir di sini.<br />
        Tambahkan lewat array <code>PROJECTS</code> di <code>js/data.js</code>.
      </div>
    `;
    return;
  }

  projectGrid.innerHTML = visible.map(project => `
    <div class="project-card">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>
      ${project.link ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener">Lihat proyek &rarr;</a>` : ""}
    </div>
  `).join("");
}

/*
  ============================================================
  RENDER KEAHLIAN — dikelompokkan otomatis per kategori
  ============================================================
*/
const skillsGroupsEl = document.getElementById("skills-groups");

function renderSkills() {
  skillsGroupsEl.innerHTML = CATEGORIES.map(cat => {
    const items = SKILLS.filter(s => s.category === cat.id);
    if (items.length === 0) return "";
    return `
      <div class="skills-group">
        <h3>${cat.label}</h3>
        <div class="skills-tags">
          ${items.map(s => `<span class="badge">${s.name}</span>`).join("")}
        </div>
      </div>
    `;
  }).join("");
}

/*
  ============================================================
  INISIALISASI
  ============================================================
*/
renderFilters();
renderProjects();
renderSkills();
