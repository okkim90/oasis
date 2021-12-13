$(document).ready(function() {

  //  header scroll
  $(function() {
    var fixedHeader = 90;
    $(window).scroll(function() {
      var scroll = getCurrentScroll();
      if (scroll >= fixedHeader) {
        $('.header').addClass('bg_change');
      } else {
        $('.header').removeClass('bg_change');
      }
    });

    function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
    }
  });

  //  행사소식 팝업
  var $status = $('.slider_num span');
  var $slickElement = $('.event_slide ul');

  $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $(this).parent().find('.slider_num span.current').text('0' + i);
    $(this).parent().find('.slider_num span.total').text('0' + slick.slideCount);
  });

  $slickElement.slick({
    slide: '.slide_li',
    infinite: true,
    autoplay: false,
    dots: false,
    arrows: true
  });

  // 기업정보 탭
  $('.company_wrap > .company_list').first().show();
  $('.company_tab li a').click(function(e) {
    e.preventDefault();
    $('.company_wrap > .company_list').hide();
    $('.company_tab li').removeClass('on');
    $(this).parent().addClass('on');
    $($(this).attr('href')).show();
  });

  // 약관 탭
  $('.agreement_wrap > .agreement_list').first().show();
  $('.agreement_tab li a').click(function(e) {
    e.preventDefault();
    $('.agreement_wrap > .agreement_list').hide();
    $('.agreement_tab li').removeClass('active');
    $(this).parent().addClass('active');
    $($(this).attr('href')).show();
  });

  // like 토글
  $('.like').click(function() {
    if ($(this).hasClass('pick')) {
      $(this).removeClass('pick')
    } else {
      $(this).addClass('pick')
    }
  });


  // file 업로드
  var uploadFile = $('.fileBox .uploadBtn');
  uploadFile.on('change', function() {
    if (window.FileReader) {
      var filename = $(this)[0].files[0].name;
    } else {
      var filename = $(this).val().split('/').pop().split('\\').pop();
    }
    $(this).siblings('.fileName').val(filename);
  });


  // breadcrumb_select
  $('.breadcrumb_select label').click(function() {
    $('.breadcrumb_list').toggleClass('active');
  });

  // 약관정보 
  $('.agreement_summary .summary_wrap').each(function() {
    $(this).find('a').click(function(e) {
      e.preventDefault();
      if ($(this).parent().find('.summary_con').css("display") == "none") {
            $(this).parent().find('.summary_con').slideDown();
            $(this).parent().siblings().find('.summary_con').slideUp("slow");
            $(this).addClass('on')
            $(this).parent().siblings().find('a').removeClass('on')
        } else {
            $(this).parent().find('.summary_con').slideUp();
            $(this).removeClass('on')
        }
    });
  });

  // 라디오 기관분류 선택 0807
  $('.company_rad,.company_rad_current,.company_rad_info').hide()
  $('.sort_con input:radio[name=categorize]').change(function() {
    var optionValue = $(this).val()
    if (optionValue == "personal") {
      $('.personal_rad,.application_rad').show();
      $('.company_rad,.company_rad_current,.company_rad_info').hide();
    } else if (optionValue == "company") {
      $('.company_rad,.company_rad_info').show();
      $('.personal_rad,.application_rad,.sort_con .company_rad_current').hide();
    };

  });

  // 기업정보 유무 0807 
  $('.sort_member input:radio[name=info]').change(function() {
    var optionInfo = $(this).val()
    if (optionInfo == "new") {
      $('.sort_con .company_rad,.company_rad_info').show();
      $('.sort_con .company_rad_current').hide();
    } else if (optionInfo == "current") {
      $('.sort_con .company_rad_current,.company_rad_info').show();
      $('.sort_con .company_rad').hide();
      
    }

  });

  // radio 국가 유형 기타
  $('#other').hide()
  $('.select_na input[type=radio][id^=nation]').change(function() {
    var optionValue = $(this).val();
    if (optionValue == "other") {
      if (this.checked) {
        $('#other').show();
      } else {
        $('#other').hide();
      }
    } else {
      $('#other').hide();
    }
  });

});
