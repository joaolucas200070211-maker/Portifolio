// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '80px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'rgba(10,10,10,0.98)';
      navLinks.style.padding = '2rem';
      navLinks.style.gap = '2rem';
      navLinks.style.textAlign = 'center';
      navLinks.style.borderBottom = '1px solid #222';
    }
  });
}

// Efeito de digitação (typing)
const typingElement = document.querySelector('.typing');
if (typingElement) {
  const texts = [
    "Desenvolvedor Web",
    "Frontend Developer",
    "UI/UX Enthusiast",
    "PHP + MySQL"
  ];
  let i = 0;
  let char = 0;
  let currentText = '';
  let isDeleting = false;

  function type() {
    if (isDeleting) {
      currentText = texts[i].slice(0, char--);
    } else {
      currentText = texts[i].slice(0, ++char);
    }

    typingElement.textContent = currentText;

    let speed = isDeleting ? 60 : 100;

    if (!isDeleting && char === texts[i].length) {
      speed = 1800;
      isDeleting = true;
    } else if (isDeleting && char === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
      speed = 400;
    }

    setTimeout(type, speed);
  }

  setTimeout(type, 800);
}