/* =========================================================
   VIDYASHREE M — PORTFOLIO JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       PROJECT FILTER
    ===================================================== */

    const filterButtons =
        document.querySelectorAll(".filter-button");

    const projectCards =
        document.querySelectorAll(".project-card");


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedFilter =
                button.dataset.filter;


            /* Remove active state */

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });


            /* Add active state */

            button.classList.add("active");


            /* Filter projects */

            projectCards.forEach(card => {

                const categories =
                    card.dataset.category
                        .toLowerCase()
                        .split(" ");


                if (
                    selectedFilter === "all" ||
                    categories.includes(selectedFilter)
                ) {

                    card.classList.remove("hidden");

                    card.animate(
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

                    card.classList.add("hidden");

                }

            });

        });

    });


    /* =====================================================
       NAV ACTIVE SECTION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-links a");


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const currentId =
                            entry.target.getAttribute("id");


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
                threshold: 0.35
            }
        );


    sections.forEach(section => {

        observer.observe(section);

    });


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backToTop =
        document.getElementById("backToTop");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =====================================================
       THEME BUTTON
    ===================================================== */

    const themeButton =
        document.getElementById("themeButton");


    const themeIcon =
        themeButton.querySelector("i");


    const savedTheme =
        localStorage.getItem("portfolio-theme");


    if (savedTheme === "light") {

        document.body.classList.add("light");

        themeIcon.className =
            "fa-solid fa-sun";

    }


    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("light");


        const isLight =
            document.body.classList.contains("light");


        localStorage.setItem(
            "portfolio-theme",
            isLight ? "light" : "dark"
        );


        themeIcon.className =
            isLight
                ? "fa-solid fa-sun"
                : "fa-solid fa-moon";

    });


    /* =====================================================
       SMOOTH NAVIGATION
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(anchor => {

        anchor.addEventListener("click", event => {

            const targetId =
                anchor.getAttribute("href");


            if (
                targetId === "#" ||
                !document.querySelector(targetId)
            ) {
                return;
            }


            event.preventDefault();


            const target =
                document.querySelector(targetId);


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       HERO DATA NODE ANIMATION
    ===================================================== */

    const nodes =
        document.querySelectorAll(".data-node");


    nodes.forEach((node, index) => {

        node.animate(
            [
                {
                    transform: "translateY(0)"
                },
                {
                    transform:
                        "translateY(-10px)"
                },
                {
                    transform: "translateY(0)"
                }
            ],
            {
                duration:
                    3500 + index * 500,

                iterations: Infinity,

                easing: "ease-in-out"
            }
        );

    });


    /* =====================================================
       PROJECT CARD MOUSE EFFECT
    ===================================================== */

    projectCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                if (window.innerWidth < 900) {
                    return;
                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateX =
                    (y - centerY) / 45;

                const rotateY =
                    (centerX - x) / 45;


                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-7px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });


    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%c Vidyashree M ",
        "background:#7c3aed;color:white;padding:8px;font-weight:bold;"
    );

    console.log(
        "Data Science & Artificial Intelligence Portfolio"
    );

    console.log(
        "Keep Building. 🚀"
    );

});
