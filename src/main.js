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

    // entry animation removal

    const gmailLogo = document.querySelector(".header-gmail-logo");
    const cvLogo = document.querySelector(".header-cv-logo");

    setTimeout(() => {
      gmailLogo.style.opacity = "1";
      gmailLogo.classList.remove("bounce-in-1");
      cvLogo.style.opacity = "1";
      cvLogo.classList.remove("bounce-in-4");
      first.style.opacity = "1";
      first.classList.remove("burger-bar-elongate");
      third.style.opacity = "1";
      third.classList.remove("burger-bar-elongate-1");
      smallFirst.style.opacity = "1";
      smallFirst.classList.remove("burger-small-bar-elongate");
      smallSecond.style.opacity = "1";
      smallSecond.classList.remove("burger-small-bar-elongate");
    },2700);

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


     //  copies email by clicking on gmail icon -- credit: css-tricks.com

    const mailDownLoad = document.querySelector(".header-gmail-logo");
    const mailText = document.querySelector(".mail-text");
    const copyAlert = document.querySelector(".copy-alert");
    const copyAlertTitle = document.querySelector(".alert-title");
    const copyAlertText = document.querySelector(".alert-text");

    // classes names
    const buttonDisabled = "button-hover-disabled";
    const buttonEnabled = "button-hover-enabled";
    const inputIncorrect = "form-input-name-focus-incorrect";
    const inputCorrect = "form-input-name-focus-correct";

    mailDownLoad.addEventListener("click", () => {
      let range = document.createRange();
      range.selectNode(mailText);
      window.getSelection().addRange(range);
      try {
        let successful = document.execCommand('copy');
        let msg = successful ? 'successful' : 'unsuccessful';
        // move-in notification if email got copied
        copyAlertTitle.classList.add("alert-title-notification");
        copyAlertTitle.innerText = "notification";
        copyAlertText.innerText = "You have successfully copied the email address";
        copyAlert.id = "move-in";
      } catch(err) {
        // move-in warning if email did not get copied
        copyAlertTitle.classList.add("alert-title-warning");
        copyAlertTitle.innerText = "warning";
        copyAlertText.innerText = "Failed to copy email address";
        copyAlert.id = "move-in"
      }
      window.getSelection().removeAllRanges();
      // moves out the notification/alert
      setTimeout(() => {
        copyAlert.id = "none"
      },4500);
    });

    // enables/disables button on verification and changes button styles

    const inputName = document.querySelector(".form-input-name");
    const inputMail = document.querySelector(".form-input-email");
    const submitButton = document.querySelector(".contact-form-button");

    // default button setting
    submitButton.disabled = true;

    // switches classes for button on focus
    inputName.addEventListener("focus", () => {
      if (inputName.value === "") {
        submitButton.classList.add(buttonDisabled);
        inputName.classList.add(inputIncorrect);
      } else {
        inputName.classList.add(inputCorrect);
      }
    });

    inputMail.addEventListener("focus", () => {
      if (!inputMail.value.indexOf('@') > -1) {
        submitButton.classList.add(buttonDisabled);
        inputMail.classList.add(inputIncorrect);
      } else {
        inputMail.classList.add(inputCorrect);
      }
    });

    // switches classes for button on focusout
    inputName.addEventListener("focusout", () => {
      if (inputName.value !== "") {
        inputName.classList.remove(inputIncorrect);
        inputName.classList.add(inputCorrect);
      } else {
        inputName.classList.remove(inputIncorrect);
        inputName.classList.remove(inputCorrect);
        submitButton.classList.remove(buttonDisabled);
        if (inputMail.value.indexOf('@') > -1) {
          submitButton.classList.add(buttonDisabled);
        }
      }
    });

    inputMail.addEventListener("focusout", () => {
      if (inputMail.value.indexOf('@') > -1) {
        inputMail.classList.remove(inputIncorrect);
        inputMail.classList.add(inputCorrect);
      } else {
        if (inputMail.value === "") {
          inputMail.classList.remove(inputIncorrect);
          if (inputName.value === "") {
            submitButton.classList.remove(buttonDisabled);
          }
        } else {
          inputMail.classList.add(inputIncorrect);
        }
      }
    });

    // input name validation
    function inputCheckName (element) {
      element.addEventListener("input", () => {
        if (element.value !== "") {
          element.classList.remove(inputIncorrect);
          element.classList.add(inputCorrect);
        } else {
          element.classList.remove(inputCorrect);
          element.classList.add(inputIncorrect);
        }
        if (element.value !== "" && inputMail.value.indexOf('@') > -1) {
          //add green color and enable button
          submitButton.disabled = false;
          submitButton.classList.remove(buttonDisabled);
          submitButton.classList.add(buttonEnabled);
        } else {
          //remove green, add red and disable button
          submitButton.disabled = true;
          submitButton.classList.remove(buttonEnabled);
          submitButton.classList.add(buttonDisabled);
        }
        if (inputName.value === "" && inputMail.value === "") {
          //return button to default state
          submitButton.classList.remove(buttonEnabled);
        }
      })
    }

    // input mail validation
    function inputCheckMail (element) {
      element.addEventListener("input", () => {
        if (element.value.indexOf('@') > -1) {
          element.classList.remove(inputIncorrect);
          element.classList.add(inputCorrect);
        } else {
          element.classList.remove(inputCorrect);
          element.classList.add(inputIncorrect);
        }
        if (inputName.value !== "" && element.value.indexOf('@') > -1) {
          //add green color and enable button
          submitButton.disabled = false;
          submitButton.classList.remove(buttonDisabled);
          submitButton.classList.add(buttonEnabled);
        } else {
          //remove green, add red and disable button
          submitButton.disabled = true;
          submitButton.classList.remove(buttonEnabled);
          submitButton.classList.add(buttonDisabled);
        }
        if (inputName.value === "" && inputMail.value === "") {
          //return button to default state
          submitButton.classList.remove(buttonEnabled);
        }
      })
    }

    inputCheckName(inputName);
    inputCheckMail(inputMail);

});



