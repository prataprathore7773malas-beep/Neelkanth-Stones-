/* =========================================================
   NEELKANTH STONES
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const preloader = document.getElementById("preloader");
    const siteHeader = document.getElementById("siteHeader");

    const menuBtn = document.getElementById("menuBtn");
    const mainNav = document.getElementById("mainNav");

    const backToTop = document.getElementById("backToTop");

    const enquiryForm =
        document.getElementById("enquiryForm");



    /* =====================================================
       PRELOADER
    ===================================================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (preloader) {
                preloader.classList.add("hide");
            }

        }, 700);

    });



    /* =====================================================
       STICKY HEADER
    ===================================================== */

    function handleHeader() {

        if (!siteHeader) return;

        if (window.scrollY > 60) {

            siteHeader.classList.add("scrolled");

        } else {

            siteHeader.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        handleHeader,
        { passive: true }
    );

    handleHeader();



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuBtn && mainNav) {

        menuBtn.addEventListener("click", () => {

            menuBtn.classList.toggle("active");

            mainNav.classList.toggle("active");

            const isOpen =
                mainNav.classList.contains("active");

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        /* Close menu after clicking navigation link */

        const navLinks =
            mainNav.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                menuBtn.classList.remove("active");

                mainNav.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }



    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const smoothLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    smoothLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const headerHeight =
                siteHeader
                    ? siteHeader.offsetHeight
                    : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;

            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        });

    });



    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navItems =
        document.querySelectorAll(
            ".nav-link"
        );


    function updateActiveNav() {

        let currentSection = "home";

        const scrollPosition =
            window.scrollY + 180;


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navItems.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNav,
        { passive: true }
    );

    updateActiveNav();



    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-label, " +
            ".about-content, " +
            ".about-image-wrap, " +
            ".collection-card, " +
            ".service-card, " +
            ".gallery-item, " +
            ".why-point, " +
            ".contact-info, " +
            ".enquiry-box, " +
            ".final-cta-content"
        );


    revealElements.forEach(element => {

        element.classList.add("reveal");

    });


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("visible");

        });

    }



    /* =====================================================
       BACK TO TOP
    ===================================================== */

    function handleBackToTop() {

        if (!backToTop) return;

        if (window.scrollY > 600) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }

    window.addEventListener(
        "scroll",
        handleBackToTop,
        { passive: true }
    );

    handleBackToTop();


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }



    /* =====================================================
       ENQUIRY FORM → WHATSAPP
    ===================================================== */

    if (enquiryForm) {

        enquiryForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                /* Get values */

                const name =
                    document
                        .getElementById("name")
                        .value
                        .trim();

                const phone =
                    document
                        .getElementById("phone")
                        .value
                        .trim();

                const service =
                    document
                        .getElementById("service")
                        .value
                        .trim();

                const message =
                    document
                        .getElementById("message")
                        .value
                        .trim();


                /* Basic validation */

                if (!name || !phone || !service) {

                    alert(
                        "Please fill in your name, phone number and requirement."
                    );

                    return;

                }


                /* WhatsApp message */

                const whatsappMessage =
`Hello Neelkanth Stones,

I would like to enquire about your stone work.

Name: ${name}

Phone: ${phone}

Requirement: ${service}

Project Details:
${message || "Not provided"}

Please share the details and quotation.

Thank you.`;


                /* Encode message */

                const encodedMessage =
                    encodeURIComponent(
                        whatsappMessage
                    );


                /* WhatsApp number */

                const whatsappNumber =
                    "918619201942";


                /* Open WhatsApp */

                const whatsappURL =
                    `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


                window.open(
                    whatsappURL,
                    "_blank"
                );


                /* Optional reset */

                enquiryForm.reset();

            }
        );

    }



    /* =====================================================
       PHONE NUMBER VALIDATION
    ===================================================== */

    const phoneInput =
        document.getElementById("phone");


    if (phoneInput) {

        phoneInput.addEventListener(
            "input",
            function () {

                this.value =
                    this.value.replace(
                        /[^0-9+\-\s]/g,
                        ""
                    );

            }
        );

    }



    /* =====================================================
       IMAGE FALLBACK
    ===================================================== */

    const allImages =
        document.querySelectorAll("img");


    allImages.forEach(image => {

        image.addEventListener(
            "error",
            function () {

                this.classList.add(
                    "image-error"
                );

            }
        );

    });



    /* =====================================================
       ESC KEY — CLOSE MOBILE MENU
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                mainNav &&
                mainNav.classList.contains("active")
            ) {

                mainNav.classList.remove(
                    "active"
                );

                if (menuBtn) {

                    menuBtn.classList.remove(
                        "active"
                    );

                    menuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );



    /* =====================================================
       PREVENT EMPTY HASH JUMP
    ===================================================== */

    document
        .querySelectorAll('a[href="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {
                    event.preventDefault();
                }
            );

        });



    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.querySelector(
            ".footer-bottom p"
        );


    if (currentYear) {

        currentYear.innerHTML =
            currentYear.innerHTML.replace(
                "2026",
                new Date().getFullYear()
            );

    }

});
