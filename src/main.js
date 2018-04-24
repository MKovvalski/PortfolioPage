'use strict';

import SweetScroll from 'sweet-scroll'; // sweet-scroll.js from https://tsuyoshiwada.github.io/sweet-scroll/

require('./scss/main.scss');

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

    // shows/hides email address after clicking on gmail icon

    const mailIcon = document.querySelector(".header-gmail-logo");
    const mailExpander = document.querySelector(".mail-expand");

    mailIcon.addEventListener("mouseover", () => {
      // mailExpander.style.boxShadow = "0px 13px 21px -7px rgba(0, 0, 0, 0.3)";
      mailExpander.id = "expand";
    });

    mailIcon.addEventListener("mouseout", () => {
      mailExpander.style.boxShadow = "none";
      mailExpander.id = "shrink";
    });

  //  copies email by clicking on gmail icon

    const mailDownLoad = document.querySelector(".header-gmail-logo");
    const mailText = document.querySelector(".mail-text");

    mailDownLoad.addEventListener("click", () => {
      let range = document.createRange();
      range.selectNode(mailText);
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
    });

    // changes enables/disables button on verification and changes button styles

    const inputName = document.querySelector(".form-input-name");
    const inputMail = document.querySelector(".form-input-email");
    const submitButton = document.querySelector(".contact-form-button");

    submitButton.disabled = true;

    function inputCheckName (element) {
      element.addEventListener("input", () => {
        if (element.value !== "" && inputMail.value.indexOf('@') > -1) {
          submitButton.disabled = false;
          submitButton.classList.remove("button-hover-disabled");
          submitButton.classList.add("button-hover-enabled");
          submitButton.style.backgroundColor = "#00cc44";
          submitButton.style.border = "1px solid #00cc44";
          submitButton.style.boxShadow = "1px 1px #00802b, 1.1px 1.1px #003311";
        } else {
          submitButton.disabled = true;
          submitButton.classList.remove("button-hover-enabled");
          submitButton.classList.add("button-hover-disabled");
          submitButton.style.backgroundColor = "#ff4d4d";
          submitButton.style.border = "1px solid #ff4d4d";
          submitButton.style.boxShadow = "1px 1px #e60000, 1.1px 1.1px #800000";
        }
      })
    }

    function inputCheckMail (element) {
      element.addEventListener("input", () => {
        if (inputName.value !== "" && element.value.indexOf('@') > -1) {
          submitButton.disabled = false;
          submitButton.classList.remove("button-hover-disabled");
          submitButton.classList.add("button-hover-enabled");
          submitButton.style.backgroundColor = "#00cc44";
          submitButton.style.border = "1px solid #00cc44";
          submitButton.style.boxShadow = "1px 1px #00802b, 1.1px 1.1px #003311";
        } else {
          submitButton.disabled = true;
          submitButton.classList.remove("button-hover-enabled");
          submitButton.classList.add("button-hover-disabled");
          submitButton.style.backgroundColor = "#ff4d4d";
          submitButton.style.border = "1px solid #ff4d4d";
          submitButton.style.boxShadow = "1px 1px #e60000, 1.1px 1.1px #800000";
        }
      })
    }

    inputCheckName(inputName);
    inputCheckMail(inputMail);

});



