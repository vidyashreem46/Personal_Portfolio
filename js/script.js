/* ==================================================
   VIDYASHREE M — PORTFOLIO INTERACTIONS
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ================================================
       PROJECT FILTERING
       ================================================ */

    const filterButtons = document.querySelectorAll(".filter");
    const projects = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedFilter = button.dataset.filter;

            /* Active button */

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");


            /* Filter projects */

            projects.forEach(project => {

                const categories =
                    project.dataset.category.split(" ");

                const shouldShow =
                    selectedFilter === "all" ||
                    categories.includes(selectedFilter);


                if (shouldShow) {

                    project.classList.remove("hidden");

                    project.animate(
                        [
                            {
                                opacity: 0,
                                transform: "translateY(15px)"
                            },
                            {
                                opacity: 1,
                                transform: "translateY(0)"
                            }
                        ],
                        {
                            duration: 350,
                            easing: "ease-out"
                        }
                    );

                } else {

                    project.classList.add("hidden");

                }

            });

        });

    });


    /* ================================================
       SCROLL REVEAL
       ================================================ */

    const revealElements = document.querySelectorAll(
        ".project, .skill-column, .experience-card, .about-copy"
    );

    const revealObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition =
            "opacity .7s ease, transform .7s ease";

        revealObserver.observe(element);

    });


    /* ================================================
       ACTIVE NAVIGATION
       ================================================ */

    const sections = document.querySelectorAll(
        "section[id]"
    );

    const navLinks = document.querySelectorAll(
        ".topbar nav a"
    );

    const navObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const currentId =
                    entry.target.getAttribute("id");

                navLinks.forEach(link => {

                    const href =
                        link.getAttribute("href");

                    link.style.opacity =
                        href === `#${currentId}`
                            ? "1"
                            : "0.55";

                });

            });

        },
        {
            threshold: 0.35
        }
    );


    sections.forEach(section => {
        navObserver.observe(section);
    });


    /* ================================================
       MOUSE PARALLAX — HERO VISUAL
       ================================================ */

    const heroArt =
        document.querySelector(".hero-art");

    const orbits =
        document.querySelectorAll(".orbit");

    if (heroArt) {

        heroArt.addEventListener(
            "mousemove",
            event => {

                const rect =
                    heroArt.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left)
                    / rect.width
                    - 0.5;

                const y =
                    (event.clientY - rect.top)
                    / rect.height
                    - 0.5;


                orbits.forEach((orbit, index) => {

                    const movement =
                        (index + 1) * 7;

                    orbit.style.marginLeft =
                        `${x * movement}px`;

                    orbit.style.marginTop =
                        `${y * movement}px`;

                });

            }
        );


        heroArt.addEventListener(
            "mouseleave",
            () => {

                orbits.forEach(orbit => {

                    orbit.style.marginLeft = "0";
                    orbit.style.marginTop = "0";

                });

            }
        );

    }


    /* ================================================
       PROJECT HOVER
       ================================================ */

    projects.forEach(project => {

        project.addEventListener(
            "mouseenter",
            () => {

                if (!project.classList.contains("hidden")) {

                    project.style.transform =
                        "translateY(-5px)";

                }

            }
        );


        project.addEventListener(
            "mouseleave",
            () => {

                project.style.transform =
                    "translateY(0)";

            }
        );

    });


    /* ================================================
       BACK TO TOP
       ================================================ */

    const topButton =
        document.getElementById("topBtn");


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 600) {

                topButton.classList.add("show");

            } else {

                topButton.classList.remove("show");

            }

        }
    );


    topButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* ================================================
       CURSOR-BASED BACKGROUND MOVEMENT
       ================================================ */

    const ambient =
        document.querySelector(".ambient");


    document.addEventListener(
        "mousemove",
        event => {

            if (!ambient) return;

            const x =
                (event.clientX / window.innerWidth - 0.5)
                * 20;

            const y =
                (event.clientY / window.innerHeight - 0.5)
                * 20;

            ambient.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );


    /* ================================================
       CURRENT YEAR
       ================================================ */

    const yearElements =
        document.querySelectorAll("[data-year]");

    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });

});
