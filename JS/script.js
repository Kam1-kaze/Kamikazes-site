const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  // Loop through sections to find which one is in view
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  // Remove 'active' from all, then add to current
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});




const menuToggle = document.getElementById('menu-toggle'); 
const navLinks2 = document.getElementById('nav-links');

// Handle menu open/close toggle
menuToggle.addEventListener('click', () => {
  navLinks2.classList.toggle('open');

  // Toggle icons between bars and X
  const icon = menuToggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Close the menu when a link is clicked
const links = navLinks2.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks2.classList.remove('open');
    menuToggle.querySelector('i').classList.add('fa-bars');
    menuToggle.querySelector('i').classList.remove('fa-times');
  });
});




const names = ["SOCHIMA", "AUSTIN", "NNAMANI"];
const textElement = document.getElementById("typing-text");

let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const backspaceSpeed = 100;
const pauseTime = 1200;

function typeEffect() {
    const currentName = names[nameIndex];
    textElement.textContent = currentName.substring(0, charIndex);

    if (!isDeleting && charIndex < currentName.length) {
        charIndex++;
        setTimeout(typeEffect, typingSpeed);
    }

    else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, backspaceSpeed);
    }

    else {
        if (!isDeleting) {
            isDeleting = true;
            setTimeout(typeEffect, pauseTime);
        }
        
        else {
            isDeleting = false;
            nameIndex = (nameIndex + 1) % names.length;
            setTimeout(typeEffect, typingSpeed);
        }
    }
    }

typeEffect();


document.addEventListener("DOMContentLoaded", function() {
    (function() {
        emailjs.init("P21wybbjxjAVQnXTw");
    })();

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_echogrid', 'contact_form', this)
        .then(() => {
            alert('Message sent successfully!');
            form.reset();
        }, (error) => {
            console.error('FAILED...', error);
            alert('Something went wrong. Try again.');
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
