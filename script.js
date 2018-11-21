var a = 0;
var step = 1;
var w = 20; //storrelsen til en
var amount = 30; //antall diver i hver dimensjon
var padding = 0;

document.getElementById("parent").style.height = amount * w;
document.getElementById("parent").style.width = amount * w;

noise.seed(Math.random());

var boxes = [];

function setup() {
  var parent = document.getElementById("parent");
  for (var x = 0; x < amount; x++) {
    for (var y = 0; y < amount; y++) {
       var div = document.createElement("div");
       parent.appendChild(div);
       div.classList.add("box");
       div.setAttribute("id", (y * amount + x));
       if (w <= 20) {
         var temp = w;
       } else {
         temp = w/2;
       }
       div.style.top = y*w + padding * y + temp;
       div.style.left = x*w + padding * x + temp;
       div.style.width = (100/amount).toString() + "%";
       div.style.height = (100/amount).toString() + "%";

    }
  }
  setInterval(function(){draw(); }, 20);
}


function draw() {
  for (var x = 0; x < amount; x++) {
    for (var y = 0; y < amount; y++) {
      var i = (y * amount + x);
      var div = document.getElementById(i.toString())
      var n = noise.simplex3(x / 20, y / 20, a / 100);
      //div.style.transform = "rotate(" + (360 * n).toString() + "deg)";
      div.style.transform = "scale(" + (w * 0.05 * n).toString() + ")";
    }
  }
  a += step;
}

window.onload = function(){
  setup();
}
