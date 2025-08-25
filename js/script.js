<script>
// --- Menú hamburguesa ---
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('hamburger');
  const nav    = document.getElementById('navLinks');

  function openMenu() {
    nav.classList.add('active');
    burger.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    nav.classList.remove('active');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
  function toggleMenu() {
    nav.classList.contains('active') ? closeMenu() : openMenu();
  }

  // Click en hamburguesa
  if (burger) {
    burger.addEventListener('click', toggleMenu);
    // Atributos de accesibilidad
    burger.setAttribute('aria-controls', 'navLinks');
    burger.setAttribute('aria-expanded', 'false');
  }

  // Cerrar al hacer clic en un enlace del menú
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar si se hace clic fuera del menú
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && !nav.contains(e.target) && !burger.contains(e.target)) {
      closeMenu();
    }
  });

  // Cerrar si cambia a vista de escritorio
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });
});

// --- Copiar texto al portapapeles ---
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showCopyMessage();
  }).catch(err => console.error('Error al copiar:', err));
}

// Mensaje visual de confirmación
function showCopyMessage() {
  const msg = document.createElement('div');
  msg.textContent = '¡Copiado!';
  msg.style.position = 'fixed';
  msg.style.bottom = '30px';
  msg.style.right = '30px';
  msg.style.background = '#1e3a8a';
  msg.style.color = '#fff';
  msg.style.padding = '10px 20px';
  msg.style.borderRadius = '8px';
  msg.style.fontSize = '1rem';
  msg.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
  msg.style.zIndex = '1000';
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 2000);
}
</script>
