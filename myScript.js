
function myMove(element) {
    img = element;
    element.style.transform = "scale(1.1)";
        // Animation effect 
        element.style.transition = "transform 0.25s ease";
  }

  function goBack(){
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
  }