'use strict';

const window = require('global/window');
const document = require('global/document');

let $headerWrapper = document.getElementsByClassName('js-header-wrapper');
let $thisMenu = document.querySelector('.js-hamburger-menu');
export let mobileMenu = '.js-mobile-menu-cont';
let $mobileMenuCont = document.querySelector(mobileMenu);
let $thisOverlay = document.querySelector('.js-mobile-menu-overlay');
let menuAccordion = 'js-accordion-toggle';
let $menuState = document.querySelector('.js-menu-state');
let classMenuState = 'header--menu-active';

window.addEventListener('load', init);
window.addEventListener('resize', responsiveHandler);

function burgerMenuAction() {
    if ($thisMenu) {
        $thisMenu.addEventListener('click', function () {
            toggleMobileMenu(this);
        });
    }
}

const getAccordionItems = () =>
    Array.from(document.getElementsByClassName(menuAccordion));

export const initAccordionHandlers = () => {
    getAccordionItems().forEach((node: any) => {
        node.addEventListener('click', toggleAccordion, false);
    });
};

function toggleAccordion() {
    let $this = this.parentNode;

    if (!$this.classList.contains('js-open')) {
        getAccordionItems().forEach((node: any) =>
            node.parentNode.classList.remove('js-open')
        );
    }
    if ($this.classList.contains('js-open')) {
        $this.classList.remove('js-open');
    } else {
        $this.classList.toggle('js-open');
    }

    scrollToTop();
}

function overlayAction() {
    if ($thisOverlay === null) {
        return;
    }
    $thisOverlay.addEventListener('click', function () {
        if ($thisMenu) {
            toggleMobileMenu($thisMenu);
        }
    });
}

function toggleMobileMenu(element) {
    if (!element.classList.contains('open')) {
        element.classList.add('open');
        $menuState.classList.add(classMenuState);
    } else {
        element.classList.remove('open');
        $menuState.classList.remove(classMenuState);
    }

    displayToggle(mobileMenu);
    setOverlayHeight();
}

function anchorAction() {
    if ($thisMenu) {
        const menuAnchor = $thisMenu.querySelector('a');
        if (menuAnchor) {
            menuAnchor.addEventListener('click', function (e) {
                e.preventDefault();
            });
        }
    }
}

function displayToggle(element) {
    const el = document.querySelector(element);

    if (el === null) {
        return;
    }

    if (el.style.display === 'none' || el.style.display === '') {
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    }
}

function setOverlayHeight() {
    if ($thisOverlay === null) {
        return;
    }
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    );
    $thisOverlay.style.height = `${height}px`;
}

function scrollToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function responsiveHandler() {
    if ($thisMenu) {
        if (
            $menuState.classList.contains(classMenuState) &&
            window.innerWidth <= 767
        ) {
            $thisMenu.classList.add('open');
            $mobileMenuCont.style.display = 'block';
        } else {
            $thisMenu.classList.remove('open');
            $mobileMenuCont.style.display = 'none';
        }
        setOverlayHeight();
    }
}

function init() {
    setOverlayHeight();
    burgerMenuAction();
    overlayAction();
    anchorAction();
    initAccordionHandlers();

    // to load mobile menu font
    $mobileMenuCont.style.display = 'none';
    $mobileMenuCont.style.opacity = '1';
    $mobileMenuCont.style.zIndex = '999';

    // commented by LMS-14955
    /*if ($headerWrapper.length) {
        $headerWrapper[0].style.zIndex = '2';
    }*/
}
