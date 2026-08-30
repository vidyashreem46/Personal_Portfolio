/* =====================================================
   PORTFOLIO JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* =================================================
       PROJECT FILTER
    ================================================= */

    const filters = document.querySelectorAll(".filter");
    const projects = document.querySelectorAll(".project-card");


    filters.forEach(filter => {

        filter.addEventListener("click", () => {

            const selected = filter.dataset.filter;


            /* Active button */

            filters.forEach(btn => {
                btn.classList.remove("active");
            });

            filter.classList.add("active");


            /* Filter projects */

            projects.forEach(project => {

                const categories =
                    project.dataset.category.split(" ");


                if (
                    selected === "all" ||
                    categories.includes(selected)
                ) {

                    project.classList.remove("hidden");

                } else {

                    project.classList.add("hidden");

                }

            });

        });

    });



    /* =================================================
       BACK TO TOP
    ================================================= */

    const topButton =
        document.getElementById("topButton");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    });


    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });



    /* =================================================
       NAVIGATION ACTIVE STATE
    ================================================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".navbar nav a");


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        navLinks.forEach(link => {

                            link.classList.remove("current");

                            if (
                                link.getAttribute("href") ===
                                "#" + entry.target.id
                            ) {

                                link.classList.add("current");

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



    /* =================================================
       PROJECT CARD HOVER
    ================================================= */

    projects.forEach(project => {

        project.addEventListener("mouseenter", () => {

            project.style.transform =
                "translateY(-4px)";

            project.style.transition =
                "transform .3s ease";

        });


        project.addEventListener("mouseleave", () => {

            project.style.transform =
                "translateY(0)";

        });

    });



    /* =================================================
       SMOOTH INTERNAL LINKS
    ================================================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener("click", event => {

            const target =
                document.querySelector(
                    link.getAttribute("href")
                );


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });



    /* =================================================
       MOUSE PARALLAX FOR HERO
    ================================================= */

    const heroVisual =
        document.querySelector(".hero-right");


    if (heroVisual) {

        document.addEventListener(
            "mousemove",
            event => {

                const x =
                    (event.clientX /
                        window.innerWidth - .5) * 10;

                const y =
                    (event.clientY /
                        window.innerHeight - .5) * 10;


                heroVisual.style.transform =
                    `translate(${x}px, ${y}px)`;

            }
        );

    }



    /* =================================================
       CONSOLE MESSAGE
    ================================================= */

    console.log(
        "%c Vidyashree M — Portfolio ",
        "background:#171817;color:#b9d75e;padding:8px;font-weight:bold;"
    );

    console.log(
        "Data Science • Artificial Intelligence • Python • AI/ML"
    );

});
