/* HENKŌ — responsive navigation */
(() => {
  const menuToggle = document.getElementById('menu-toggle');
  const navigation = document.getElementById('navigation');
  if (!menuToggle || !navigation) return;

  const menuIcon = menuToggle.querySelector('.menu-icon');
  const closeMenu = () => {
    navigation.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
    if (menuIcon) menuIcon.textContent = '☰';
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    if (menuIcon) menuIcon.textContent = isOpen ? '×' : '☰';
  });

  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 768) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
})();
