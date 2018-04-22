'use strict';

import SweetScroll from 'sweet-scroll'; // sweet-scroll.js from https://tsuyoshiwada.github.io/sweet-scroll/

require('./scss/main.scss');

document.addEventListener("DOMContentLoaded", () => {

    // sweetScroll

    const scroller = new SweetScroll({
      duration: 1500,
      easing: 'easeOutQuint',
    });

    // ---- close the Mobile Menu and change burger after click on one of the links

    const menuBurger = document.querySelector(".menu-burger");
    const mainNav = document.querySelector(".main-nav");
    const arrayOfNavPositions = document.querySelectorAll(".menu-list li");
    const first = document.querySelector(".first");
    const smallFirst = document.querySelector(".small-first");
    const smallSecond = document.querySelector(".small-second");
    const third = document.querySelector(".third");

    arrayOfNavPositions.forEach( (e) => {
      e.addEventListener("click", () => {
        setTimeout(() => {
          mainNav.classList.remove("main-nav-after");
          first.id = "rotate-counter-left";
          smallFirst.id = "rotate-counter-downward-right";
          smallSecond.id = "rotate-counter-downward-left";
          third.id = "rotate-counter-right";
        },250);
        mainNav.id = "shorten-mobile";
        arrayOfNavPositions.forEach( (e) => {
            e.id = "bounce-back-mobile";
        })
      });
    });

    // ---- show/hide Mobile Menu after clicking on the burger

    menuBurger.addEventListener("click", () => {
      switch (mainNav.id) {
        case "elongate-mobile":
          arrayOfNavPositions.forEach( (e) => {
            e.id = "bounce-back-mobile";
          });
          setTimeout(() => {
            mainNav.id = "shorten-mobile";
            setTimeout(() => {
              mainNav.classList.remove("main-nav-after");
            },250);
          },250);
          first.id = "rotate-counter-left";
          smallFirst.id = "rotate-counter-downward-right";
          smallSecond.id = "rotate-counter-downward-left";
          third.id = "rotate-counter-right";
          break;
        default:
          arrayOfNavPositions.forEach( (e) => {
            e.id = "bounce-mobile";
          });
          mainNav.id = "elongate-mobile";
          mainNav.classList.add("main-nav-after");
          first.id = "rotate-left";
          smallFirst.id = "rotate-downward-right";
          smallSecond.id = "rotate-downward-left";
          third.id = "rotate-right";
      }
    });

    // shows/hides email address after clicking on gmail icon

    const mailIcon = document.querySelector(".header-gmail-logo");
    const mailExpander = document.querySelector(".mail-expand");

    mailIcon.addEventListener("click", function () {
      switch (mailIcon.id) {
        case "move-left":
          mailExpander.style.boxShadow = "none";
          mailExpander.id = "shrink";
          mailIcon.id = "move-back";
          mailExpander.innerText = "";
          break;
        default:
          mailExpander.style.boxShadow = "0px 13px 21px -7px rgba(0, 0, 0, 0.3)";
          mailExpander.id = "expand";
          mailIcon.id = "move-left";
          setTimeout(() => {
            mailExpander.innerText = "matt.kowalski.public@gmail.com";
          },440);
      }
    });

});

