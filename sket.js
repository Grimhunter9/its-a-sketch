var aaaa = document.getElementById("box");
document.getElementById("enter").addEventListener("mouseover",function(){
  var x=document.getElementById("bar").value;
  var square = document.createElement("div");
  
  square.classList.add("bo");
  m.appendChild(square);
  square.style.backgroundColor=randomcolors();
}) 
 
document.getElementById("enter").addEventListener("click", function () {
  var x = document.getElementById("bar").value;
  if (x > 0 && x <= 100) {
    var m = document.getElementById("box");

    var wi = 600 / x;

    var elements = document.getElementsByClassName("bo");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }

    for (var i = 0; i < x * x; i++) {
      var square = document.createElement("div");
      square.classList.add("bo");
      square.style.width = wi + "px";
      square.style.height = wi + "px";
      m.appendChild(square);
    }
  } else {
    alert("your number is not between 0 to 100 ");
  }
});
aaaa.addEventListener("mouseover", function (event) {
  event.target.style.backgroundColor = randomcolors();
});

function randomcolors(){
  var color="#";
  var letter="0123456789ABCDEF".split("");
  for(i=0;i<6;i++){
    color+=letter[Math.round(Math.random()*15)];
  }
  return color;
}


