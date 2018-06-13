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

})

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
  // On Click Of Submit Button
  $("#submit").click(function() {
  $("#submit").css({
  "cursor": "default",
  "box-shadow": "none"
  });
  alert("Form Submitted Successfully..!!");
  });
});


