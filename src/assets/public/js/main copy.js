var Manshour = Manshour || {};
Manshour.global = Manshour.global || {};
Manshour.global.init = function () {
  try {
    $(document).on("click", '[href="#"]', function (e) {
      e.preventDefault();
    });
    window.rippler = $.ripple('[data-ripple="ripple"], .area', {
      debug: true,
      multi: true,
    });

    $(".ziehharmonika").ziehharmonika({
      collapsible: true,
      // prefix: "★"
    });

    $(".ziehharmonika h3:eq(0)").ziehharmonika("open", true);
  } catch (e) {
    console.log("Error on Manshour.global.init " + e);
  }
};

Manshour.slides = Manshour.slides || {};
Manshour.slides.init = function () {
  try {
    $(".sliders").owlCarousel({
      loop: true,
      items: 1,
      margin: 0,
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 6000,
      //autoplayHoverPause: true,
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      rtl: true,
      nav: true,
      dots: false,
    });

    $(".carousels").owlCarousel({
      loop: true,
      margin: 20,
      smartSpeed: 600,
      autoplay: true,
      autoplayTimeout: 5000,
      rtl: true,
      nav: false,
      dots: false,
      responsiveClass: true,
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      responsive: {
        0: {
          items: 2,
        },
        574: {
          items: 3,
        },
        767: {
          items: 4,
        },
        991: {
          items: 5,
        },
        1200: {
          items: 6,
        },
        1600: {
          items: 7,
        },
      },
    });

    $(".teacher-carousel").owlCarousel({
      loop: true,
      margin: 40,
      smartSpeed: 800,
      autoplay: true,
      autoplayTimeout: 6000,
      rtl: true,
      nav: true,
      dots: false,
      responsiveClass: true,
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });

    $(".time-carousel").owlCarousel({
      loop: true,
      margin: 50,
      smartSpeed: 800,
      autoplay: true,
      autoplayTimeout: 6000,
      rtl: true,
      nav: true,
      dots: false,
      responsiveClass: true,
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      responsive: {
        0: {
          items: 2,
        },
        767: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });

    $(".ranking-carousel").owlCarousel({
      loop: true,
      margin: 25,
      smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 6000,
      rtl: true,
      nav: true,
      dots: false,
      responsiveClass: true,
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 2,
        },
      },
    });
  } catch (e) {
    console.log("Error on Manshour.slides.init " + e);
  }
};

Manshour.menu = Manshour.menu || {};
Manshour.menu.init = function () {
  try {
    $("#open-menu").on("click", function () {
      $(".menu-aside").addClass("show");
      $(".overal").addClass("show");
    });

    $(".overal").on("click", function () {
      $(".menu-aside").removeClass("show");
      $(".overal").removeClass("show");
      $(".hamburger").removeClass("is-active");
    });

    $(".hamburger").on("click", function () {
      $(this).toggleClass("is-active");
    });
  } catch (e) {
    console.log("Error on Manshour.menu.init " + e);
  }
};

Manshour.tab = Manshour.tab || {};
Manshour.tab.init = function () {
  try {
    var [tabs, tabsPanels] = [
      Array.from(document.querySelectorAll(".tabs li")),
      Array.from(document.querySelectorAll(".tabs-panel")),
    ];

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        var target = document.querySelector(`#${tab.dataset.target}`);
        removeActiveClass([tabs, tabsPanels]);
        tab.classList.add("active");
        target.classList.add("active");
      });
    });

    var removeActiveClass = (el) => {
      el.forEach((item) => {
        item
          .find((e) => e.classList.contains("active"))
          .classList.remove("active");
      });
    };
  } catch (e) {
    console.log("Error on Manshour.tab.init " + e);
  }
};

$(document).ready(function () {
  Manshour.global.init();
  Manshour.slides.init();
  Manshour.menu.init();
});
