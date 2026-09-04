/* =================================
   MOBILE NAVIGATION
================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });



/* =================================
   SCROLL REVEAL
================================= */

const animatedElements =
    document.querySelectorAll(
        ".project-card, .skill-box, .journey-card, .leadership-card, .certificate"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach(element => {

    revealObserver.observe(element);

});



/* =================================
   STAGGER PROJECT ANIMATIONS
================================= */

document
    .querySelectorAll(".project-card")
    .forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.12}s`;

    });



/* =================================
   ACTIVE NAVIGATION
================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (
            window.scrollY >= sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});



/* =================================
   PARALLAX HERO DECORATION
================================= */

const heroCircle =
    document.querySelector(".flower-circle");


document.addEventListener(
    "mousemove",
    event => {

        if (
            window.innerWidth < 900 ||
            !heroCircle
        ) {

            return;

        }


        const x =
            (window.innerWidth / 2 -
            event.clientX) / 80;


        const y =
            (window.innerHeight / 2 -
            event.clientY) / 80;


        heroCircle.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);



/* =================================
   HEART CLICK EFFECT
================================= */

document
    .querySelectorAll(
        ".heart-decoration, .banner-heart"
    )
    .forEach(heart => {

        heart.addEventListener("click", () => {

            heart.style.transform =
                "scale(1.3)";

            setTimeout(() => {

                heart.style.transform =
                    "scale(1)";

            }, 300);

        });

    });



/* =================================
   DYNAMIC YEAR
================================= */

const footerText =
    document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =
        `Designed & built with love by
        <strong>Ushaswini Allam</strong>`;

}