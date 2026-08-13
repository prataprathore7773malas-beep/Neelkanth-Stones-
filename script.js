/* =========================================================
   NEELKANTH STONES
   MAIN JAVASCRIPT
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
            ".collection-slide, " +
            ".service-card, " +
            ".work-card, " +
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
       COLLECTION SLIDER
       - MANUAL ARROWS
       - AUTO SLIDE
       - PAUSE ON HOVER
       - MOBILE SWIPE
       - CATEGORY FILTER
    ===================================================== */

    const collectionSlider =
        document.querySelector(
            ".collection-slider"
        );

    const collectionSlides =
        collectionSlider
            ? Array.from(
                collectionSlider.querySelectorAll(
                    ".collection-slide"
                )
            )
            : [];

    const collectionPrev =
        document.querySelector(
            ".collection-arrow.prev"
        );

    const collectionNext =
        document.querySelector(
            ".collection-arrow.next"
        );

    const collectionFilters =
        document.querySelectorAll(
            ".collection-filter"
        );

    const collectionCounter =
        document.querySelector(
            ".collection-slider-count"
        );


    let currentCollectionIndex = 0;

    let currentCollectionFilter = "all";

    let collectionTimer = null;

    let collectionPaused = false;


    /* -----------------------------------------------------
       GET VISIBLE SLIDES
    ----------------------------------------------------- */

    function getVisibleCollectionSlides() {

        if (!collectionSlider) {
            return [];
        }

        return Array.from(
            collectionSlider.querySelectorAll(
                ".collection-slide:not(.is-hidden)"
            )
        );

    }


    /* -----------------------------------------------------
       UPDATE COUNTER
    ----------------------------------------------------- */

    function updateCollectionCounter() {

        const visibleSlides =
            getVisibleCollectionSlides();

        if (!collectionCounter) return;

        if (!visibleSlides.length) {

            collectionCounter.textContent =
                "0 / 0";

            return;

        }

        let actualIndex =
            Math.min(
                currentCollectionIndex,
                visibleSlides.length - 1
            );

        collectionCounter.textContent =
            `${actualIndex + 1} / ${visibleSlides.length}`;

    }


    /* -----------------------------------------------------
       MOVE SLIDER
    ----------------------------------------------------- */

    function moveCollectionSlider(direction) {

        const visibleSlides =
            getVisibleCollectionSlides();

        if (
            !collectionSlider ||
            visibleSlides.length === 0
        ) {
            return;
        }


        currentCollectionIndex += direction;


        /* Infinite loop */

        if (
            currentCollectionIndex >=
            visibleSlides.length
        ) {

            currentCollectionIndex = 0;

        }


        if (currentCollectionIndex < 0) {

            currentCollectionIndex =
                visibleSlides.length - 1;

        }


        const targetSlide =
            visibleSlides[currentCollectionIndex];

        if (!targetSlide) return;


        const left =
            targetSlide.offsetLeft -
            collectionSlider.offsetLeft;


        collectionSlider.scrollTo({

            left: left,

            behavior: "smooth"

        });


        updateCollectionCounter();

    }


    /* -----------------------------------------------------
       NEXT BUTTON
    ----------------------------------------------------- */

    if (collectionNext) {

        collectionNext.addEventListener(
            "click",
            () => {

                moveCollectionSlider(1);

                restartCollectionAutoSlide();

            }
        );

    }


    /* -----------------------------------------------------
       PREVIOUS BUTTON
    ----------------------------------------------------- */

    if (collectionPrev) {

        collectionPrev.addEventListener(
            "click",
            () => {

                moveCollectionSlider(-1);

                restartCollectionAutoSlide();

            }
        );

    }


    /* -----------------------------------------------------
       CATEGORY FILTER
    ----------------------------------------------------- */

    function filterCollection(category) {

        currentCollectionFilter =
            category;

        currentCollectionIndex = 0;


        collectionSlides.forEach(slide => {

            const slideCategory =
                (
                    slide.dataset.category ||
                    ""
                ).toLowerCase();


            if (
                category === "all" ||
                slideCategory === category
            ) {

                slide.classList.remove(
                    "is-hidden"
                );

            } else {

                slide.classList.add(
                    "is-hidden"
                );

            }

        });


        /* Scroll back to first result */

        if (collectionSlider) {

            collectionSlider.scrollTo({

                left: 0,

                behavior: "smooth"

            });

        }


        updateCollectionCounter();

        restartCollectionAutoSlide();

    }


    collectionFilters.forEach(filter => {

        filter.addEventListener(
            "click",
            () => {

                collectionFilters.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                filter.classList.add(
                    "active"
                );


                const category =
                    (
                        filter.dataset.category ||
                        "all"
                    ).toLowerCase();


                filterCollection(category);

            }
        );

    });


    /* -----------------------------------------------------
       AUTO SLIDE
       4.5 SECONDS
    ----------------------------------------------------- */

    function startCollectionAutoSlide() {

        if (
            !collectionSlider ||
            collectionSlides.length <= 1
        ) {
            return;
        }


        stopCollectionAutoSlide();


        collectionTimer =
            setInterval(() => {

                if (!collectionPaused) {

                    moveCollectionSlider(1);

                }

            }, 4500);

    }


    function stopCollectionAutoSlide() {

        if (collectionTimer) {

            clearInterval(
                collectionTimer
            );

            collectionTimer = null;

        }

    }


    function restartCollectionAutoSlide() {

        stopCollectionAutoSlide();

        startCollectionAutoSlide();

    }


    /* -----------------------------------------------------
       PAUSE ON HOVER
    ----------------------------------------------------- */

    if (collectionSlider) {

        collectionSlider.addEventListener(
            "mouseenter",
            () => {

                collectionPaused = true;

            }
        );


        collectionSlider.addEventListener(
            "mouseleave",
            () => {

                collectionPaused = false;

            }
        );


        /* Touch devices */

        collectionSlider.addEventListener(
            "touchstart",
            () => {

                collectionPaused = true;

            },
            { passive: true }
        );


        collectionSlider.addEventListener(
            "touchend",
            () => {

                collectionPaused = false;

            },
            { passive: true }
        );

    }


    /* -----------------------------------------------------
       MANUAL DRAG / TOUCH SWIPE
    ----------------------------------------------------- */

    let touchStartX = 0;

    let touchEndX = 0;


    if (collectionSlider) {

        collectionSlider.addEventListener(
            "touchstart",
            event => {

                touchStartX =
                    event.changedTouches[0].screenX;

            },
            { passive: true }
        );


        collectionSlider.addEventListener(
            "touchend",
            event => {

                touchEndX =
                    event.changedTouches[0].screenX;

                handleCollectionSwipe();

            },
            { passive: true }
        );

    }


    function handleCollectionSwipe() {

        const swipeDistance =
            touchEndX - touchStartX;


        /* Ignore tiny movement */

        if (
            Math.abs(swipeDistance) < 50
        ) {
            return;
        }


        if (swipeDistance < 0) {

            moveCollectionSlider(1);

        } else {

            moveCollectionSlider(-1);

        }


        restartCollectionAutoSlide();

    }


    /* -----------------------------------------------------
       MOUSE WHEEL / TRACKPAD
    ----------------------------------------------------- */

    if (collectionSlider) {

        collectionSlider.addEventListener(
            "wheel",
            event => {

                if (
                    Math.abs(event.deltaY) >
                    Math.abs(event.deltaX)
                ) {

                    event.preventDefault();

                    collectionSlider.scrollLeft +=
                        event.deltaY;

                }

            },
            { passive: false }
        );

    }


    /* -----------------------------------------------------
       INITIALIZE COLLECTION
    ----------------------------------------------------- */

    if (collectionSlider && collectionSlides.length) {

        updateCollectionCounter();

        startCollectionAutoSlide();

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
                        ?.value
                        .trim() || "";


                const phone =
                    document
                        .getElementById("phone")
                        ?.value
                        .trim() || "";


                const service =
                    document
                        .getElementById("service")
                        ?.value
                        .trim() || "";


                const message =
                    document
                        .getElementById("message")
                        ?.value
                        .trim() || "";


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


                /* Reset form */

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


    /* =====================================================
       FINAL INITIALIZATION
    ===================================================== */

    updateActiveNav();

    handleHeader();

    handleBackToTop();

});
