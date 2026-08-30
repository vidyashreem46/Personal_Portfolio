/* ==========================================
VIDYASHREE PORTFOLIO
INTERACTIONS
========================================== */

/* =========================
BACK TO TOP
========================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

```
if (window.scrollY > 500) {
    topBtn.classList.add("show");
} else {
    topBtn.classList.remove("show");
}
```

});

topBtn.addEventListener("click", () => {

```
window.scrollTo({
    top: 0,
    behavior: "smooth"
});
```

});

/* =========================
SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(
(entries) => {

```
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0)";

            observer.unobserve(entry.target);

        }

    });

},
{
    threshold: 0.08
}
```

);

/* Elements that appear while scrolling */

document
.querySelectorAll(
".project, .skill-column, .facts div, .edu-main"
)
.forEach((element) => {

```
    element.style.opacity = "0";

    element.style.transform =
        "translateY(18px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});
```

/* =========================
ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(
".topbar nav a"
);

const navObserver = new IntersectionObserver(
(entries) => {

```
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            navLinks.forEach((link) => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    "#" + entry.target.id
                ) {

                    link.classList.add("active");

                }

            });

        }

    });

},
{
    threshold: 0.45
}
```

);

sections.forEach((section) => {
navObserver.observe(section);
});

/* =========================
MOUSE MOVEMENT
AI ORBIT EFFECT
========================= */

const heroArt = document.querySelector(".hero-art");

if (heroArt) {

```
heroArt.addEventListener("mousemove", (event) => {

    const rect =
        heroArt.getBoundingClientRect();

    const x =
        (event.clientX - rect.left) /
        rect.width -
        0.5;

    const y =
        (event.clientY - rect.top) /
        rect.height -
        0.5;


    const nodes =
        heroArt.querySelectorAll(".node");

    nodes.forEach((node, index) => {

        const strength = (index + 1) * 8;

        node.style.transform =
            `translate(${x * strength}px,
                       ${y * strength}px)`;

    });

});


heroArt.addEventListener("mouseleave", () => {

    heroArt
        .querySelectorAll(".node")
        .forEach((node) => {

            node.style.transform =
                "translate(0, 0)";

        });

});
```

}

/* =========================
CURRENT YEAR
========================= */

const yearElement =
document.querySelector(".contact-bottom span");

if (yearElement) {

```
yearElement.textContent =
    `© ${new Date().getFullYear()} Vidyashree M`;
```

}

/* =========================
PREVENT BROKEN EXTERNAL
LINKS FROM OPENING
========================= */

document
.querySelectorAll('a[target="_blank"]')
.forEach((link) => {

```
    link.setAttribute(
        "rel",
        "noopener noreferrer"
    );

});
```
