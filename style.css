/* =========================================================
   NEELKANTH STONES
   PREMIUM JODHPUR STONE WEBSITE
========================================================= */


/* =========================================================
   ROOT VARIABLES
========================================================= */

:root {

    --stone-dark: #211811;
    --stone-dark-2: #302219;
    --stone-brown: #5b3b25;
    --stone-brown-light: #7a5130;

    --sand: #c69a62;
    --sand-light: #dfbf91;
    --cream: #f5eee4;
    --cream-2: #ebe0d1;

    --gold: #c49a5a;
    --gold-light: #e0bd7d;

    --white: #ffffff;
    --text-dark: #211b16;
    --text-muted: #75695d;

    --border: rgba(91, 59, 37, 0.15);

    --shadow:
        0 18px 50px rgba(38, 25, 15, 0.12);

    --shadow-dark:
        0 20px 60px rgba(0, 0, 0, 0.25);

    --heading-font:
        "Cormorant Garamond",
        Georgia,
        serif;

    --body-font:
        "DM Sans",
        Arial,
        sans-serif;

    --container: 1240px;

    --transition:
        all 0.4s cubic-bezier(.2,.65,.3,1);

}


/* =========================================================
   RESET
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--body-font);
    background: var(--cream);
    color: var(--text-dark);
    line-height: 1.7;
    overflow-x: hidden;
}

body,
button,
input,
textarea,
select {
    font-family: var(--body-font);
}

img {
    width: 100%;
    display: block;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    border: 0;
    cursor: pointer;
}

ul {
    list-style: none;
}


/* =========================================================
   CONTAINER
========================================================= */

.container {
    width: min(
        calc(100% - 48px),
        var(--container)
    );

    margin-inline: auto;
}


/* =========================================================
   PRELOADER
========================================================= */

.preloader {
    position: fixed;
    inset: 0;

    background: var(--stone-dark);

    z-index: 99999;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 20px;

    color: var(--gold-light);

    transition:
        opacity 0.6s ease,
        visibility 0.6s ease;
}

.preloader.hide {
    opacity: 0;
    visibility: hidden;
}

.preloader span {
    font-size: 11px;
    letter-spacing: 4px;
    font-weight: 600;
}

.loader-stone {
    width: 48px;
    height: 48px;

    border: 2px solid rgba(255,255,255,0.2);
    border-top-color: var(--gold);

    border-radius: 50%;

    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}


/* =========================================================
   HEADER
========================================================= */

.site-header {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;

    z-index: 1000;

    padding: 18px 0;

    transition: var(--transition);
}

.site-header.scrolled {
    padding: 10px 0;

    background:
        rgba(33, 24, 17, 0.94);

    backdrop-filter: blur(14px);

    box-shadow:
        0 10px 30px rgba(0,0,0,0.15);
}

.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 30px;
}


/* =========================================================
   LOGO
========================================================= */

.brand-logo {
    display: flex;
    align-items: center;

    position: relative;
    z-index: 10;
}

.brand-logo img {
    width: 145px;
    height: auto;

    max-height: 62px;

    object-fit: contain;
}


/* =========================================================
   NAVIGATION
========================================================= */

.main-nav {
    display: flex;
    align-items: center;
    gap: 34px;
}

.nav-link {
    position: relative;

    color: rgba(255,255,255,0.88);

    font-size: 13px;
    font-weight: 500;

    transition: var(--transition);
}

.nav-link::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: -8px;

    width: 0;
    height: 1px;

    background: var(--gold-light);

    transition: var(--transition);
}

.nav-link:hover,
.nav-link.active {
    color: var(--gold-light);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}


/* =========================================================
   NAV CTA
========================================================= */

.nav-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    padding: 12px 19px;

    background: var(--gold);

    color: var(--stone-dark);

    font-size: 12px;
    font-weight: 700;

    letter-spacing: 0.3px;

    transition: var(--transition);
}

.nav-cta:hover {
    background: var(--gold-light);

    transform: translateY(-2px);
}

.nav-cta i {
    font-size: 11px;
}


/* =========================================================
   MOBILE MENU
========================================================= */

.menu-btn {
    display: none;

    width: 44px;
    height: 44px;

    background: transparent;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 5px;
}

.menu-btn span {
    display: block;

    width: 25px;
    height: 2px;

    background: var(--white);

    transition: var(--transition);
}


/* =========================================================
   HERO
========================================================= */

.hero-section {
    position: relative;

    min-height: 100vh;

    display: flex;
    align-items: center;

    overflow: hidden;

    background: var(--stone-dark);
}

.hero-background {
    position: absolute;
    inset: 0;

    z-index: 0;
}

.hero-image {
    width: 100%;
    height: 100%;

    object-fit: cover;

    animation: heroZoom 12s ease-in-out infinite alternate;
}

@keyframes heroZoom {

    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.06);
    }

}

.hero-overlay {
    position: absolute;
    inset: 0;

    z-index: 1;

    background:
        linear-gradient(
            90deg,
            rgba(25,17,11,0.92) 0%,
            rgba(25,17,11,0.70) 42%,
            rgba(25,17,11,0.25) 75%,
            rgba(25,17,11,0.48) 100%
        );
}

.hero-container {
    position: relative;

    z-index: 2;

    padding-top: 100px;
}

.hero-content {
    width: min(760px, 100%);
}

.hero-eyebrow {
    display: flex;
    align-items: center;
    gap: 13px;

    color: var(--gold-light);

    font-size: 11px;
    font-weight: 600;

    letter-spacing: 3px;

    margin-bottom: 22px;
}

.eyebrow-line {
    width: 38px;
    height: 1px;

    background: var(--gold);
}

.hero-content h1 {
    color: var(--white);

    font-family: var(--heading-font);

    font-size: clamp(
        58px,
        7vw,
        102px
    );

    font-weight: 600;

    line-height: 0.93;

    letter-spacing: -2px;

    margin-bottom: 28px;
}

.hero-content h1 span {
    display: block;

    color: var(--sand-light);

    font-style: italic;
}

.hero-description {
    max-width: 620px;

    color: rgba(255,255,255,0.78);

    font-size: 16px;

    line-height: 1.8;

    margin-bottom: 36px;
}


/* =========================================================
   BUTTONS
========================================================= */

.hero-buttons,
.cta-buttons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 14px;
}

.primary-btn,
.secondary-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    gap: 12px;

    min-height: 52px;

    padding: 0 23px;

    font-size: 12px;

    font-weight: 700;

    letter-spacing: 0.3px;

    transition: var(--transition);
}

.primary-btn {
    background: var(--gold);

    color: var(--stone-dark);
}

.primary-btn:hover {
    background: var(--gold-light);

    transform: translateY(-3px);

    box-shadow:
        0 12px 30px rgba(196,154,90,0.25);
}

.secondary-btn {
    border: 1px solid rgba(255,255,255,0.35);

    color: var(--white);

    background: rgba(255,255,255,0.04);

    backdrop-filter: blur(8px);
}

.secondary-btn:hover {
    background: var(--white);

    color: var(--stone-dark);

    transform: translateY(-3px);
}

.secondary-btn i {
    font-size: 16px;
}


/* =========================================================
   HERO STATS
========================================================= */

.hero-stats {
    display: flex;

    margin-top: 65px;

    padding-top: 22px;

    border-top:
        1px solid rgba(255,255,255,0.18);

    gap: 45px;
}

.hero-stat {
    display: flex;
    flex-direction: column;
}

.hero-stat strong {
    color: var(--white);

    font-family: var(--heading-font);

    font-size: 27px;

    font-weight: 600;
}

.hero-stat span {
    color: rgba(255,255,255,0.58);

    font-size: 10px;

    text-transform: uppercase;

    letter-spacing: 1.5px;
}


/* =========================================================
   SCROLL INDICATOR
========================================================= */

.scroll-indicator {
    position: absolute;

    right: 42px;
    bottom: 38px;

    z-index: 3;

    display: flex;
    align-items: center;
    gap: 14px;

    color: rgba(255,255,255,0.65);

    font-size: 10px;

    text-transform: uppercase;

    letter-spacing: 2px;

    writing-mode: vertical-rl;
}

.scroll-indicator i {
    color: var(--gold-light);

    animation:
        scrollArrow 1.5s ease-in-out infinite;
}

@keyframes scrollArrow {

    0%,100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(8px);
    }

}


/* =========================================================
   INTRO STRIP
========================================================= */

.intro-strip {
    background: var(--stone-dark);

    border-top:
        1px solid rgba(255,255,255,0.08);

    border-bottom:
        1px solid rgba(255,255,255,0.08);
}

.intro-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);
}

.intro-item {
    display: flex;
    align-items: center;

    gap: 15px;

    padding: 25px 22px;

    border-right:
        1px solid rgba(255,255,255,0.1);
}

.intro-item:first-child {
    border-left:
        1px solid rgba(255,255,255,0.1);
}

.intro-item > i {
    color: var(--gold);

    font-size: 19px;
}

.intro-item strong {
    display: block;

    color: var(--white);

    font-size: 12px;

    font-weight: 600;
}

.intro-item span {
    display: block;

    color: rgba(255,255,255,0.48);

    font-size: 10px;
}


/* =========================================================
   SECTION COMMON
========================================================= */

.section-padding {
    padding: 120px 0;
}

.section-label {
    display: flex;
    align-items: center;

    gap: 13px;

    color: var(--stone-brown-light);

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 2.5px;

    margin-bottom: 22px;
}

.section-label span:first-child {
    color: var(--gold);

    font-family: var(--heading-font);

    font-size: 17px;

    letter-spacing: 0;
}

.section-kicker {
    color: var(--gold);

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 3px;
}


/* =========================================================
   ABOUT
========================================================= */

.about-section {
    background:
        linear-gradient(
            135deg,
            var(--cream) 0%,
            #f0e6d9 100%
        );
}

.about-grid {
    display: grid;

    grid-template-columns:
        minmax(0, 0.95fr)
        minmax(0, 1.05fr);

    gap: 90px;

    align-items: center;
}

.about-image-wrap {
    position: relative;

    padding: 0 0 35px 35px;
}

.about-image-wrap::before {
    content: "";

    position: absolute;

    left: 0;
    bottom: 0;

    width: 75%;
    height: 75%;

    border: 1px solid var(--gold);

    opacity: 0.5;

    z-index: 0;
}

.about-image {
    position: relative;

    z-index: 1;

    height: 590px;

    object-fit: cover;

    box-shadow: var(--shadow);
}

.about-experience {
    position: absolute;

    z-index: 2;

    right: -15px;
    bottom: 0;

    width: 145px;
    height: 145px;

    background: var(--stone-dark);

    color: var(--white);

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    border:
        5px solid var(--cream);

    box-shadow: var(--shadow);
}

.about-experience strong {
    color: var(--gold);

    font-size: 11px;

    text-transform: uppercase;

    letter-spacing: 2px;
}

.about-experience span {
    font-family: var(--heading-font);

    font-size: 47px;

    line-height: 1;

    color: var(--white);
}

.about-content h2,
.why-content h2 {
    font-family: var(--heading-font);

    font-size: clamp(45px,5vw,70px);

    font-weight: 600;

    line-height: 0.98;

    color: var(--stone-dark);

    margin: 15px 0 27px;
}

.about-content h2 span,
.why-content h2 span {
    display: block;

    color: var(--stone-brown-light);

    font-style: italic;
}

.about-content > p {
    color: var(--text-muted);

    font-size: 14px;

    max-width: 610px;

    margin-bottom: 17px;
}

.about-features {
    margin-top: 35px;

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 20px;
}

.about-feature {
    display: flex;

    gap: 15px;

    padding-top: 18px;

    border-top:
        1px solid var(--border);
}

.feature-number {
    color: var(--gold);

    font-family: var(--heading-font);

    font-size: 19px;
}

.about-feature h4 {
    font-family: var(--heading-font);

    font-size: 20px;

    margin-bottom: 4px;
}

.about-feature p {
    color: var(--text-muted);

    font-size: 11px;

    line-height: 1.6;
}

.text-link,
.card-link {
    display: inline-flex;
    align-items: center;

    gap: 11px;

    color: var(--stone-dark);

    font-size: 11px;

    font-weight: 700;

    text-transform: uppercase;

    letter-spacing: 1.2px;

    margin-top: 30px;

    transition: var(--transition);
}

.text-link:hover,
.card-link:hover {
    color: var(--gold);
}

.text-link i,
.card-link i {
    transition: var(--transition);
}

.text-link:hover i,
.card-link:hover i {
    transform: translateX(5px);
}


/* =========================================================
   COLLECTION
========================================================= */

.collection-section {
    background: var(--stone-dark);

    color: var(--white);
}

.collection-section .section-label {
    color: var(--sand-light);
}

.collection-section .section-heading {
    display: grid;

    grid-template-columns:
        1fr 0.55fr;

    gap: 60px;

    align-items: end;

    margin-bottom: 55px;
}

.section-heading h2,
.services-heading h2 {
    font-family: var(--heading-font);

    font-size: clamp(45px,5vw,70px);

    line-height: 0.95;

    font-weight: 600;
}

.section-heading h2 span,
.services-heading h2 span {
    color: var(--sand);

    font-style: italic;
}

.section-heading > p {
    color: rgba(255,255,255,0.58);

    font-size: 13px;

    max-width: 400px;

    line-height: 1.8;
}

.collection-grid {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 25px;
}

.collection-card {
    background: var(--stone-dark-2);

    border:
        1px solid rgba(255,255,255,0.08);

    overflow: hidden;

    transition: var(--transition);
}

.collection-card:hover {
    transform: translateY(-8px);

    border-color:
        rgba(196,154,90,0.35);

    box-shadow:
        0 25px 60px rgba(0,0,0,0.2);
}

.collection-image {
    position: relative;

    height: 400px;

    overflow: hidden;
}

.collection-image::after {
    content: "";

    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            to top,
            rgba(20,13,9,0.45),
            transparent 50%
        );
}

.collection-image img {
    height: 100%;

    object-fit: cover;

    transition:
        transform 0.8s ease;
}

.collection-card:hover
.collection-image img {
    transform: scale(1.06);
}

.collection-number {
    position: absolute;

    z-index: 2;

    top: 20px;
    left: 20px;

    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--gold);

    color: var(--stone-dark);

    font-family: var(--heading-font);

    font-size: 19px;
}

.collection-content {
    padding: 27px 28px 30px;
}

.collection-content > span {
    color: var(--gold);

    font-size: 9px;

    font-weight: 700;

    letter-spacing: 2px;
}

.collection-content h3 {
    font-family: var(--heading-font);

    font-size: 32px;

    font-weight: 600;

    margin: 5px 0 8px;
}

.collection-content p {
    color: rgba(255,255,255,0.55);

    font-size: 12px;

    line-height: 1.7;

    max-width: 450px;
}

.collection-content .card-link {
    color: var(--sand-light);

    margin-top: 17px;
}


/* =========================================================
   SERVICES
========================================================= */

.services-section {
    background: var(--cream);
}

.services-heading {
    display: grid;

    grid-template-columns:
        1fr 0.55fr;

    gap: 60px;

    align-items: end;

    margin-bottom: 55px;
}

.services-heading p {
    color: var(--text-muted);

    font-size: 13px;

    max-width: 420px;
}

.services-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 18px;
}

.service-card {
    position: relative;

    padding: 35px 30px 32px;

    min-height: 330px;

    background:
        linear-gradient(
            145deg,
            #fffaf4,
            #eee2d3
        );

    border:
        1px solid rgba(91,59,37,0.12);

    overflow: hidden;

    transition: var(--transition);
}

.service-card::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 0;
    height: 3px;

    background: var(--gold);

    transition: var(--transition);
}

.service-card:hover {
    transform: translateY(-7px);

    box-shadow: var(--shadow);
}

.service-card:hover::before {
    width: 100%;
}

.service-number {
    position: absolute;

    top: 22px;
    right: 25px;

    font-family: var(--heading-font);

    color: rgba(91,59,37,0.25);

    font-size: 20px;
}

.service-icon {
    width: 52px;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 25px;

    background: var(--stone-dark);

    color: var(--gold);

    font-size: 18px;
}

.service-card h3 {
    font-family: var(--heading-font);

    font-size: 27px;

    line-height: 1.05;

    margin-bottom: 13px;
}

.service-card p {
    color: var(--text-muted);

    font-size: 12px;

    line-height: 1.7;
}

.service-card > a {
    display: inline-flex;
    align-items: center;

    gap: 9px;

    color: var(--stone-brown);

    font-size: 10px;

    font-weight: 700;

    text-transform: uppercase;

    letter-spacing: 1px;

    margin-top: 22px;

    transition: var(--transition);
}

.service-card > a:hover {
    color: var(--gold);
}

.service-card > a i {
    transition: var(--transition);
}

.service-card > a:hover i {
    transform: translateX(4px);
}


/* =========================================================
   CRAFT SECTION
========================================================= */

.craft-section {
    position: relative;

    min-height: 560px;

    display: flex;
    align-items: center;

    background:
        linear-gradient(
            100deg,
            rgba(33,24,17,0.95),
            rgba(33,24,17,0.55)
        ),
        url("about.jpg") center/cover no-repeat;

    background-attachment: fixed;
}

.craft-overlay {
    position: absolute;
    inset: 0;

    background:
        radial-gradient(
            circle at 80% 50%,
            rgba(196,154,90,0.14),
            transparent 35%
        );
}

.craft-content {
    position: relative;

    z-index: 2;

    max-width: 700px;
}

.craft-content .section-kicker {
    display: block;

    margin-bottom: 17px;
}

.craft-content h2 {
    color: var(--white);

    font-family: var(--heading-font);

    font-size: clamp(48px,6vw,78px);

    line-height: 0.95;

    margin-bottom: 25px;
}

.craft-content h2 span {
    display: block;

    color: var(--sand-light);

    font-style: italic;
}

.craft-content p {
    max-width: 570px;

    color: rgba(255,255,255,0.65);

    font-size: 14px;

    margin-bottom: 30px;
}


/* =========================================================
   GALLERY
========================================================= */

.gallery-section {
    background: var(--cream-2);
}

.gallery-section .section-heading {
    display: grid;

    grid-template-columns:
        1fr 0.5fr;

    gap: 50px;

    align-items: end;

    margin-bottom: 50px;
}

.gallery-section .section-heading > p {
    color: var(--text-muted);
}

.gallery-grid {
    display: grid;

    grid-template-columns:
        1.25fr 0.75fr 0.75fr;

    grid-template-rows:
        280px 280px;

    gap: 15px;
}

.gallery-item {
    position: relative;

    overflow: hidden;

    background: var(--stone-dark);
}

.gallery-item::after {
    content: "";

    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            to top,
            rgba(20,13,8,0.35),
            transparent
        );

    opacity: 0;

    transition: var(--transition);
}

.gallery-item:hover::after {
    opacity: 1;
}

.gallery-item img {
    height: 100%;

    object-fit: cover;

    transition:
        transform 0.8s ease;
}

.gallery-item:hover img {
    transform: scale(1.07);
}

.gallery-large {
    grid-row: span 2;
}

.gallery-wide {
    grid-column: span 2;
}


/* =========================================================
   WHY SECTION
========================================================= */

.why-section {
    background: var(--stone-dark);

    color: var(--white);
}

.why-grid {
    display: grid;

    grid-template-columns:
        0.8fr 1.2fr;

    gap: 100px;
}

.why-content .section-label {
    color: var(--sand-light);
}

.why-content h2 {
    color: var(--white);
}

.why-content h2 span {
    color: var(--sand);
}

.why-content > p {
    color: rgba(255,255,255,0.55);

    font-size: 13px;

    max-width: 470px;
}

.why-points {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 0 30px;
}

.why-point {
    display: flex;

    gap: 18px;

    padding: 25px 0;

    border-top:
        1px solid rgba(255,255,255,0.12);
}

.why-point > span {
    color: var(--gold);

    font-family: var(--heading-font);

    font-size: 18px;
}

.why-point h3 {
    font-family: var(--heading-font);

    font-size: 23px;

    margin-bottom: 5px;
}

.why-point p {
    color: rgba(255,255,255,0.45);

    font-size: 11px;

    line-height: 1.65;
}


/* =========================================================
   CONTACT
========================================================= */

.contact-section {
    background:
        linear-gradient(
            135deg,
            var(--cream),
            #e7d8c5
        );
}

.contact-wrapper {
    display: grid;

    grid-template-columns:
        0.9fr 1.1fr;

    gap: 80px;

    align-items: start;
}

.contact-info h2 {
    font-family: var(--heading-font);

    font-size: clamp(45px,5vw,68px);

    line-height: 0.95;

    margin: 15px 0 25px;
}

.contact-info h2 span {
    display: block;

    color: var(--stone-brown-light);

    font-style: italic;
}

.contact-info > p {
    color: var(--text-muted);

    font-size: 13px;

    max-width: 500px;

    margin-bottom: 35px;
}

.contact-details {
    display: flex;

    flex-direction: column;

    gap: 17px;
}

.contact-detail {
    display: flex;

    align-items: center;

    gap: 15px;
}

.contact-icon {
    flex-shrink: 0;

    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--stone-dark);

    color: var(--gold);
}

.contact-detail small {
    display: block;

    color: var(--text-muted);

    font-size: 8px;

    font-weight: 700;

    letter-spacing: 1.5px;
}

.contact-detail strong {
    display: block;

    font-size: 13px;

    font-weight: 600;
}

.whatsapp-icon {
    color: #d6a96b;
}


/* =========================================================
   ENQUIRY BOX
========================================================= */

.enquiry-box {
    background: var(--stone-dark);

    padding: 45px;

    box-shadow:
        0 25px 70px rgba(38,25,15,0.18);
}

.enquiry-header > span {
    color: var(--gold);

    font-size: 9px;

    font-weight: 700;

    letter-spacing: 2.5px;
}

.enquiry-header h3 {
    color: var(--white);

    font-family: var(--heading-font);

    font-size: 36px;

    line-height: 1;

    margin: 7px 0 8px;
}

.enquiry-header p {
    color: rgba(255,255,255,0.48);

    font-size: 11px;

    margin-bottom: 30px;
}

.form-row {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 15px;
}

.form-group {
    margin-bottom: 17px;
}

.form-group label {
    display: block;

    color: rgba(255,255,255,0.65);

    font-size: 10px;

    font-weight: 600;

    margin-bottom: 7px;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;

    border:
        1px solid rgba(255,255,255,0.13);

    outline: none;

    background:
        rgba(255,255,255,0.05);

    color: var(--white);

    padding: 13px 14px;

    font-size: 11px;

    transition: var(--transition);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: rgba(255,255,255,0.32);
}

.form-group select {
    color: rgba(255,255,255,0.75);
}

.form-group select option {
    color: var(--text-dark);

    background: var(--cream);
}

.form-group textarea {
    resize: vertical;

    min-height: 125px;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: var(--gold);

    background:
        rgba(255,255,255,0.07);
}

.form-submit {
    width: 100%;

    min-height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    background: var(--gold);

    color: var(--stone-dark);

    font-size: 11px;

    font-weight: 700;

    text-transform: uppercase;

    letter-spacing: 1px;

    transition: var(--transition);
}

.form-submit:hover {
    background: var(--gold-light);

    transform: translateY(-2px);
}


/* =========================================================
   FINAL CTA
========================================================= */

.final-cta {
    position: relative;

    padding: 110px 0;

    text-align: center;

    background:
        linear-gradient(
            135deg,
            #69462b,
            #3a271b
        );

    overflow: hidden;
}

.final-cta::before {
    content: "";

    position: absolute;

    width: 500px;
    height: 500px;

    border-radius: 50%;

    right: -180px;
    top: -250px;

    border:
        1px solid rgba(255,255,255,0.08);
}

.final-cta::after {
    content: "";

    position: absolute;

    width: 400px;
    height: 400px;

    border-radius: 50%;

    left: -200px;
    bottom: -260px;

    border:
        1px solid rgba(255,255,255,0.07);
}

.final-cta-content {
    position: relative;

    z-index: 2;
}

.final-cta-content > span {
    color: var(--gold-light);

    font-size: 9px;

    font-weight: 700;

    letter-spacing: 3px;
}

.final-cta h2 {
    color: var(--white);

    font-family: var(--heading-font);

    font-size: clamp(48px,6vw,76px);

    line-height: 0.95;

    margin: 15px auto 20px;

    max-width: 850px;
}

.final-cta h2 span {
    color: var(--sand-light);

    font-style: italic;
}

.final-cta p {
    color: rgba(255,255,255,0.58);

    font-size: 13px;

    margin-bottom: 28px;
}

.final-cta .cta-buttons {
    justify-content: center;
}


/* =========================================================
   FOOTER
========================================================= */

.site-footer {
    background: #17100b;

    color: var(--white);

    padding-top: 75px;
}

.footer-main {
    display: grid;

    grid-template-columns:
        1.5fr 0.7fr 0.9fr 0.9fr;

    gap: 60px;

    padding-bottom: 60px;
}

.footer-brand img {
    width: 140px;

    margin-bottom: 20px;
}

.footer-brand > p {
    max-width: 340px;

    color: rgba(255,255,255,0.43);

    font-size: 11px;

    line-height: 1.8;
}

.footer-socials {
    display: flex;

    gap: 8px;

    margin-top: 22px;
}

.footer-socials a {
    width: 38px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    border:
        1px solid rgba(255,255,255,0.12);

    color: rgba(255,255,255,0.65);

    transition: var(--transition);
}

.footer-socials a:hover {
    background: var(--gold);

    border-color: var(--gold);

    color: var(--stone-dark);
}

.footer-column {
    display: flex;

    flex-direction: column;

    gap: 9px;
}

.footer-column h4 {
    color: var(--gold);

    font-size: 10px;

    text-transform: uppercase;

    letter-spacing: 2px;

    margin-bottom: 10px;
}

.footer-column a,
.footer-column span {
    color: rgba(255,255,255,0.48);

    font-size: 11px;

    transition: var(--transition);
}

.footer-column a:hover {
    color: var(--gold-light);

    transform: translateX(3px);
}

.footer-contact a {
    color: var(--white);

    font-weight: 600;
}

.footer-bottom {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 20px;

    padding: 22px 0;

    border-top:
        1px solid rgba(255,255,255,0.08);
}

.footer-bottom p {
    color: rgba(255,255,255,0.35);

    font-size: 9px;
}

.footer-bottom strong {
    color: var(--gold);
}


/* =========================================================
   FLOATING BUTTONS
========================================================= */

.floating-actions {
    position: fixed;

    right: 22px;
    bottom: 25px;

    z-index: 900;

    display: flex;

    flex-direction: column;

    gap: 9px;
}

.floating-btn {
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    color: var(--white);

    box-shadow:
        0 8px 25px rgba(0,0,0,0.22);

    transition: var(--transition);
}

.floating-btn i {
    font-size: 19px;
}

.floating-btn span {
    position: absolute;

    right: 62px;

    padding: 6px 10px;

    background: var(--stone-dark);

    color: var(--white);

    font-size: 9px;

    opacity: 0;

    visibility: hidden;

    white-space: nowrap;

    transition: var(--transition);
}

.floating-btn:hover span {
    opacity: 1;

    visibility: visible;
}

.call-btn {
    background: var(--stone-brown);
}

.call-btn:hover {
    background: var(--gold);

    color: var(--stone-dark);

    transform: translateY(-3px);
}

.whatsapp-btn {
    background: #4f3523;
}

.whatsapp-btn:hover {
    background: var(--gold);

    color: var(--stone-dark);

    transform: translateY(-3px);
}


/* =========================================================
   BACK TO TOP
========================================================= */

.back-to-top {
    position: fixed;

    right: 22px;
    bottom: 145px;

    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--gold);

    color: var(--stone-dark);

    z-index: 800;

    opacity: 0;
    visibility: hidden;

    transform: translateY(15px);

    transition: var(--transition);
}

.back-to-top.show {
    opacity: 1;

    visibility: visible;

    transform: translateY(0);
}

.back-to-top:hover {
    background: var(--stone-dark);

    color: var(--gold);
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

.reveal {
    opacity: 0;

    transform: translateY(30px);

    transition:
        opacity 0.8s ease,
        transform 0.8s ease;
}

.reveal.visible {
    opacity: 1;

    transform: translateY(0);
}


/* =========================================================
   SELECTION
========================================================= */

::selection {
    background: var(--gold);

    color: var(--stone-dark);
}


/* =========================================================
   CUSTOM SCROLLBAR
========================================================= */

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--stone-dark);
}

::-webkit-scrollbar-thumb {
    background: var(--stone-brown);

    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--gold);
}


/* =========================================================
   RESPONSIVE — 1100px
========================================================= */

@media (max-width: 1100px) {

    .main-nav {
        gap: 20px;
    }

    .nav-cta {
        display: none;
    }

    .about-grid {
        gap: 55px;
    }

    .services-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .why-grid {
        gap: 60px;
    }

    .footer-main {
        gap: 35px;
    }

}


/* =========================================================
   RESPONSIVE — 850px
========================================================= */

@media (max-width: 850px) {

    .container {
        width:
            min(
                calc(100% - 34px),
                var(--container)
            );
    }

    .site-header {
        padding: 12px 0;
    }

    .brand-logo img {
        width: 125px;
    }


    /* MOBILE NAV */

    .menu-btn {
        display: flex;
    }

    .main-nav {
        position: fixed;

        top: 0;
        right: -100%;

        width: min(320px, 82%);

        height: 100vh;

        padding:
            110px 35px 40px;

        background:
            #1c130d;

        display: flex;

        flex-direction: column;

        align-items: flex-start;

        gap: 25px;

        box-shadow:
            -20px 0 50px rgba(0,0,0,0.3);

        transition:
            right 0.4s ease;
    }

    .main-nav.active {
        right: 0;
    }

    .nav-link {
        font-size: 16px;
    }

    .menu-btn.active {
        position: relative;
    }

    .menu-btn.active span:nth-child(1) {
        transform:
            translateY(7px)
            rotate(45deg);
    }

    .menu-btn.active span:nth-child(2) {
        opacity: 0;
    }

    .menu-btn.active span:nth-child(3) {
        transform:
            translateY(-7px)
            rotate(-45deg);
    }


    /* HERO */

    .hero-section {
        min-height: 850px;
    }

    .hero-overlay {
        background:
            linear-gradient(
                90deg,
                rgba(25,17,11,0.9),
                rgba(25,17,11,0.45)
            );
    }

    .hero-content h1 {
        font-size:
            clamp(
                55px,
                12vw,
                85px
            );
    }

    .hero-description {
        font-size: 14px;
    }

    .hero-stats {
        margin-top: 45px;

        gap: 25px;
    }


    /* INTRO */

    .intro-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .intro-item:nth-child(3) {
        border-left:
            1px solid rgba(255,255,255,0.1);
    }


    /* ABOUT */

    .about-grid {
        grid-template-columns: 1fr;

        gap: 60px;
    }

    .about-image {
        height: 500px;
    }


    /* COLLECTION */

    .collection-section .section-heading,
    .services-heading,
    .gallery-section .section-heading {
        grid-template-columns: 1fr;

        gap: 20px;
    }


    /* WHY */

    .why-grid {
        grid-template-columns: 1fr;

        gap: 50px;
    }


    /* CONTACT */

    .contact-wrapper {
        grid-template-columns: 1fr;

        gap: 60px;
    }


    /* FOOTER */

    .footer-main {
        grid-template-columns:
            repeat(2, 1fr);
    }

}


/* =========================================================
   RESPONSIVE — 600px
========================================================= */

@media (max-width: 600px) {

    .container {
        width:
            calc(100% - 30px);
    }

    .section-padding {
        padding: 80px 0;
    }


    /* HERO */

    .hero-section {
        min-height: 760px;
    }

    .hero-container {
        padding-top: 100px;
    }

    .hero-content h1 {
        font-size: 56px;

        letter-spacing: -1px;
    }

    .hero-description {
        font-size: 13px;

        line-height: 1.7;
    }

    .hero-buttons {
        flex-direction: column;

        align-items: stretch;

        max-width: 290px;
    }

    .primary-btn,
    .secondary-btn {
        width: 100%;
    }

    .hero-stats {
        gap: 17px;

        justify-content: space-between;
    }

    .hero-stat strong {
        font-size: 21px;
    }

    .hero-stat span {
        font-size: 8px;

        letter-spacing: 1px;
    }

    .scroll-indicator {
        display: none;
    }


    /* INTRO */

    .intro-grid {
        grid-template-columns: 1fr;
    }

    .intro-item,
    .intro-item:first-child,
    .intro-item:nth-child(3) {
        border-left: 0;
        border-right: 0;

        border-bottom:
            1px solid rgba(255,255,255,0.08);
    }


    /* ABOUT */

    .about-image-wrap {
        padding:
            0 0 25px 20px;
    }

    .about-image {
        height: 420px;
    }

    .about-experience {
        width: 115px;
        height: 115px;

        right: -3px;
    }

    .about-experience span {
        font-size: 37px;
    }

    .about-features {
        grid-template-columns: 1fr;
    }

    .about-content h2,
    .why-content h2,
    .contact-info h2 {
        font-size: 48px;
    }


    /* COLLECTION */

    .collection-grid {
        grid-template-columns: 1fr;
    }

    .collection-image {
        height: 320px;
    }

    .collection-content {
        padding: 23px;
    }


    /* SERVICES */

    .services-grid {
        grid-template-columns: 1fr;
    }

    .service-card {
        min-height: auto;

        padding: 30px 25px;
    }


    /* CRAFT */

    .craft-section {
        min-height: 500px;

        background-attachment: scroll;
    }


    /* GALLERY */

    .gallery-grid {
        display: grid;

        grid-template-columns: 1fr;

        grid-template-rows:
            repeat(5, 260px);
    }

    .gallery-large,
    .gallery-wide {
        grid-column: auto;
        grid-row: auto;
    }


    /* WHY */

    .why-points {
        grid-template-columns: 1fr;
    }


    /* CONTACT */

    .enquiry-box {
        padding: 28px 20px;
    }

    .form-row {
        grid-template-columns: 1fr;

        gap: 0;
    }

    .enquiry-header h3 {
        font-size: 31px;
    }


    /* CTA */

    .final-cta {
        padding: 80px 0;
    }

    .final-cta h2 {
        font-size: 50px;
    }


    /* FOOTER */

    .footer-main {
        grid-template-columns: 1fr;

        gap: 38px;

        padding-bottom: 40px;
    }

    .footer-bottom {
        flex-direction: column;

        align-items: flex-start;

        gap: 5px;
    }


    /* FLOATING */

    .floating-actions {
        right: 13px;

        bottom: 15px;
    }

    .floating-btn {
        width: 46px;
        height: 46px;
    }

    .floating-btn span {
        display: none;
    }

    .back-to-top {
        right: 14px;

        bottom: 125px;

        width: 38px;
        height: 38px;
    }

}


/* =========================================================
   RESPONSIVE — 400px
========================================================= */

@media (max-width: 400px) {

    .hero-content h1 {
        font-size: 49px;
    }

    .hero-stats {
        gap: 10px;
    }

    .hero-stat strong {
        font-size: 18px;
    }

    .about-content h2,
    .why-content h2,
    .contact-info h2,
    .final-cta h2 {
        font-size: 43px;
    }

    .collection-image {
        height: 280px;
    }

}
