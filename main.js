(function() {
  "use strict";

  var game;
  window.addEventListener('load', function() {
    var renderer = new Renderer(document.getElementById('the-game'));
    game = new Game(renderer);
    mainLoop();
  });

  function mainLoop() {
    game.loop();
    requestAnimationFrame(mainLoop);
  }
})();