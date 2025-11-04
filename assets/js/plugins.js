/*
 * SmartBuild Construction Template - Plugins Init
 * Initialize AOS, Owl Carousel, Isotope, Lightbox, CounterUp
 * This file contains initialization for external plugins
 */

(function() {
  'use strict';

  // ===== AOS (Animate On Scroll) INIT =====
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      delay: 100
    });
    console.log('✓ AOS initialized');
  }

  // ===== OWL CAROUSEL INIT =====
  if (typeof jQuery !== 'undefined' && typeof jQuery.fn.owlCarousel !== 'undefined') {
    // Hero Carousel
    $('.hero-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      nav: true,
      dots: true,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 1000
    });

    // Projects Carousel
    $('.projects-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        992: { items: 3 }
      }
    });

    // Testimonials Carousel
    $('.testimonials-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 3 }
      }
    });

    // Team Carousel
    $('.team-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        992: { items: 4 }
      }
    });

    // Clients Logo Carousel
    $('.clients-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 2 },
        576: { items: 3 },
        768: { items: 4 },
        992: { items: 5 },
        1200: { items: 6 }
      }
    });

    console.log('✓ Owl Carousel initialized');
  }

  // ===== ISOTOPE (Project Filtering) INIT =====
  if (typeof Isotope !== 'undefined') {
    const projectGrid = document.querySelector('.projects-grid');
    
    if (projectGrid) {
      const iso = new Isotope(projectGrid, {
        itemSelector: '.project-item',
        layoutMode: 'fitRows',
        percentPosition: true,
        transitionDuration: '0.6s'
      });

      // Filter buttons
      const filterBtns = document.querySelectorAll('.filter-btn');
      filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const filterValue = this.getAttribute('data-filter');
          
          filterBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          
          iso.arrange({ filter: filterValue === '*' ? '*' : `.${filterValue}` });
        });
      });

      console.log('✓ Isotope initialized');
    }
  }

  // ===== LIGHTBOX/MAGNIFIC POPUP INIT =====
  if (typeof jQuery !== 'undefined' && typeof jQuery.fn.magnificPopup !== 'undefined') {
    // Image Lightbox
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      removalDelay: 300,
      mainClass: 'mfp-fade',
      image: {
        titleSrc: 'title',
        markup: '<div class="mfp-figure">'+
                '<div class="mfp-close"></div>'+
                '<div class="mfp-img"></div>'+
                '<div class="mfp-bottom-bar">'+
                  '<div class="mfp-title"></div>'+
                '</div>'+
                '</div>'
      }
    });

    // Gallery Lightbox
    $('.gallery-popup').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    // Video Popup
    $('.video-popup').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 300,
      preloader: false,
      fixedContentPos: false
    });

    // Inline Modal
    $('.inline-popup').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',
      callbacks: {
        beforeOpen: function() {
          if($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        }
      }
    });

    console.log('✓ Magnific Popup initialized');
  }

  // ===== GLightbox (Alternative Lightbox) INIT =====
  if (typeof GLightbox !== 'undefined') {
    const lightbox = GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
      onOpen: () => {
        console.log('Lightbox opened');
      }
    });

    console.log('✓ GLightbox initialized');
  }

  // ===== COUNTER UP INIT =====
  if (typeof CountUp !== 'undefined') {
    const counters = document.querySelectorAll('.counter');
    const counterOptions = {
      duration: 2.5,
      useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.'
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          const target = entry.target;
          const countValue = parseInt(target.getAttribute('data-count'));
          
          const counter = new CountUp(target, countValue, counterOptions);
          if (!counter.error) {
            counter.start();
            target.classList.add('counted');
          } else {
            console.error(counter.error);
          }
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
      counterObserver.observe(counter);
    });

    console.log('✓ CounterUp initialized');
  }

  // ===== WAYPOINTS INIT =====
  if (typeof Waypoint !== 'undefined') {
    $('.stats-box').waypoint(function() {
      $('.counter').each(function() {
        const $this = $(this);
        if (!$this.hasClass('counted')) {
          const countTo = $this.attr('data-count');
          $({ countNum: 0 }).animate({
            countNum: countTo
          }, {
            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              $this.addClass('counted');
            }
          });
        }
      });
    }, { offset: '75%', triggerOnce: true });

    console.log('✓ Waypoints initialized');
  }

  // ===== PARALLAX INIT =====
  if (typeof jarallax !== 'undefined') {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5
    });

    console.log('✓ Jarallax (Parallax) initialized');
  }

  // ===== TYPED.JS (Text Animation) INIT =====
  if (typeof Typed !== 'undefined') {
    const typedElements = document.querySelectorAll('.typed-text');
    
    typedElements.forEach(element => {
      const strings = element.getAttribute('data-strings').split(',');
      new Typed(element, {
        strings: strings,
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
        cursorChar: '|',
        contentType: 'text'
      });
    });

    console.log('✓ Typed.js initialized');
  }

  // ===== SWIPER INIT (Alternative Slider) =====
  if (typeof Swiper !== 'undefined') {
    // Hero Swiper
    const heroSwiper = new Swiper('.hero-swiper', {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      }
    });

    // Projects Swiper
    const projectsSwiper = new Swiper('.projects-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        576: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      }
    });

    console.log('✓ Swiper initialized');
  }

  // ===== PARTICLES.JS INIT =====
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 0.5,
          random: false
        },
        size: {
          value: 3,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        }
      },
      retina_detect: true
    });

    console.log('✓ Particles.js initialized');
  }

  // ===== BOOTSTRAP TOOLTIP INIT =====
  if (typeof bootstrap !== 'undefined') {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    console.log('✓ Bootstrap Tooltips initialized');
  }

  // ===== BOOTSTRAP POPOVER INIT =====
  if (typeof bootstrap !== 'undefined') {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });

    console.log('✓ Bootstrap Popovers initialized');
  }

  // ===== SELECT2 INIT (Enhanced Select) =====
  if (typeof jQuery !== 'undefined' && typeof jQuery.fn.select2 !== 'undefined') {
    $('.select2').select2({
      placeholder: 'Select an option',
      allowClear: true,
      width: '100%'
    });

    console.log('✓ Select2 initialized');
  }

  // ===== FLATPICKR (Date Picker) INIT =====
  if (typeof flatpickr !== 'undefined') {
    flatpickr('.datepicker', {
      dateFormat: 'd/m/Y', // Indian date format
      allowInput: true,
      minDate: 'today'
    });

    flatpickr('.datetimepicker', {
      enableTime: true,
      dateFormat: 'd/m/Y H:i',
      time_24hr: true
    });

    console.log('✓ Flatpickr initialized');
  }

  // ===== SIMPLEBAR (Custom Scrollbar) INIT =====
  if (typeof SimpleBar !== 'undefined') {
    document.querySelectorAll('.simplebar').forEach(element => {
      new SimpleBar(element, {
        autoHide: false
      });
    });

    console.log('✓ SimpleBar initialized');
  }

  // ===== RELLAX (Parallax) INIT =====
  if (typeof Rellax !== 'undefined') {
    const rellax = new Rellax('.rellax', {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    console.log('✓ Rellax initialized');
  }

  // ===== SPLIDE (Slider) INIT =====
  if (typeof Splide !== 'undefined') {
    const splideElements = document.querySelectorAll('.splide');
    
    splideElements.forEach(element => {
      new Splide(element, {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '2rem',
        pagination: false,
        arrows: true,
        breakpoints: {
          768: {
            perPage: 2
          },
          576: {
            perPage: 1
          }
        }
      }).mount();
    });

    console.log('✓ Splide initialized');
  }

  // ===== MASONRY INIT =====
  if (typeof Masonry !== 'undefined') {
    const grid = document.querySelector('.masonry-grid');
    
    if (grid) {
      const msnry = new Masonry(grid, {
        itemSelector: '.masonry-item',
        columnWidth: '.masonry-sizer',
        percentPosition: true,
        gutter: 30
      });

      console.log('✓ Masonry initialized');
    }
  }

  // ===== RECAPTCHA CALLBACK =====
  window.onRecaptchaSuccess = function(token) {
    console.log('reCAPTCHA verified:', token);
    // Enable submit button
    const submitBtn = document.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
    }
  };

  window.onRecaptchaExpired = function() {
    console.log('reCAPTCHA expired');
    // Disable submit button
    const submitBtn = document.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
    }
  };

  // ===== GOOGLE MAPS INIT =====
  window.initMap = function() {
    // Default location: Chennai, India
    const location = { lat: 13.0827, lng: 80.2707 };
    
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: location,
      styles: [
        {
          featureType: 'all',
          elementType: 'geometry.fill',
          stylers: [{ color: '#F5F5F5' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#E0E0E0' }]
        }
      ]
    });

    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'SmartBuild Constructions',
      animation: google.maps.Animation.DROP
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="padding: 10px;">
          <h4 style="margin: 0 0 10px 0; color: #FF9800;">SmartBuild Constructions</h4>
          <p style="margin: 0; color: #757575;">21, Nehru Nagar, Chennai</p>
          <p style="margin: 0; color: #757575;">Tamil Nadu 600042</p>
          <p style="margin: 10px 0 0 0;"><a href="tel:+919876543210" style="color: #FF9800;">+91 98765 43210</a></p>
        </div>
      `
    });

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });

    console.log('✓ Google Maps initialized');
  };

  // ===== CHART.JS INIT (for Dashboard) =====
  if (typeof Chart !== 'undefined') {
    const ctx = document.getElementById('projectsChart');
    
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Projects Completed',
            data: [12, 19, 15, 25, 22, 30],
            backgroundColor: '#FF9800',
            borderColor: '#F57C00',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      console.log('✓ Chart.js initialized');
    }
  }

  console.log('%cAll plugins initialized successfully!', 'color: #4CAF50; font-weight: bold;');

})();

