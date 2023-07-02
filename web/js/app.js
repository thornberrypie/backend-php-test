$(document).ready(function(){

  // Update todo when the completed checkbox is toggled
  $('.app-completed').click(function() {

    var url = $(this).parent().attr('action');
    var checked = $(this).is(":checked") ? 1 : 0;

    $.post(url, { completed: checked }).done(function(response){
      
      // Reset the message, update the content and class then fade it in, then out
      $('#app-messages').hide().stop().removeClass()
        .html(checked ? 'Todo completed' : 'Todo not completed')
        .addClass(checked ? 'alert-success' : 'alert-warning').addClass('alert')
        .fadeIn().delay(3000).fadeOut();
    });
  })
});