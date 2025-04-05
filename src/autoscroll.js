$(document).ready(function(){
  $('a[href^="#"]').on("click", function(event) {
    event.preventDefault();

    let target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").animate({ scrollTop: target.offset().top }, 400, "swing");
    } else {
      $("html, body").animate({ scrollTop: 0 }, 400, "swing"); // Scroll to top if no target were found
    }
  });
});