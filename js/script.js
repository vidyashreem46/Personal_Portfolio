/* =========================================================
   VIDYASHREE M — PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        mobileNav.classList.toggle("open");

    });

}


/* Close mobile menu after clicking */

const mobileLinks = document.querySelectorAll(".mobile-nav a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileNav.classList.remove("open");

    });

});


/* =========================================================
   PROJECT FILTER
========================================================= */

const filterButtons =
    document.querySelectorAll(".filters button");

const projects =
    document.querySelectorAll(".project");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active state */

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        /* Add active state */

        button.classList.add("active");


        const selectedFilter =
            button.dataset.filter;


        projects.forEach(project => {

            const categories =
                project.dataset.category.split(" ");


            if (
                selectedFilter === "all" ||
                categories.includes(selectedFilter)
            ) {

                project.classList.remove("hidden");

            } else {

                project.classList.add("hidden");

            }

        });

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   SUBTLE HERO PARALLAX
========================================================= */

const heroArt =
    document.querySelector(".hero-art");


if (heroArt) {

    window.addEventListener("mousemove", event => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 10;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 10;


        heroArt.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}
