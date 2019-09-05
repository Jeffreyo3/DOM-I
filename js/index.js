const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo //

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav

const nav = document.querySelectorAll('nav a');
nav[0].textContent = 'Services';
nav[1].textContent = 'Product';
nav[2].textContent = 'Vision';
nav[3].textContent = 'Features';
nav[4].textContent = 'About';
nav[5].textContent = 'Contact';

  // Nav color change
      // const navColor = document.querySelectorAll('nav a');
      // navColor[0].style.color = 'green';
      // navColor[1].style.color = 'green';
      // navColor[2].style.color = 'green';
      // navColor[3].style.color = 'green';
      // navColor[4].style.color = 'green';
      // navColor[5].style.color = 'green';
function changeColor(className, newColor) {
  var elems = document.querySelectorAll(className);
  var index = 0, length = elems.length;
  for ( ; index < length; index++) {
      elems[index].style.color = newColor;
  }
};

//append new nav item
const newNavApp = document.createElement('a');
newNavApp.href = '#';
newNavApp.textContent = '¡Adjuntar!';
const newNavItemEnd = document.querySelector('nav');
newNavItemEnd.appendChild(newNavApp);

//prepend new nav item
const newNavPre = document.createElement('a');
newNavPre.href = '#';
newNavPre.textContent = '¡Anteponer!';
const newNavItemStart = document.querySelector('nav');
newNavItemStart.prepend(newNavPre);

  // Call function after appendChild & prepend to change color of all nav items
changeColor('nav a', 'green');

// CTA //

const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = 'DOM Is Awesome';

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = 'Get Started';

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'img/header-img.png';


// Main Content //

const mainTextH = document.querySelectorAll('.text-content h4');
mainTextH[0].textContent = 'Features';
mainTextH[1].textContent = 'About';
mainTextH[2].textContent = 'Services';
mainTextH[3].textContent = 'Product';
mainTextH[4].textContent = 'Vision';

const mainTextP = document.querySelectorAll('.text-content p');
// Top Content
mainTextP[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainTextP[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// Middle Content
const middleImg = document.querySelector('#middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

// Bottom Content
mainTextP[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainTextP[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainTextP[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';


// Contact //

const contactH = document.querySelector('.contact h4');
contactH.textContent = 'Contact';

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = '123 Way 456 Street Somewhere, USA';
contactP[1].textContent = '1 (888) 888-8888';
contactP[2].textContent = 'sales@greatidea.io';


// Footer //

const footP = document.querySelector('footer p');
footP.textContent = 'Copyright Great Idea! 2018';