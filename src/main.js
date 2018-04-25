'use strict';

//imports

import SweetScroll from 'sweet-scroll'; // sweet-scroll.js from https://tsuyoshiwada.github.io/sweet-scroll/
import Sass from "./scss/main.scss";

// events

document.addEventListener("DOMContentLoaded", () => {

    // sweetScroll

    const scroller = new SweetScroll({
      duration: 1500,
      easing: 'easeOutQuint',
      updateURl: true
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

    // shows/hides text about mail copying on mouseover/mouseout

    const mailIcon = document.querySelector(".header-gmail-logo");
    const mailExpander = document.querySelector(".mail-expand");

    mailIcon.addEventListener("mouseover", () => {
      mailExpander.id = "expand";
    });

    mailIcon.addEventListener("mouseout", () => {
      mailExpander.id = "shrink";
    });

    // shows/hides info about downloading resume on click

    const cvIcon = document.querySelector(".header-cv-logo");
    const cvExpander = document.querySelector(".cv-expand");

    cvIcon.addEventListener("mouseover", () => {
      cvExpander.id = "expand";
    });

    cvIcon.addEventListener("mouseout", () => {
      cvExpander.id = "shrink";
    });


     //  copies email by clicking on gmail icon

    const mailDownLoad = document.querySelector(".header-gmail-logo");
    const mailText = document.querySelector(".mail-text");
    const copyAlert = document.querySelector(".copy-alert");

    mailDownLoad.addEventListener("click", () => {
      let range = document.createRange();
      range.selectNode(mailText);
      window.getSelection().addRange(range);
      document.execCommand("copy");
      // moves in the alert
      copyAlert.id = "move-in";
      window.getSelection().removeAllRanges();
      // moves out the alert
      setTimeout(() => {
        copyAlert.id = "none"
      },4500);
    });

    // changes enables/disables button on verification and changes button styles

    const inputName = document.querySelector(".form-input-name");
    const inputMail = document.querySelector(".form-input-email");
    const submitButton = document.querySelector(".contact-form-button");

    submitButton.disabled = true;
    submitButton.classList.add("button-hover-disabled");

    function inputCheckName (element) {
      element.addEventListener("input", () => {
        if (element.value !== "" && inputMail.value.indexOf('@') > -1) {
          submitButton.disabled = false;
          submitButton.classList.remove("button-hover-disabled");
          submitButton.classList.add("button-hover-enabled");
        } else {
          submitButton.disabled = true;
          submitButton.classList.remove("button-hover-enabled");
          submitButton.classList.add("button-hover-disabled");
        }
      })
    }

    function inputCheckMail (element) {
      element.addEventListener("input", () => {
        if (inputName.value !== "" && element.value.indexOf('@') > -1) {
          submitButton.disabled = false;
          submitButton.classList.remove("button-hover-disabled");
          submitButton.classList.add("button-hover-enabled");
        } else {
          submitButton.disabled = true;
          submitButton.classList.remove("button-hover-enabled");
          submitButton.classList.add("button-hover-disabled");
        }
      })
    }

    inputCheckName(inputName);
    inputCheckMail(inputMail);

});



