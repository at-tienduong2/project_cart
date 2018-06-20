var user = [
  {
    "id": 1,
    "name": "ngoctien",
    "email": "ngoctien@gmail.com"
  },
  {
    "id": 2,
    "name": "jolly",
    "email": "jolly@gmail.com"
  }
]

$(document).ready(function () {

  $('#quantity').change(function() {
    var $qty = $(this).val();
    console.log($qty);
    var $label = $('#qty-error');
    if ($qty > 0 && $qty <= 50) {
      $label.html('seems resonable');
      $label.css('color', 'green');
      $(this).addClass('valid');
    } else {
      $label.html('Really');
      $label.css('color', 'red');
      $(this).addClass('invalid');
    }

  });

});

$(document).ready(function() {
  $("#submit").attr('disabled', 'disabled');
  $("form").keyup(function() {
    // To Disable Submit Button
    $("#submit").attr('disabled', 'disabled');
    // Validating Fields
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!(name == "" || email == "" || message == "")) {
        if (filter.test(email)) {
        // To Enable Submit Button
        $("#submit").removeAttr('disabled');
        $("#submit").css({
        "cursor": "pointer",
        "box-shadow": "1px 0px 6px #333"
        });
      }
    }

  });

   // dialog
  $('#js-content').dialog({
    autoOpen: false,
    title: 'Basic Dialog'
  });
  $('#js-dialog').click(function() {
    $('#js-content').dialog('open');
  });

  
  // toggle

  var $toggle = $('.toggle');
  if ($toggle.length > 0) {
    $toggle.each(function() {
      var element = $(this),
          elementState = element.attr('data-state');
      if(elementState !== 'open') {
        element.find('.toggle-content').hide();
      } else {
        element.find('.js-togglet').addClass('toggle-action');
      }

      element.find('.js-togglet').click(function() {

        $(this).toggleClass('toggle-action').next('.toggle-content').slideToggle("300");
        return true;
      });


    });
  }

  ///////// toggle accordion

  var $accordionEl = $('.js-accordion');
  if($accordionEl.length > 0) {

    $accordionEl.each(function() {
      var element = $(this),
          elementState = element.attr('data-state'),
          elementActive = element.attr('data-active');

      if (!elementActive) {
        elementActive = 0;
      } else {
        elementActive = elementActive -1;
      }

      element.find('.js-acc_content').hide();
      if (elementState !== 'closed') {
        element.find('.js-acctitle:eq('+ Number(elementActive) +')').next().show();
      }

      element.find('.js-acctitle').click(function() {
        if ($(this).next().is(':hidden')) {
          element.find('.js-acctitle').next().slideUp('normal');
          $(this).next().slideDown('normal');

        }
        return false;
      });
    
    });
  }

});


  // On Click Of Submit Button
$(document).ready(function() {
  
});


$(document).ready(function() {

  $("#submit").click(function() {
    $("#submit").css({
    "cursor": "default",
    "box-shadow": "none"
    });
    alert("Form Submitted Successfully..!!");
  });
 ///////
  var filter = {};
  var $container = $('.grid');
  $container.isotope();
  
  $('.combination-filter').click('.btn', function() {
    var $this = $(this);
    console.log($this);
  });

  // dropdown list
  $('.js-dropdown').click(function() {
    
    if ($('.js-list').is(':hidden')) {
      $('.js-list').addClass('open');
    } else {
      $('.js-list').removeClass('open')
    }
  });
  $(window).click(function(e) {
    if(!e.target.matches('.js-dropdown')) {
      if ($('.js-list').hasClass('open')) {
        $('.js-list').removeClass('open');
      }
    }
  });
  $("#js-progress").each(function(){
    var percentage = parseInt($(this).find('.js-percent').html());
    if(percentage > 0){
      $(this).animate({'width':''+percentage+'%'}, 800);
    }else{
      $(this).css({'color':'black', 'background':'none'}, 800);
    }
  });
  /// progress_bar
  var current_fs, next_fs, previous_fs;
  var left, opacity, scale;
  var animating;

  $('.js-next').click(function() {
    if(animating) {
      return false;
      animating = true;
    }

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    $('#js-progress .js-step').eq($('.form-fieldset').index(next_fs)).addClass('active');
    
    next_fs.show();

    current_fs.animate({
      opacity: 0}, {
      step: function(now, mx) {
        scale = 1 - (1- now) * 0.2;
        left = (now * 50)+ '%';
        opacity = 1 - now;
        current_fs.css({
          'transform': 'scale('+scale+')',
          'position': 'absolute'
        });
        next_fs.css({
          'left': left,
          'opacity': opacity
        });
      },
      duration: 800,
      complete: function() {
        current_fs.hide();
        animating = false;
      },
      easing: 'easeInOutBack'
    });
  });

  $('.js-previous').click(function() {
    if(animating) {
      return false;
      animating = true;
    }

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    $('#js-progress li').eq($('.form-fieldset').index(current_fs)).removeClass('active');

    previous_fs.show();

    current_fs.animate({opacity: 0}, {
      step: function(now, mx) {
        scale = 0.8 + (1 - now) * 0.2;
        left = ((1-now) * 50)+'%';
        opacity = 1 - now;
        current_fs.css({
          'transform': 'scale('+scale+')',
          'display': 'none'
        });
        previous_fs.css({
          'transform': 'scale('+scale+')',
          'opacity': opacity,
          'position': 'initial'
        });
      },
      duration: 800,
      complete: function() {
        current_fs.hide();
        animating = false;
      },
      easing: 'easeInOutBack'
    });

  });

  $('.js-submit').click(function(){
    return false;
  });







});




