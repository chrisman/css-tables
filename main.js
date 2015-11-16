$(document).ready(function(){
  console.log('ready');
  $('td').each(function(i){
    if ($(this).text() == 'W') {
      $(this).addClass('win');
      console.log(i + ': winner');
    } else if ($(this).text() == 'L') {
      $(this).addClass('lose');
    } else if ($(this).text() == 'T') {
      $(this).addClass('tie');
    }
  });
});
