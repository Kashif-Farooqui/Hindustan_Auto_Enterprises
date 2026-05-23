/* ================================================
   Hindustan Auto Enterprises - Main JavaScript
   script.js
   ================================================ */

/* ── WhatsApp Enquiry Form ── */
function sendToWhatsApp() {
  const name     = document.getElementById('f-name').value.trim();
  const phone    = document.getElementById('f-phone').value.trim();
  const email    = document.getElementById('f-email').value.trim();
  const interest = document.getElementById('f-interest').value;
  const msg      = document.getElementById('f-msg').value.trim();

  if (!name)  { alert('Please enter your name.');         return; }
  if (!phone) { alert('Please enter your phone number.'); return; }

  let text = `Hello Hindustan Auto Enterprises! 🙏\n\n`;
  text += `*Name:* ${name}\n`;
  text += `*Phone:* ${phone}\n`;
  if (email)    text += `*Email:* ${email}\n`;
  if (interest) text += `*Interested In:* ${interest}\n`;
  if (msg)      text += `\n*Message:*\n${msg}`;
  text += `\n\nPlease guide me further. Thank you!`;

  const encoded = encodeURIComponent(text);
  showToast();
  // Replace 919695XXXXXX with your actual WhatsApp number (country code + number)
  setTimeout(() => {
    window.open(`https://wa.me/919834388379?text=${encoded}`, '_blank');
  }, 600);
}

/* ── Toast Notification ── */
function showToast() {
  const t = document.getElementById('toast');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

/* ── Active Nav Highlight on Scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--green)'
      : '';
  });
});

/* ── Scroll-In Card Animations ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity    = '1';
      e.target.style.transform  = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document
  .querySelectorAll('.product-card, .service-card, .spare-item, .why-card, .career-item, .partner-card')
  .forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(30px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });