// Custom JS
$(document).ready(function(){
  /* ==========================================================================
     Simple Form - Contact Form
     ========================================================================== */

  $('#contact-form').submit(function(){
    $.ajax({
      dataType: 'jsonp',
      url: "http://getsimpleform.com/messages/ajax?form_api_token=9563a1a04a3cb998521d573616201d1c",
      data: $("#contact-form").serialize(),
      error: function() {
        $('#contact-form').hide();
        $('#errormessage').show();
      }
    }).done(function() {
      //callback which can be used to show a thank you message
      //and reset the form
      $('#contact-form').hide();
      $('#successmessage').show();
    });
    return false; //to stop the form from submitting
  });
});