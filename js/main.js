const DEZENI = ["hrast", "bela", "grafit"];

function applyDezen(name) {
  const dezen = DEZENI.includes(name) ? name : "hrast";
  document.querySelectorAll(".kitchen").forEach((el) => el.setAttribute("data-dezen", dezen));
  document.querySelectorAll(".swatch").forEach((btn) => {
    btn.classList.toggle("is-on", btn.getAttribute("data-dezen") === dezen);
    btn.setAttribute("aria-pressed", String(btn.getAttribute("data-dezen") === dezen));
  });
  try { sessionStorage.setItem("bk-dezen", dezen); } catch (e) {}
}

document.querySelectorAll(".swatch").forEach((btn) => {
  btn.addEventListener("click", () => applyDezen(btn.getAttribute("data-dezen")));
});

if (document.querySelector(".kitchen, .swatch")) {
  let saved = "hrast";
  try { saved = sessionStorage.getItem("bk-dezen") || "hrast"; } catch (e) {}
  applyDezen(saved);
}

const header = document.querySelector(".site-header");
const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");

if (header) {
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function closeMenu() {
  if (!nav) return;
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
}

if (menuBtn && nav) {
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    document.body.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => window.setTimeout(closeMenu, 160));
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) closeMenu();
  });
}

/* ZAMENA: email na koji stižu upiti sa sajta */
const WORKSHOP_EMAIL = "info@blokkuhinja.rs";

const form = document.querySelector("#upit");
if (form) {
  const status = form.querySelector(".form-status");
  const button = form.querySelector('[type="submit"]');
  const setStatus = (kind, text) => {
    if (!status) return;
    status.hidden = false;
    status.className = `form-status ${kind}`;
    status.textContent = text;
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if (String(data._honey || "").trim()) {
      setStatus("ok", "Hvala. Javićemo se sa terminom za merenje.");
      form.reset();
      return;
    }

    const text = [
      "Upit za blok kuhinju",
      `Ime: ${data.ime || ""}`,
      `Telefon: ${data.telefon || ""}`,
      `Email: ${data.email || "nije naveden"}`,
      `Grad: ${data.grad || ""}`,
      `Model: ${data.model || ""}`,
      `Dezen: ${data.dezen || ""}`,
      `Raspored: ${data.raspored || ""}`,
      `Poruka: ${data.poruka || ""}`,
    ].join("\n");

    const oldLabel = button ? button.textContent : "";
    if (button) button.disabled = true;

    const url = `mailto:${WORKSHOP_EMAIL}?subject=${encodeURIComponent(
      `Upit za blok kuhinju — ${data.ime || "sajt"}`
    )}&body=${encodeURIComponent(text)}`;

    setStatus(
      "ok",
      `Otvorili smo poruku ka ${WORKSHOP_EMAIL}. Ako se mail program nije otvorio, pošaljite isti tekst ručno.`
    );
    window.location.href = url;

    window.setTimeout(() => {
      if (button) {
        button.disabled = false;
        button.textContent = oldLabel;
      }
    }, 600);
  });
}
