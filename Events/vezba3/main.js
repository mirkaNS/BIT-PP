var $player = document.querySelector(".player");
var $body = document.querySelector('.body');
$body.addEventListener("click", movePlayer);
var $stop = document.querySelector('.stopMovement');
function movePlayer(event) {
    var initialX = event.clientX;
    var initialY = event.clientY;
  $player.style.left = initialX + 'px';
  $player.style.top = initialY + 'px';
  
}
function stopMoving(){
    $body.removeEventListener('click',movePlayer);
}
$stop.addEventListener('click', stopMoving);
