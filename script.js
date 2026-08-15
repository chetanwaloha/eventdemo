// Mobile navigation drawer toggle
const menuButton = document.getElementById('menu');
const navLinks = document.getElementById('nav');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close nav menu when clicking any link
  document.querySelectorAll('.navlinks a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// Portfolio filter functionality
const filterButtons = document.querySelectorAll('.filter');
const portfolioItems = document.querySelectorAll('.work');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons and add to the clicked one
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterCategory = btn.dataset.filter;

    // Toggle hide class based on the selected filter
    portfolioItems.forEach(item => {
      const itemCategory = item.dataset.cat;
      const shouldHide = filterCategory !== 'all' && itemCategory !== filterCategory;
      item.classList.toggle('hide', shouldHide);
    });
  });
});

// Packages category switcher
const packageTabs = document.querySelectorAll('.package-tab');
const packageGrids = document.querySelectorAll('.package-grid');

if (packageTabs.length > 0 && packageGrids.length > 0) {
  packageTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Toggle active class on tabs
      packageTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetCategory = tab.dataset.category;

      // Toggle display of package grids
      packageGrids.forEach(grid => {
        const gridCategory = grid.dataset.category;
        grid.classList.toggle('hide', gridCategory !== targetCategory);
      });
    });
  });
}

// Lightbox Modal Viewer
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

if (lightbox && lightboxImg) {
  // Open lightbox when clicking on a portfolio item
  portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || 'Enlarged view';
        lightbox.classList.add('show');
      }
    });
  });

  // Close lightbox on backdrop or close button click
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target.classList.contains('close')) {
      lightbox.classList.remove('show');
    }
  });

  // Close lightbox on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      lightbox.classList.remove('show');
    }
  });
}

// Contact form simulation
const contactForm = document.getElementById('form');
const successMessage = document.getElementById('success');

if (contactForm && successMessage) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    successMessage.style.display = 'block';
    contactForm.reset();
  });
}

// Dynamic copyright year update
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
