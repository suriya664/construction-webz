╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║             SMARTBUILD CONSTRUCTION TEMPLATE                                  ║
║             Version 1.0.0 - October 2025                                     ║
║             100% Original Design - NOT Copied                                 ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝

═══════════════════════════════════════════════════════════════════════════════
📋 TABLE OF CONTENTS
═══════════════════════════════════════════════════════════════════════════════

1. Introduction
2. Features
3. File Structure
4. Installation
5. Usage
6. Customization
7. Indian Localization
8. Browser Support
9. Credits
10. License
11. Support

═══════════════════════════════════════════════════════════════════════════════
🏗️ 1. INTRODUCTION
═══════════════════════════════════════════════════════════════════════════════

SmartBuild Construction Template is a modern, responsive, and professional
front-end HTML template designed specifically for:

✓ Construction Companies
✓ Architecture & Design Studios
✓ Interior Designers
✓ Real Estate Developers
✓ Infrastructure Firms
✓ Civil Engineering Consultants

This template is 100% ORIGINAL and NOT copied from ThemeForest, ThemeMonster,
or any other marketplace. It's designed with Indian business needs in mind.

═══════════════════════════════════════════════════════════════════════════════
✨ 2. FEATURES
═══════════════════════════════════════════════════════════════════════════════

TECHNICAL FEATURES:
------------------
✓ Built with HTML5, CSS3, Bootstrap 5.x, and JavaScript (ES6)
✓ AJAX-powered quote and contact forms (no page reload)
✓ Fully responsive - optimized for desktop, tablet, and mobile
✓ Isotope + Lightbox gallery for projects
✓ Counter & progress animations for achievements
✓ Google Maps integration for location display
✓ SEO-optimized and W3C validated
✓ Dark/Light mode support
✓ RTL (Right-to-Left) support for Arabic, Hebrew, Urdu
✓ Fast loading with lazy images and compressed assets
✓ Cross-browser compatibility
✓ Reusable UI components: buttons, modals, accordions, pricing tables, tabs
✓ Developer-friendly code structure and documentation

DESIGN FEATURES:
---------------
✓ Hero banner with project slider and CTA buttons
✓ Services cards (construction, design, consulting, planning)
✓ Projects gallery with filter buttons (commercial/residential/interior)
✓ Stats counter for "Years of Experience", "Projects Completed", etc.
✓ Testimonials carousel (clients and partners)
✓ Team section with hover social icons
✓ Quote form with budget, project type, and timeline fields
✓ Contact section with embedded Google Map
✓ Clean typography, proper spacing, and consistent layout grid
✓ Modern color scheme (Orange #FF9800, Blue #1A237E, Gold #FFC107)

═══════════════════════════════════════════════════════════════════════════════
📁 3. FILE STRUCTURE
═══════════════════════════════════════════════════════════════════════════════

construction-template/
│
├── assets/
│   ├── css/
│   │   ├── style.css              → Core typography, colors, buttons
│   │   ├── layout.css             → Padding, margins, alignment helpers
│   │   ├── responsive.css         → Responsive breakpoints
│   │   ├── dark.css               → Dark mode styles
│   │   └── rtl.css                → RTL language support
│   │
│   ├── js/
│   │   ├── main.js                → Core interactions
│   │   ├── ajax.js                → AJAX contact/quote forms
│   │   └── plugins.js             → Plugin initializations
│   │
│   ├── img/                       → Place your images here
│   │   ├── projects/
│   │   ├── team/
│   │   ├── equipment/
│   │   ├── clients/
│   │   └── banners/
│   │
│   └── fonts/                     → Custom fonts (if any)
│
├── pages/
│   ├── index.html                 → Home page
│   ├── about.html                 → About company
│   ├── services.html              → Services listing
│   ├── service-details.html       → Single service
│   ├── projects.html              → Portfolio gallery
│   ├── project-details.html       → Project details
│   ├── team.html                  → Team members
│   ├── pricing.html               → Pricing packages
│   ├── faq.html                   → FAQs
│   ├── testimonials.html          → Client reviews
│   ├── blog.html                  → Blog listing
│   ├── blog-details.html          → Single blog post
│   ├── contact.html               → Contact form + map
│   ├── quote.html                 → Quote request form
│   ├── login.html                 → Admin login
│   ├── dashboard.html             → Admin dashboard
│   ├── coming-soon.html           → Coming soon page
│   ├── 404.html                   → Error page
│   └── privacy-policy.html        → Privacy policy
│
├── partials/
│   ├── header.html                → Navigation bar
│   ├── footer.html                → Footer section
│   ├── modals.html                → Modal dialogs
│   └── sidebar.html               → Dashboard sidebar
│
├── docs/
│   ├── documentation.html         → Setup guide
│   └── changelog.txt              → Version history
│
└── README.txt                     → This file

═══════════════════════════════════════════════════════════════════════════════
⚙️ 4. INSTALLATION
═══════════════════════════════════════════════════════════════════════════════

STEP 1: EXTRACT FILES
---------------------
Extract all files to your project directory.

STEP 2: FOLDER STRUCTURE
-----------------------
Ensure the folder structure remains intact.

STEP 3: OPEN IN BROWSER
-----------------------
Open pages/index.html in your web browser to view the template.

STEP 4: CUSTOMIZE
----------------
Edit HTML, CSS, and JavaScript files according to your needs.

STEP 5: DEPLOYMENT
-----------------
Upload all files to your web server via FTP or hosting control panel.

GITHUB DEPLOYMENT:
-----------------
1. Initialize git repository: git init
2. Add files: git add .
3. Commit: git commit -m "Initial commit"
4. Create repository on GitHub
5. Add remote: git remote add origin <your-repo-url>
6. Push: git push -u origin main

═══════════════════════════════════════════════════════════════════════════════
📖 5. USAGE
═══════════════════════════════════════════════════════════════════════════════

REPLACING IMAGES:
----------------
- Place your images in assets/img/ folder
- Update image URLs in HTML files
- Recommended sizes:
  * Hero banners: 1920x1080px
  * Project images: 800x600px (16:9 or 4:3 ratio)
  * Team photos: 400x400px (square)
  * Client logos: 200x100px

ADDING PROJECTS:
---------------
1. Open projects.html
2. Copy a project card HTML block
3. Update image, title, description, and link
4. Add appropriate class (residential/commercial/interior)

CONTACT FORM:
------------
- Form submissions are handled by ajax.js
- By default, it's a demo (no actual email sending)
- To make it functional:
  * Uncomment production code in ajax.js
  * Set up backend endpoint (PHP, Node.js, etc.)
  * Update API URLs

GOOGLE MAPS:
-----------
- Update map coordinates in partials/footer.html or contact.html
- Get API key from Google Cloud Console
- Replace coordinates with your location:
  { lat: 13.0827, lng: 80.2707 } ← Chennai coordinates

═══════════════════════════════════════════════════════════════════════════════
🎨 6. CUSTOMIZATION
═══════════════════════════════════════════════════════════════════════════════

COLORS:
------
Edit CSS variables in assets/css/style.css:

:root {
  --primary-color: #FF9800;      ← Change primary color
  --secondary-color: #1A237E;    ← Change secondary color
  --accent-color: #FFC107;       ← Change accent color
}

FONTS:
-----
Update Google Fonts import in HTML files:
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap">

Update CSS variables in style.css:
--font-primary: 'YourFont', sans-serif;

LOGO:
----
Replace the emoji logo (🏗️) in header.html with:
<img src="../assets/img/logo.png" alt="Logo">

═══════════════════════════════════════════════════════════════════════════════
🇮🇳 7. INDIAN LOCALIZATION
═══════════════════════════════════════════════════════════════════════════════

CURRENCY:
--------
₹ 25,00,000 (Lakhs format)
₹ 2,50,00,000 (Crores format)

PHONE NUMBERS:
-------------
+91 98765 43210 (Mobile)
+91 44 2345 6789 (Landline with STD code)
1800 425 1234 (Toll-free)

DATE FORMAT:
-----------
14/10/2025 (DD/MM/YYYY)

UNITS:
-----
- Area: sq.ft, sq.m (square feet/metres)
- Distance: km, metres
- Weight: kg, tons

ADDRESS FORMAT:
--------------
Company Name
Building No., Street Name
City, State PIN
India

═══════════════════════════════════════════════════════════════════════════════
🌐 8. BROWSER SUPPORT
═══════════════════════════════════════════════════════════════════════════════

✓ Chrome (latest)
✓ Firefox (latest)
✓ Safari (latest)
✓ Edge (latest)
✓ Opera (latest)
✓ Mobile browsers (iOS Safari, Chrome Mobile)

═══════════════════════════════════════════════════════════════════════════════
👥 9. CREDITS
═══════════════════════════════════════════════════════════════════════════════

FRAMEWORKS & LIBRARIES:
----------------------
- Bootstrap 5.x (MIT License)
- Font Awesome 6.x (Free License)
- AOS (Animate On Scroll) (MIT License)
- jQuery 3.x (MIT License)

FONTS:
-----
- Google Fonts: Poppins, Montserrat, Roboto (Open Font License)

IMAGES:
------
- Unsplash (Free to use)
- Pexels (Free to use)
- Pixabay (Free to use)

Note: Demo images are from free stock photo websites. Replace with your own
images for production use.

═══════════════════════════════════════════════════════════════════════════════
📜 10. LICENSE
═══════════════════════════════════════════════════════════════════════════════

MIT License

Copyright (c) 2025 SmartBuild Construction Template

Permission is hereby granted, free of charge, to any person obtaining a copy
of this template to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the template.

THE TEMPLATE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.

═══════════════════════════════════════════════════════════════════════════════
📞 11. SUPPORT
═══════════════════════════════════════════════════════════════════════════════

For questions, issues, or feature requests:

- Email: support@smartbuild.in
- Documentation: See docs/documentation.html
- GitHub: github.com/your-repo/construction-template

═══════════════════════════════════════════════════════════════════════════════

Thank you for using SmartBuild Construction Template!

This is an ORIGINAL DESIGN created specifically for the Indian construction
industry. NOT copied from ThemeForest, ThemeMonster, or any other marketplace.

Perfect for uploading to GitHub as your own portfolio project.

═══════════════════════════════════════════════════════════════════════════════

