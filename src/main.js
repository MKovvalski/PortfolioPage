'use strict';

import SweetScroll from 'sweet-scroll'; // sweet-scroll.js from https://tsuyoshiwada.github.io/sweet-scroll/

require('./scss/main.scss');

document.addEventListener("DOMContentLoaded", () => {

  //sweetScroll

  const scroller = new SweetScroll({
    duration: 1500,
    easing: 'easeOutQuint',
    updateURL: 'replace'
  });

  //Show Mobile Menu

  const menuBurger = document.querySelector(".menu-burger");
  const menuMobile = document.querySelector(".main-nav-mobile");

  menuBurger.addEventListener("click", () => {
    switch (menuMobile.id) {
      case "display-block":
            menuMobile.id = "display-none";
            break;
      default:
        menuMobile.id = "display-block"
    }
  })
});

