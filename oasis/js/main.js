$(document).ready(function() {

  // 메인상단 배너
  // $('.main_slide').slick({
  //   infinite: true,
  //   pauseOnHover: false,
  //   adaptiveHeight: false,
  //   dots: true,
  //   arrows: true,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // });

  // 플레이 버튼 추가
  // $('.slick-dots').append('<button class="control_btn"></button>')

  // $('.control_btn').click(function() {
  //   if ($(this).hasClass('play')) {
  //     $(this).removeClass('play')
  //     $('.main_slide').slick('slickPlay')
  //   } else {
  //     $(this).addClass('play')
  //     $('.main_slide').slick('slickPause')
  //   }
  // });

  //counting
  var scrollTop = 0;
  $(window).scroll(function() {

    var conTop = $('.oasis_total').offset().top - window.innerHeight + 400;
    if (scrollTop == 0 && $(window).scrollTop() > conTop) {
      $('.count').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },

          { duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }

          });
      });
      scrollTop = 1;
    }

  });

  // 지도 0416 수정
  $('.map_img > a').click(function(e) {
      e.preventDefault();
      $('.area_info > ul > li').hide();
      $('.map_img > a').removeClass('on');
      $(this).addClass('on');
      $($(this).attr('href')).show();
  });

  
  // 파트너 sorting
  var $btns = $('.partner_tab ul li a').click(function(e) {
    e.preventDefault();
    if (this.id == 'all_view') {
      $('.partner_list li').fadeIn(450);
    } else {
      var $el = $('.' + this.id).fadeIn(450);
      $('.partner_list li').not($el).hide();
    }
    $btns.parent().removeClass('active');
    $(this).parent().addClass('active');
  });

  // 공지사항 팝업 닫기
  $('.notice_pop .pop_close').click(function() {
    $('.notice_pop').hide()
  });

});