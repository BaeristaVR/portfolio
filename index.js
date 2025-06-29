// Toggle mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  const openIcon = document.querySelector('.open-icon');
  const closeIcon = document.querySelector('.close-icon');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    openIcon.style.display = nav.classList.contains('active') ? 'none' : 'block';
    closeIcon.style.display = nav.classList.contains('active') ? 'block' : 'none';
  });
});

window.onload = () => {
  //  Force scroll to #home on refresh
  setTimeout(() => {
    location.replace('#home');
  }, 0);

  //  Animated word-by-word text
  const textElement = document.querySelector('.animated-text');
  if (textElement) {
    const words = textElement.textContent.trim().split(' ');
    textElement.innerHTML = '';
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.animationDelay = `${index * 1.5}s`;
      textElement.appendChild(span);
    });
  }

  //  Render soft skills pie chart
  const ctx = document.getElementById('softSkillsChart')?.getContext('2d');
  if (ctx) {
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
          'Adaptability', 'Team Collaboration', 'Customer Thinking',
          'Problem Solving', 'Attention to Detail', 'Time Management', 'Creative Mindset'
        ],
        datasets: [{
          data: [15, 20, 10, 15, 10, 15, 15],
          backgroundColor: [
            'rgba(181,23,139,1)', 'rgba(68,49,191,1)', 'rgb(150,88,38)',
            'rgba(28,138,138,1)', 'rgba(89,29,169,1)', 'rgba(157,25,172,1)', 'rgba(129,117,42,1)'
          ],
          borderWidth: 1,
          borderColor: '#0fa3a3',
          hoverBorderColor: 'rgba(255,255,255,0.6)',
          hoverOffset: 25
        }]
      },
      options: {
        responsive: false,
        animation: {
          duration: 500,
          easing: 'easeOutElastic'
        },
        layout: { padding: 30 },
        plugins: {
          tooltip: { enabled: true },
          legend: {
            position: 'right',
            labels: { color: '#0fa3a3' }
          }
        }
      }
    });
  }
};

// Typed.js typing effect
new Typed(".text", {
  strings: ["Computer Science Student", "Aspiring Software Engineer", "Barista"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  startDelay: 500,
  loop: true
});


// Observer for reveal-on-scroll sections
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle('reveal', entry.isIntersecting);
  });
}, {
  threshold: 0.01,
  rootMargin: '0px 0px -30px 0px'
});

document.querySelectorAll('.section').forEach(el => revealObserver.observe(el));

//  Observer for fade-in elements (like quotes, headings, etc.)
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle('visible', entry.isIntersecting);
  });
}, {
  threshold: 0.01,
  rootMargin: '0px 0px -30px 0px'
});

document.querySelectorAll('.fade-in').forEach(el => fadeInObserver.observe(el));



// Carousel hover focus
document.querySelectorAll('.carousel-slide').forEach(slide => {
  slide.addEventListener('mouseenter', () => {
    document.querySelectorAll('.carousel-slide').forEach(s => s.classList.remove('focused'));
    slide.classList.add('focused');
  });
  slide.addEventListener('mouseleave', () => {
    slide.classList.remove('focused');
  });
});


  document.querySelectorAll('.motivation').forEach(el => {
  el.classList.add('visible');
});


//refresh
  window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  });


  //music toggle
  function toggleMusic() {
  const music = document.getElementById('bg-music');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}


// refresh page
window.addEventListener('load', () => {
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname);
    // Use 'auto' for instant scroll
    window.scrollTo({ top: 0, behavior: 'auto' });
  } else {
    window.scrollTo(0, 0);
  }
});


// refresh page
window.addEventListener('load', () => {
  setTimeout(() => {
    history.replaceState(null, '', window.location.pathname);
    window.scrollTo(0, 0);
  }, 0);
});


// scroll-padding-top
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    const isSameTarget = window.location.hash === targetId;

    if (isSameTarget) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});





