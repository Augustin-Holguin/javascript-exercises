function scrollUp() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $("header").css('background', '#f4f7f9');
          $("header").css('color', '#59626a');
          $("header img").css('visibility', 'visible');
       } else {
          $("header").css('background', '#f66a6b');
          $("header").css('color', '#f66a6b');
          $("header img").css('visibility', 'hidden');
       }
   });
    }
});

function goToSection() {
  var maths = document.getElementById("");
  var regex = document.getElementById("");
  var dom = document.getElementById("");
}
