/*
 * SmartBuild Construction Template - AJAX Forms
 * Contact and Quote forms with no page reload
 */

(function() {
  'use strict';

  // ===== AJAX CONTACT FORM =====
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;

      // Disable button and show loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner"></span> Sending...';

      // Get form values
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };

      // Validate Indian phone number
      const phoneRegex = /^\+91\s\d{5}\s\d{5}$/;
      if (!phoneRegex.test(data.phone)) {
        showAlert('error', 'Please enter a valid Indian phone number (+91 XXXXX XXXXX)');
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
        return;
      }

      // Simulate AJAX request (replace with actual endpoint)
      // In production, replace this with:
      // fetch('/api/contact', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } })

      setTimeout(() => {
        // Simulate successful response
        showAlert('success', 'Thank you! Your message has been sent successfully. We will get back to you soon.');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;

        // Optional: Close modal if form is in modal
        const modal = contactForm.closest('.modal');
        if (modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      }, 1500);

      /* 
      // PRODUCTION CODE - Uncomment and configure endpoint
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          showAlert('success', 'Thank you! Your message has been sent successfully.');
          contactForm.reset();
        } else {
          showAlert('error', 'Sorry, there was an error sending your message. Please try again.');
        }
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      })
      .catch(error => {
        console.error('Error:', error);
        showAlert('error', 'Sorry, there was an error sending your message. Please try again.');
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      });
      */
    });
  }

  // ===== AJAX QUOTE FORM =====
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(quoteForm);
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner"></span> Submitting...';

      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        projectType: formData.get('projectType'),
        budget: formData.get('budget'),
        location: formData.get('location'),
        area: formData.get('area'),
        timeline: formData.get('timeline'),
        description: formData.get('description')
      };

      // Validate phone number
      const phoneRegex = /^\+91\s\d{5}\s\d{5}$/;
      if (!phoneRegex.test(data.phone)) {
        showAlert('error', 'Please enter a valid Indian phone number (+91 XXXXX XXXXX)');
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
        return;
      }

      // Simulate AJAX request
      setTimeout(() => {
        showAlert('success', 'Quote request submitted successfully! Our team will contact you within 24 hours.');
        quoteForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;

        // Redirect to thank you page after 2 seconds
        setTimeout(() => {
          // window.location.href = 'index.html#contact';
        }, 2000);
      }, 1500);

      /*
      // PRODUCTION CODE
      fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          showAlert('success', 'Quote request submitted successfully! Our team will contact you within 24 hours.');
          quoteForm.reset();
          setTimeout(() => {
            window.location.href = 'index.html#contact';
          }, 2000);
        } else {
          showAlert('error', 'Sorry, there was an error submitting your quote request. Please try again.');
        }
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      })
      .catch(error => {
        console.error('Error:', error);
        showAlert('error', 'Sorry, there was an error submitting your quote request. Please try again.');
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      });
      */
    });
  }

  // ===== NEWSLETTER SUBSCRIPTION =====
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(newsletterForm);
      const submitBtn = newsletterForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner"></span> Subscribing...';

      const data = {
        email: formData.get('email')
      };

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        showAlert('error', 'Please enter a valid email address');
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
        return;
      }

      setTimeout(() => {
        showAlert('success', 'Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }, 1000);
    });
  }

  // ===== LOGIN FORM =====
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(loginForm);
      const submitBtn = loginForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner"></span> Logging in...';

      const data = {
        email: formData.get('email'),
        password: formData.get('password'),
        remember: formData.get('remember') === 'on'
      };

      // Simulate login (replace with actual authentication)
      setTimeout(() => {
        // Mock successful login
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', data.email);
        
        showAlert('success', 'Login successful! Redirecting to dashboard...');
        
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1500);
      }, 1000);

      /*
      // PRODUCTION CODE
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          localStorage.setItem('authToken', result.token);
          localStorage.setItem('isLoggedIn', 'true');
          showAlert('success', 'Login successful! Redirecting...');
          setTimeout(() => {
            window.location.href = 'dashboard.html';
          }, 1500);
        } else {
          showAlert('error', 'Invalid email or password. Please try again.');
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        showAlert('error', 'Login failed. Please try again.');
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      });
      */
    });
  }

  // ===== LOGOUT FUNCTIONALITY =====
  const logoutBtns = document.querySelectorAll('.logout-btn');
  logoutBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('authToken');
        localStorage.removeItem('userEmail');
        
        showAlert('success', 'Logged out successfully!');
        
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1000);
      }
    });
  });

  // ===== CHECK AUTH STATUS (FOR DASHBOARD) =====
  const protectedPages = ['dashboard.html'];
  const currentPage = window.location.pathname.split('/').pop();
  
  if (protectedPages.includes(currentPage)) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      window.location.href = 'login.html';
    }
  }

  // ===== ALERT/NOTIFICATION SYSTEM =====
  function showAlert(type, message) {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.custom-alert');
    existingAlerts.forEach(alert => alert.remove());

    // Create alert element
    const alert = document.createElement('div');
    alert.className = `custom-alert alert-${type}`;
    
    const icon = type === 'success' ? '✓' : '✕';
    const bgColor = type === 'success' ? '#4CAF50' : '#F44336';
    
    alert.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
      ">
        <span style="font-size: 1.5rem; font-weight: bold;">${icon}</span>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" style="
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0;
          margin-left: auto;
        ">&times;</button>
      </div>
    `;

    document.body.appendChild(alert);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      alert.style.opacity = '0';
      alert.style.transform = 'translateX(100%)';
      setTimeout(() => {
        alert.remove();
      }, 300);
    }, 5000);
  }

  // ===== BUDGET RANGE SLIDER =====
  const budgetRange = document.getElementById('budgetRange');
  const budgetValue = document.getElementById('budgetValue');
  
  if (budgetRange && budgetValue) {
    budgetRange.addEventListener('input', function() {
      const value = parseInt(this.value);
      budgetValue.textContent = '₹' + value.toLocaleString('en-IN') + ' Lakhs';
    });
  }

  // ===== AREA CALCULATOR =====
  const areaLength = document.getElementById('areaLength');
  const areaWidth = document.getElementById('areaWidth');
  const totalArea = document.getElementById('totalArea');

  function calculateArea() {
    if (areaLength && areaWidth && totalArea) {
      const length = parseFloat(areaLength.value) || 0;
      const width = parseFloat(areaWidth.value) || 0;
      const area = length * width;
      totalArea.textContent = area.toFixed(2) + ' sq.ft';
    }
  }

  if (areaLength && areaWidth) {
    areaLength.addEventListener('input', calculateArea);
    areaWidth.addEventListener('input', calculateArea);
  }

  // ===== FILE UPLOAD PREVIEW =====
  const fileInputs = document.querySelectorAll('input[type="file"]');
  fileInputs.forEach(input => {
    input.addEventListener('change', function(e) {
      const files = e.target.files;
      const previewContainer = document.getElementById(this.id + 'Preview');
      
      if (previewContainer) {
        previewContainer.innerHTML = '';
        
        Array.from(files).forEach(file => {
          const fileInfo = document.createElement('div');
          fileInfo.className = 'file-preview-item';
          fileInfo.textContent = `📎 ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
          previewContainer.appendChild(fileInfo);
        });
      }
    });
  });

  // ===== FORM AUTO-SAVE (DRAFT) =====
  const autoSaveForms = document.querySelectorAll('[data-autosave]');
  autoSaveForms.forEach(form => {
    const formId = form.id;
    
    // Load saved data
    const savedData = localStorage.getItem(`form_${formId}`);
    if (savedData) {
      const data = JSON.parse(savedData);
      Object.keys(data).forEach(key => {
        const input = form.querySelector(`[name="${key}"]`);
        if (input) {
          input.value = data[key];
        }
      });
    }

    // Save on input
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        localStorage.setItem(`form_${formId}`, JSON.stringify(data));
      });
    });

    // Clear on submit
    form.addEventListener('submit', () => {
      localStorage.removeItem(`form_${formId}`);
    });
  });

  console.log('AJAX forms initialized successfully!');

})();

