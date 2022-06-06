/*smoove move to the order form*/ 
$(document).ready(function(){
    $("body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

/*button arrow tp up*/
var btn = $('#button-up');

$(window).scroll(function() {
  if ($(window).scrollTop() > 10) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '10');
});