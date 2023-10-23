import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

//import ScrollReveal from 'scrollreveal';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  /*Intro animation*/
const intro = document.querySelector(".intro");
const logo = document.querySelector(".logo-header");
const logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  logoSpan.forEach((span, idx) => {
    setTimeout(() => {
      span.classList.add("appear");
    }, (idx + 1) * 90);
  });

  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.remove("appear");
        span.classList.add("fade");
      }, (idx + 1) * 80);
    });
  }, 1500);

  setTimeout(() => {
    if(intro){
    (intro as HTMLElement).style.top = "-100vh";
  }
  }, 2000);
});

/*Show menu*/
const showMenu = (toggleId: string, navID: string) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navID);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show_menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*Active and remove menu*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction(this: any) {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*This is for removing menu on click on mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu?.classList.remove("show_menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*Auto write text*/

var app = document.getElementById("autoWrite");

// var typewriter = new Typewriter(app, {
//   strings: ["React.js Developer", "Java Developer", "Gym Addict", "Anime Fan"],
//   loop: true,
//   autoStart: true,
// });

/*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//   origin: "top",
//   distance: "40px",
//   duration: 2000,
//   reset: true,
// });

/*SCROLL HOME*/
// sr.reveal(".home_title", {});
// sr.reveal(".button", { delay: 200 });
// sr.reveal(".home_img", { delay: 400 });
// sr.reveal(".home_social-icon", { interval: 200 });

// /*SCROLL ABOUT*/
// sr.reveal(".about_img", {});
// sr.reveal(".about_subtitle", { delay: 400 });
// sr.reveal(".about_text", { delay: 400 });

// /*SCROLL SKILLS*/
// sr.reveal(".skills_subtitle", {});
// sr.reveal(".skills_text", {});
// sr.reveal(".skills_data", { interval: 200 });
// sr.reveal(".skills_img", { delay: 600 });

// /*SCROLL WORK*/
// sr.reveal(".work_img", { interval: 200 });

// /*SCROLL CONTACT*/
// sr.reveal(".contact_input", { interval: 200 });

document.body.classList.toggle("dark");
document.getElementById("head")?.classList.toggle("dark");
