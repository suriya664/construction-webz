/*
 * SmartBuild Construction Template - Main JavaScript
 * Core interactions: menu, sliders, counters, scroll effects
 */

(function() {
  'use strict';

  // ===== PAGE LOADER =====
  window.addEventListener('load', function() {
    const loader = document.querySelector('.page-loader');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 500);
    }
  });

  // ===== NAVBAR SCROLL EFFECT =====
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }

  // ===== MOBILE MENU TOGGLE =====
  const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Close mobile menu when clicking outside
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ===== DROPDOWN MENU =====
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');

    if (toggle && menu) {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('active');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('active');
        }
      });
    }
  });

  // ===== COUNTER ANIMATION =====
  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = function() {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };

    updateCounter();
  }

  // Initialize counters when they come into view
  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  }

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#!') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = target.offsetTop - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  });

  // ===== BACK TO TOP BUTTON =====
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    });

    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ===== DARK MODE TOGGLE =====
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const body = document.body;

  // Check for saved dark mode preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      body.classList.toggle('dark-mode');

      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  }

  // ===== ACCORDION =====
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    if (header && content) {
      header.addEventListener('click', function() {
        // Close other accordion items
        accordionItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });

        // Toggle current item
        item.classList.toggle('active');
      });
    }
  });

  // ===== TABS =====
  const tabGroups = document.querySelectorAll('.tabs');
  tabGroups.forEach(tabGroup => {
    const tabButtons = tabGroup.querySelectorAll('.tab-btn');
    const tabPanes = tabGroup.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-tab');

        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // Add active class to clicked button and corresponding pane
        this.classList.add('active');
        const targetPane = tabGroup.querySelector(`#${targetId}`);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  });

  // ===== PROJECT FILTERS (ISOTOPE ALTERNATIVE) =====
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Filter projects
      projectItems.forEach(item => {
        if (filterValue === '*' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // ===== FORM VALIDATION =====
  const forms = document.querySelectorAll('.needs-validation');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  });

  // Indian Phone Number Formatting (+91)
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach(input => {
    input.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      
      // Limit to 10 digits
      if (value.length > 10) {
        value = value.slice(0, 10);
      }

      // Format: +91 XXXXX XXXXX
      if (value.length > 0) {
        if (value.length <= 5) {
          e.target.value = '+91 ' + value;
        } else {
          e.target.value = '+91 ' + value.slice(0, 5) + ' ' + value.slice(5);
        }
      }
    });
  });

  // ===== IMAGE LAZY LOADING =====
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
          }
          observer.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }

  // ===== PROGRESS BARS ANIMATION =====
  const progressBars = document.querySelectorAll('.progress-bar');
  if (progressBars.length > 0) {
    const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          const bar = entry.target;
          const width = bar.getAttribute('data-width');
          bar.style.width = width + '%';
          bar.classList.add('animated');
        }
      });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
      bar.style.width = '0%';
      progressObserver.observe(bar);
    });
  }

  // ===== MODAL =====
  const modalTriggers = document.querySelectorAll('[data-modal]');
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const modalCloses = document.querySelectorAll('.modal-close, .modal-backdrop');
  modalCloses.forEach(close => {
    close.addEventListener('click', function() {
      const modal = this.closest('.modal');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // ===== TESTIMONIAL SLIDER (Simple) =====
  const testimonialSliders = document.querySelectorAll('.testimonial-slider');
  testimonialSliders.forEach(slider => {
    const slides = slider.querySelectorAll('.testimonial-slide');
    const prevBtn = slider.querySelector('.slider-prev');
    const nextBtn = slider.querySelector('.slider-next');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      if (slides[index]) {
        slides[index].classList.add('active');
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      });
    }

    // Auto-play testimonials
    if (slides.length > 0) {
      showSlide(0);
      setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }, 5000);
    }
  });

  // ===== HERO SLIDER (Simple) =====
  const heroSlider = document.querySelector('.hero-slider');
  if (heroSlider) {
    const slides = heroSlider.querySelectorAll('.hero-slide');
    const dots = heroSlider.querySelectorAll('.slider-dot');
    let currentSlide = 0;

    function showHeroSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      if (slides[index]) {
        slides[index].classList.add('active');
      }
      if (dots[index]) {
        dots[index].classList.add('active');
      }
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        currentSlide = index;
        showHeroSlide(currentSlide);
      });
    });

    // Auto-play hero slider
    if (slides.length > 0) {
      showHeroSlide(0);
      setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showHeroSlide(currentSlide);
      }, 6000);
    }
  }

  // ===== CURRENCY FORMATTER (INR) =====
  function formatINR(amount) {
    return '₹' + amount.toLocaleString('en-IN');
  }

  // Apply to all elements with class .currency
  const currencyElements = document.querySelectorAll('.currency');
  currencyElements.forEach(element => {
    const amount = parseFloat(element.textContent.replace(/[^0-9.]/g, ''));
    if (!isNaN(amount)) {
      element.textContent = formatINR(amount);
    }
  });

  // ===== DATE FORMATTER (DD/MM/YYYY) =====
  const dateElements = document.querySelectorAll('.format-date');
  dateElements.forEach(element => {
    const dateStr = element.textContent;
    const date = new Date(dateStr);
    if (!isNaN(date)) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      element.textContent = `${day}/${month}/${year}`;
    }
  });

  // ===== ALERT AUTO-DISMISS =====
  const alerts = document.querySelectorAll('.alert[data-dismiss-time]');
  alerts.forEach(alert => {
    const dismissTime = parseInt(alert.getAttribute('data-dismiss-time'));
    setTimeout(() => {
      alert.style.opacity = '0';
      setTimeout(() => {
        alert.remove();
      }, 300);
    }, dismissTime);
  });

  // ===== TOOLTIPS =====
  const tooltips = document.querySelectorAll('[data-tooltip]');
  tooltips.forEach(element => {
    const tooltipText = element.getAttribute('data-tooltip');
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = tooltipText;
    
    element.addEventListener('mouseenter', function() {
      document.body.appendChild(tooltip);
      const rect = element.getBoundingClientRect();
      tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
      tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + window.scrollY + 'px';
      tooltip.classList.add('active');
    });

    element.addEventListener('mouseleave', function() {
      tooltip.classList.remove('active');
      setTimeout(() => {
        if (tooltip.parentNode) {
          tooltip.parentNode.removeChild(tooltip);
        }
      }, 200);
    });
  });

  // ===== INITIALIZATION LOG =====
  console.log('%cSmartBuild Construction Template', 'color: #FF9800; font-size: 20px; font-weight: bold;');
  console.log('%cAll scripts loaded successfully!', 'color: #4CAF50; font-size: 14px;');

})();

