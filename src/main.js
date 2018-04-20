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
  // const first = document.querySelector(".first");
  // const second = document.querySelector(".menu-burger-line-wrapper");
  // const smallFirst = document.querySelector(".small-first");
  // const smallSecond = document.querySelector(".small-second");
  // const third = document.querySelector(".third");

  arrayOfNavPositions.forEach( (e) => {
    e.addEventListener("click", () => {
      mainNav.id = "shorten";
      arrayOfNavPositions.forEach( (e) => {
        e.id = "bounce-back";
      })
    });
  });

  menuBurger.addEventListener("click", () => {
    switch (mainNav.id) {
      case "elongate":
            arrayOfNavPositions.forEach( (e) => {
              e.id = "bounce-back";
            });
            mainNav.id = "shorten";
            // first.id = "rotate-counter-left";
            // second.id = "move-down";
            // smallFirst.id = "rotate-counter-downward-right";
            // smallSecond.id = "rotate-counter-downward-left";
            // third.id = "rotate-counter-right";
            break;
      default:
        arrayOfNavPositions.forEach( (e) => {
          e.id = "bounce";
        });
        mainNav.id = "elongate";
        // first.id = "rotate-left";
        // second.id = "move-up";
        // smallFirst.id = "rotate-downward-right";
        // smallSecond.id = "rotate-downward-left";
        // third.id = "rotate-right";
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
        },440);
    }
  });

});

