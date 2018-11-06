(function() {
  var $img = document.querySelectorAll("img");

  for (var i = 0; i < $img.length; i++) {
    $img[i].addEventListener("click", addBorder);
  }

  function addBorder(e) {
      if(e.target.style.width == '300px'){
        e.stopPropagation();
      }
    e.target.style.border = "thin solid red";
  }

  /////to do document.addEventListener
})();
