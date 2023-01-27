// tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
// popovers
$(function () {
  $('#metric-info').popover({
      html: true,
      content: function() {
          return $('#metric-info--content').html();
      }
  });
  $('#scite-info').popover({
      html: true,
      content: function() {
          return $('#scite-info--content').html();
      }
  });
  $('#scite-info--popover-action').popover({
      html: true,
      content: function() {
          return $('#scite-info--popover-content').html();
      }
  });
  $('#scite-section--popover-action').popover({
      html: true,
      content: function() {
          return $('#scite-info--popover-content').html();
      }
  });
    
  $('.scite-info--popover-action').popover({
      html: true,
      content: function() {
          return $('.scite-info--popover-content').html();
      }
  });
  $('#option-1').popover({
      html: true,
      content: function() {
          return $('#option-1--details').html();
      }
  });
  $('#option-2').popover({
      html: true,
      content: function() {
          return $('#option-2--details').html();
      }
  });
  $('#option-3').popover({
      html: true,
      content: function() {
          return $('#option-3--details').html();
      }
  });
  $('#option-1-alt').popover({
      html: true,
      content: function() {
          return $('#option-1-alt--details').html();
      }
  });
})
// form validation
$(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
});
