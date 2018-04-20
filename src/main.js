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
  const mainNav = document.querySelector(".main-nav");
  const arrayOfNavPositions = document.querySelectorAll(".menu-list li");

  menuBurger.addEventListener("click", () => {
    switch (mainNav.id) {
      case "elongate":
            arrayOfNavPositions.forEach( (e) => {
              e.id = "bounce-back";
            });
            mainNav.id = "shorten";
            break;
      default:
        arrayOfNavPositions.forEach( (e) => {
          e.id = "bounce";
        });
        mainNav.id = "elongate"
    }
  });

  // toggles for header mail animations

  const mailIcon = document.querySelector(".header-gmail-logo");
  const mailExpander = document.querySelector(".mail-expand");

  mailIcon.addEventListener("click", function () {
    switch (mailIcon.id) {
      case "move-left":
        mailExpander.id = "shrink";
        mailIcon.id = "move-back";
        mailExpander.innerText = "";
        break;
      default:
        mailExpander.id = "expand";
        mailIcon.id = "move-left";
        setTimeout(() => {
          mailExpander.innerText = "matt.kowalski.public@gmail.com";
        },700);
    }
  });

});

