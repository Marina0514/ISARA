$(function() {

  $('.faq-list-item').click(function() {

    var $answer= $(this).find('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
    }else{
      $answer.addClass('open');
      $answer.slideDown('3000');
  };

  });

  $('#scroll-btn').click(function() {

    $('html, body').animate({
      scrollTop: 0}, 500);
  });


   
    $(window).scroll(function () {
      var ScrollStart = $('#scroll-btn');
      if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
          ScrollStart.fadeIn();
      } else {
          ScrollStart.fadeOut();
      };
});

    $('.icon').click(function(){

      var $flow= $(this).find('.flow-text');
      if($flow.hasClass('open-text')) {
        $flow.removeClass('open-text');
        $flow.slideUp();
      }else{
        $flow.addClass('open-text');
        $flow.slideDown('');
    };

});

    
});