// --- Custom Cursor Logic ---
var crsr = document.querySelector("#cursor");
var blurr = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets) {
    // Only run if the cursor element exists (won't on mobile)
    if (crsr) {
        crsr.style.left = dets.x + 30 + "px";
        crsr.style.top = dets.y + "px";
    }
    if (blurr) {
        blurr.style.left = dets.x - 250 + "px";
        blurr.style.top = dets.y - 250 + "px";
    }
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        if (crsr) {
            crsr.style.scale = 2;
            crsr.style.border = "1px solid #fff";
            crsr.style.backgroundColor = "transparent";
        }
    });
    elem.addEventListener("mouseleave", function() {
        if (crsr) {
            crsr.style.scale = 1;
            crsr.style.border = "0px solid #95c11e";
            crsr.style.backgroundColor = "#95c11e";
        }
    });
});

// --- Hamburger Menu Logic ---
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('active');
    
    // Hamburger Animation
    hamburger.classList.toggle('toggle');
});

// --- GSAP Animations ---
gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
});

gsap.from("#about-us img, #about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
});

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3
    }
});

// --- Intersection Observer for card animations (Reliable Fix) ---
const cards = document.querySelectorAll('.card');

const cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // If the card is in the viewport
        if (entry.isIntersecting) {
            // Add the 'is-visible' class to trigger the CSS transition
            entry.target.classList.add('is-visible');
            // Stop observing the card once it's visible to save resources
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the card is visible
});

// Tell the observer to watch each card
cards.forEach(card => {
    cardObserver.observe(card);
});
