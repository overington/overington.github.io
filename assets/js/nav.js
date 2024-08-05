$(document).ready(function() {
    const menuToggle = $('#menuToggle');
    const menu = $('#menu');
    const overlay = $('#overlay');
  
    menuToggle.on('click', function() {
      menu.toggleClass('open');
      overlay.toggleClass('show');
      menuToggle.toggleClass('open');
    });
  
    overlay.on('click', function() {
      menu.removeClass('open');
      overlay.removeClass('show');
    });
});