$(document).ready(function() {
  $('.text').hide();

$('#subway').click(function() {
    $('.text').hide();
    $('#subwayText').slideDown();
  });

$('#chrysler').click(function() {
      $('.text').hide();
      $('#buildingText').slideDown();
   });

$('#camera').click(function() {
      $('.text').hide();
      $('#cameraText').slideDown();
    });

$('#bridge').click(function() {
      $('.text').hide();
       $('#bridgeText').slideDown();
     });

});
