
document.addEventListener('DOMContentLoaded', () => {

  initLoadingSequence();

  initVantaBackground();

  initNavigation();

  initScrollReveal();
  initGSAPAnimations();
  initTypewriterEffects();
  initTiltEffect();
  initCustomCursor();

  initProjectFilter();
  initContactForm();
  initBackToTop();
});

function initLoadingSequence() {
  const body = document.body;

  body.classList.add('is-loading');
  
  const preloader = document.createElement('div');
  preloader.className = 'preloader';
  preloader.innerHTML = `
    <div class="loader">
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="rgba(255, 45, 117, 1)" fill="none" stroke-width="5" />
        <circle cx="50" cy="50" r="30" stroke="rgba(121, 40, 202, 0.8)" fill="none" stroke-width="4" />
        <circle cx="50" cy="50" r="20" stroke="rgba(0, 198, 255, 0.6)" fill="none" stroke-width="3" />
      </svg>
      <div class="loader-text">LOADING<span class="dots">...</span></div>
    </div>
  `;
  body.appendChild(preloader);
  let dotsInterval = setInterval(() => {
    const dots = document.querySelector('.dots');
    if (dots) {
      if (dots.textContent === '...') dots.textContent = '';
      else if (dots.textContent === '') dots.textContent = '.';
      else if (dots.textContent === '.') dots.textContent = '..';
      else if (dots.textContent === '..') dots.textContent = '...';
    }
  }, 300);
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('is-hidden');
      body.classList.remove('is-loading');
      clearInterval(dotsInterval);
      setTimeout(() => {
        preloader.remove();
      }, 1500);
    }, 1500);
  });
}

function initVantaBackground() {
  const vantaContainer = document.getElementById('vanta-bg');
  if (vantaContainer) {
    VANTA.NET({
      el: vantaContainer,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xff2d75,
      backgroundColor: 0x030305,
      points: 12.00,
      maxDistance: 28.00,
      spacing: 16.00
    });
  }
}

function initNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navOverlay = document.querySelector('.nav-overlay');
  const navLinks = document.querySelectorAll('.nav-link');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('is-active');
    navOverlay.classList.toggle('is-active');
    document.body.classList.toggle('nav-open');
  });
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (navOverlay.classList.contains('is-active')) {
        navToggle.classList.remove('is-active');
        navOverlay.classList.remove('is-active');
        document.body.classList.remove('nav-open');
      }
      if (link.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  });
}

function initScrollReveal() {
  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    delay: 200,
    easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
    reset: false
  });
  sr.reveal('.section-header', { 
    origin: 'top',
    delay: 100
  });
  sr.reveal('.hero-title', {
    origin: 'left',
    delay: 200,
    distance: '50px'
  });
  sr.reveal('.hero-subtitle', {
    origin: 'left',
    delay: 400,
    distance: '50px'
  });
  sr.reveal('.hero-description', {
    origin: 'left',
    delay: 600,
    distance: '50px'
  });
  sr.reveal('.hero-cta', {
    origin: 'left',
    delay: 800,
    distance: '50px'
  });
  sr.reveal('.code-container', {
    origin: 'right',
    delay: 500,
    distance: '60px'
  });
  sr.reveal('.tech-pill', {
    origin: 'right',
    interval: 150,
    delay: 800,
    distance: '30px'
  });
  sr.reveal('.terminal', {
    origin: 'left',
    delay: 300
  });
  sr.reveal('.skill-category', {
    interval: 200
  });
  sr.reveal('.project-card', {
    origin: 'bottom',
    interval: 200,
    distance: '40px'
  });
  sr.reveal('.about-visual', {
    origin: 'right',
    delay: 300
  });
  sr.reveal('.contact-card', {
    interval: 200
  });
  sr.reveal('.contact-form-container', {
    origin: 'right',
    delay: 300
  });
  sr.reveal('.footer-info, .footer-links, .footer-social', {
    interval: 200,
    origin: 'bottom',
    distance: '20px'
  });
}

function initGSAPAnimations() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.grid-background', {
    y: '10%',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
  gsap.to('.hexagon', {
    rotation: 360,
    duration: 20,
    ease: "none",
    repeat: -1
  });
  const floatingBadges = document.querySelectorAll('.badge');
  floatingBadges.forEach((badge, index) => {
    gsap.to(badge, {
      y: -15 + (index * 5),
      duration: 2 + index * 0.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
  });
  gsap.utils.toArray('.skill-level').forEach(skill => {
    const level = skill.getAttribute('data-level');
    gsap.fromTo(skill, 
      { width: '0%' },
      {
        width: level,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skill,
          start: 'top 90%'
        }
      }
    );
  });
  gsap.utils.toArray('.section-line').forEach(line => {
    gsap.fromTo(line,
      { width: 0 },
      {
        width: '120px',
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: line.parentElement,
          start: 'top 80%'
        }
      }
    );
  });
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        duration: 0.3,
        ease: "power1.out"
      });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power1.out"
      });
    });
  });
}

function initTypewriterEffects() {
  const typewriterElements = document.querySelectorAll('.typing-text, .typewriter-text');
  typewriterElements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    let charIndex = 0;
    const typeChar = () => {
      if (charIndex < text.length) {
        element.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, Math.random() * 50 + 50);
      } else {
        element.classList.add('typing-done');
      }
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            typeChar();
          }, 300);
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(element);
  });
  const codeContent = document.querySelector('.code-content code');
  if (codeContent) {
    const originalHTML = codeContent.innerHTML;
    codeContent.innerHTML = '';
    let charIndex = 0;
    const typeCode = () => {
      if (charIndex < originalHTML.length) {
        codeContent.innerHTML += originalHTML.charAt(charIndex);
        charIndex++;
        setTimeout(typeCode, 5);
        codeContent.parentElement.scrollTop = codeContent.parentElement.scrollHeight;
      }
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            typeCode();
          }, 1000);
          observer.unobserve(codeContent);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(codeContent);
  }
}

function initTiltEffect() {
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    const content = card.querySelector('.project-card__content');
    card.addEventListener('mousemove', e => {
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      const mouseX = e.clientX - cardCenterX;
      const mouseY = e.clientY - cardCenterY;
      const rotateY = -mouseX / 15;
      const rotateX = mouseY / 15;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      if (content) {
        content.style.transform = `translateZ(40px)`;
      }
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      if (content) {
        content.style.transform = 'translateZ(0)';
      }
    });
  });
}

function initCustomCursor() {
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  if (!cursor || !cursorFollower) return;
  document.addEventListener('mousemove', e => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1
    });
    gsap.to(cursorFollower, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5
    });
  });
  const interactiveElements = document.querySelectorAll('a, button, .project-card, .nav-toggle');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-active');
      cursorFollower.classList.add('cursor-active');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-active');
      cursorFollower.classList.remove('cursor-active');
    });
  });
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorFollower.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '1';
  });
}

function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            clearProps: "transform"
          });
          card.style.display = 'block';
        } else {
          gsap.to(card, {
            opacity: 0,
            y: 20,
            scale: 0.95,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
              card.style.display = 'none';
            }
          });
        }
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const partyBtn = document.getElementById('party-mode-btn');
  const partyModal = document.getElementById('party-warning-modal');
  const partyContinue = document.getElementById('party-continue-btn');
  const partyCancel = document.getElementById('party-cancel-btn');
  let partyActive = false;
  let partyInterval = null;
  let lastPartyBg = '';
  function randomColor() {
    const h = Math.floor(Math.random() * 360);
    return `hsl(${h},98%,55%)`;
  }
  function startPartyMode() {
    if (partyActive) return;
    partyActive = true;
    document.body.classList.add('party-mode');
    partyInterval = setInterval(() => {
      document.body.style.background = `linear-gradient(90deg, ${randomColor()}, ${randomColor()})`;
      const mp = document.getElementById('music-player');
      if (mp) mp.style.boxShadow = `0 0 24px 8px ${randomColor()}, 0 0 60px 0 ${randomColor()}`;
      const headers = document.querySelectorAll('.section-header, .footer, .project-card, .tools, .fun-section');
      headers.forEach(el => {
        el.style.boxShadow = `0 0 12px 2px ${randomColor()}`;
        el.style.borderColor = randomColor();
      });
    }, 120);
    partyBtn.textContent = '';
    partyBtn.style.background = 'linear-gradient(90deg,#ff3333,#ff00cc)';
  }
  function stopPartyMode() {
    partyActive = false;
    clearInterval(partyInterval);
    document.body.classList.remove('party-mode');
    document.body.style.background = lastPartyBg;
    const mp = document.getElementById('music-player');
    if (mp) mp.style.boxShadow = '';
    const headers = document.querySelectorAll('.section-header, .footer, .project-card, .tools, .fun-section');
    headers.forEach(el => {
      el.style.boxShadow = '';
      el.style.borderColor = '';
    });
    partyBtn.textContent = '';
    partyBtn.style.background = 'linear-gradient(90deg,#ff00cc,#3333ff)';
  }
  if (partyBtn && partyModal && partyContinue && partyCancel) {
    partyBtn.addEventListener('click', () => {
      if (partyActive) {
        stopPartyMode();
        return;
      }
      partyModal.style.display = 'flex';
    });
    partyContinue.addEventListener('click', () => {
      partyModal.style.display = 'none';
      lastPartyBg = document.body.style.background;
      startPartyMode();
    });
    partyCancel.addEventListener('click', () => {
      partyModal.style.display = 'none';
    });
  }
});

function initContactForm() {
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const musicPlayer = document.getElementById('music-player');
      const musicClose = document.getElementById('music-close');
      if (musicClose && musicPlayer) {
        musicClose.addEventListener('click', () => {
          musicPlayer.style.display = 'none';
        });
      }
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      contactForm.classList.add('is-sending');
      setTimeout(() => {
        contactForm.innerHTML = `
          <div class="form-success">
            <i class="fas fa-check-circle"></i>
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out, I'll get back to you soon.</p>
          </div>
        `;
      }, 1500);
    });
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('is-focused');
      });
      input.addEventListener('blur', () => {
        input.parentElement.classList.remove('is-focused');
        if (input.value.trim() !== '') {
          input.parentElement.classList.add('has-value');
        } else {
          input.parentElement.classList.remove('has-value');
        }
      });
    });
  }
}

function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    });
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}