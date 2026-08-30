/* =========================================================
   VIDYASHREE M — PORTFOLIO JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projectCards =
        document.querySelectorAll(".project-card");

    const topButton =
        document.getElementById("topBtn");

    const menuToggle =
        document.getElementById("menuToggle");

    const topbar =
        document.querySelector(".topbar");

    const cursorGlow =
        document.querySelector(".cursor-glow");

    const navLinks =
        document.querySelectorAll(".topbar nav a");


    /* =====================================================
       PROJECT FILTERING
    ===================================================== */

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedFilter =
                button.dataset.filter;


            /* Active button */

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");


            /* Filter cards */

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

                    requestAnimationFrame(() => {

                        card.style.opacity = "0";
                        card.style.transform =
                            "translateY(12px)";

                        requestAnimationFrame(() => {

                            card.style.opacity = "1";
                            card.style.transform =
                                "translateY(0)";

                        });

                    });

                } else {

                    card.classList.add("hidden");

                }

            });

        });

    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuToggle) {

        menuToggle.addEventListener("click", () => {

            topbar.classList.toggle("menu-open");

        });

    }


    /* Close mobile menu after navigation */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            topbar.classList.remove("menu-open");

        });

    });


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    document.querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
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

            });

        });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const currentId =
                            entry.target.id;

                        navLinks.forEach(link => {

                            link.classList.remove("active");

                            if (
                                link.getAttribute("href") ===
                                `#${currentId}`
                            ) {

                                link.classList.add("active");

                            }

                        });

                    }

                });

            },
            {
                rootMargin:
                    "-30% 0px -60% 0px"
            }
        );


    sections.forEach(section => {

        observer.observe(section);

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

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
                threshold: 0.1
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 600) {

                topButton.classList.add("show");

            } else {

                topButton.classList.remove("show");

            }

        },
        { passive: true }
    );


    if (topButton) {

        topButton.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       CURSOR BACKGROUND INTERACTION
    ===================================================== */

    if (
        cursorGlow &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        window.addEventListener(
            "mousemove",
            event => {

                cursorGlow.style.left =
                    `${event.clientX}px`;

                cursorGlow.style.top =
                    `${event.clientY}px`;

            },
            { passive: true }
        );

    }


    /* =====================================================
       PROJECT CARD HOVER EFFECT
    ===================================================== */

    projectCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                if (
                    !window.matchMedia(
                        "(pointer: fine)"
                    ).matches
                ) {
                    return;
                }

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                const rotateX =
                    ((y / rect.height) - 0.5) * -2;

                const rotateY =
                    ((x / rect.width) - 0.5) * 2;


                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "perspective(900px) rotateX(0) rotateY(0)";

            }
        );

    });


    /* =====================================================
       HERO ORBIT PARALLAX
    ===================================================== */

    const heroVisual =
        document.querySelector(".hero-visual");


    if (
        heroVisual &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        heroVisual.addEventListener(
            "mousemove",
            event => {

                const rect =
                    heroVisual.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left) /
                    rect.width - 0.5;

                const y =
                    (event.clientY - rect.top) /
                    rect.height - 0.5;


                const orbits =
                    heroVisual.querySelectorAll(
                        ".visual-orbit"
                    );


                orbits.forEach(
                    (orbit, index) => {

                        const strength =
                            (index + 1) * 7;

                        orbit.style.transform =
                            `translate(
                                ${x * strength}px,
                                ${y * strength}px
                            )
                            rotate(${index * 15 - 20}deg)`;

                    }
                );

            }
        );

    }


    /* =====================================================
       RESUME CHECK
    ===================================================== */

    const resumeLink =
        document.querySelector(
            'a[href="assets/resume.pdf"]'
        );


    if (resumeLink) {

        resumeLink.addEventListener(
            "click",
            () => {

                console.log(
                    "Opening resume..."
                );

            }
        );

    }


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    document.querySelectorAll(".reveal")
        .forEach(element => {

            if (
                element.getBoundingClientRect().top <
                window.innerHeight
            ) {

                element.classList.add("visible");

            }

        });

});
