$('#micropost_content').live('keyup keydown', function(e) {
  var maxLen = 140;
  var left = maxLen - $(this).val().length;
  $('#char-count').html(left);
  if (left < 0) {
    $('#button_id').prop('disabled', true);
    $('#char-count').css('color', 'red');
  }
  else {
  	$('#button_id').prop('disabled', false);
    $('#char-count').css('color', 'black');
}
});