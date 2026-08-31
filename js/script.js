/* =========================================================
   VIDYASHREE M — PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   PROJECT FILTER
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedFilter =
            button.dataset.filter;


        /* Active button */

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        /* Filter projects */

        projectCards.forEach(card => {

            const categories =
                card.dataset.category
                    .toLowerCase()
                    .split(" ");


            const shouldShow =
                selectedFilter === "all" ||
                categories.includes(selectedFilter);


            if (shouldShow) {

                card.classList.remove("hidden");

                card.style.opacity = "0";
                card.style.transform =
                    "translateY(12px)";


                requestAnimationFrame(() => {

                    card.style.opacity = "1";
                    card.style.transform =
                        "translateY(0)";

                });

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuButton =
    document.querySelector(".mobile-menu-btn");

const mobileMenu =
    document.querySelector(".mobile-menu");


mobileMenuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

    document.body.classList.toggle(
        "menu-open"
    );

});


/* Close menu after clicking */

const mobileLinks =
    document.querySelectorAll(
        ".mobile-menu a"
    );


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        document.body.classList.remove(
            "menu-open"
        );

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

                    entry.target.classList.add(
                        "visible"
                    );

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
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".desktop-nav a"
    );


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                const currentId =
                    entry.target.id;


                navLinks.forEach(link => {

                    const linkTarget =
                        link.getAttribute("href")
                            .replace("#", "");


                    if (linkTarget === currentId) {

                        link.classList.add(
                            "active"
                        );

                    } else {

                        link.classList.remove(
                            "active"
                        );

                    }

                });

            });

        },
        {
            threshold: 0.35
        }
    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =========================================================
   BACK TO TOP
========================================================= */

const backTop =
    document.getElementById("backTop");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 600) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }
);


backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   MOUSE BACKGROUND INTERACTION
========================================================= */

const glowOne =
    document.querySelector(".glow-one");

const glowTwo =
    document.querySelector(".glow-two");


window.addEventListener(
    "mousemove",
    event => {

        const x =
            (event.clientX /
                window.innerWidth -
                0.5) * 30;

        const y =
            (event.clientY /
                window.innerHeight -
                0.5) * 30;


        glowOne.style.transform =
            `translate(${x}px, ${y}px)`;


        glowTwo.style.transform =
            `translate(${-x}px, ${-y}px)`;

    }
);


/* =========================================================
   PROJECT HOVER DEPTH
========================================================= */

projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) /
                    centerY) * -1.2;


            const rotateY =
                ((x - centerX) /
                    centerX) * 1.2;


            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-3px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";

        }
    );

});


/* =========================================================
   YEAR
========================================================= */

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();


/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        event => {

            const targetId =
                link.getAttribute("href");


            if (targetId === "#") {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* =========================================================
   INITIAL LOAD
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
