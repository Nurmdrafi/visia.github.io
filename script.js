/// AOS JS /// ==>

AOS.init();

/// ISOTOPE JS /// ==>

// init Isotope {***}
let $grid = $(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
});

// filter functions
let filterFns = {
  ium: function () {
    let name = $(this).find(".name").text();
    return name.match(/ium$/);
  },
};

// bind filter button click {***}
$(".filters-button-group").on("click", "button", function () {
  let filterValue = $(this).attr("data-filter");

  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({
    filter: filterValue,
  });
});

// change is-checked class on buttons {***}

$(".button-group").each(function (i, buttonGroup) {
  let $buttonGroup = $(buttonGroup);
  $buttonGroup.on("click", "button", function () {
    $buttonGroup.find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
  });
});

/// CLIENT SLIDE SHOW /// ==>

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/// TEXT SLIDER /// ==>

var swiper = new Swiper(".text-slider", {
  direction: "vertical",
  autoplay: {
    delay: 1800,
  },
});

/// Preloader /// ==>

$(window).on("load", function () {
  $(".preloader-inner").fadeOut();
  $("#preloader").delay(600).fadeOut();
});

/// Smooth scrolling /// ==>

$("nav a").on("click", function () {
  var scrollAnchor = $(this).attr("data-scroll"),
    scrollPoint =
      $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 65;

  $("body,html").animate(
    {
      scrollTop: scrollPoint,
    },
    500
  );

  return false;
});

/// Navigation change on scroll /// ==>

$(window).scroll(function () {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 0) {
    //This value must be "0" for active #Home by default//
    $(".wrapper section").each(function (i) {
      if ($(this).position().top <= windscroll + 70) {
        $(".navbar-nav a.active").removeClass("active");
        $(".navbar-nav a").eq(i).addClass("active");
      }
    });
  } else {
    $(".navbar-nav a.active").removeClass("active");
    $(".navbar-nav a:first").addClass("active");
  }
});
