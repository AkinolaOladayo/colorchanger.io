  function myFunction(){
    var x = document.getElementById("input").value;

    if (x === 0 || x < 225){
        displayError="You're doing well";
        document.getElementById("displayError").innerHTML = displayError;
        document.getElementById("displayError").style.color = "white";
        document.getElementById("circle").style.backgroundColor = getRandomRgb();
        }

    if ( x > 225){
    displayError = "Egungun be kiaful!!, Please enter a valid number";
    document.getElementById("displayError").innerHTML = displayError;
    document.getElementById("displayError").style.color = "red";
    }

    if (x === ""){
      displayError = "#Don'tleaveme...Please enter a valid number";
      document.getElementById("displayError").innerHTML = displayError;
      document.getElementById("displayError").style.color = "yellow";
      return document.getElementById("circle").style.backgroundColor = "white";
      }

    // else{
    // document.getElementById("circle").style.backgroundColor = getRandomRgb();
    // }
  }
  
  function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    
  }
  for (var i = 0; i < 10; i++) {
    // console.log(getRandomRgb());
  }





