// --- Menú hamburguesa ---
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

// Cerrar menú automáticamente al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('active');
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
