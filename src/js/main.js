
console.log(screen.width);
if (screen.width < 480) {
  document.querySelector(".mobile").classList.remove("hideimg");
  document.querySelector("#tooltip-mobile").classList.remove("hide");
  document.querySelector(".tooltip").innerHTML = fill_info(mapData[0],"mobile");
  if (document.querySelector(".selected")) document.querySelector(".selected").classList.remove("selected");
} else if (screen.width <= 768) {
  document.querySelector(".ipad").classList.remove("hideimg");
} else {
  document.querySelector(".desktop").classList.remove("hideimg");
}

function fill_info(data,appendix){
  var html = "<div class='address-group'><div class='name'>"+data.name+"<i class='fa fa-times' aria-hidden='true' id='close-button-"+appendix+"'></i></div><div class='address'>"+data.address+"</div><div class='rooftop-img'><img src='./assets/photos/"+data.photo+"?'></div><div class='caption'>John King / The Chronicle</div><div class='desc'>"+data.description+"</div>";
  return html;
}

// clicking for mobile map interactive
var qsa = s => Array.prototype.slice.call(document.querySelectorAll(s));
qsa(".map-group-mobile").forEach(function(group,index) {
  group.addEventListener("click", function(e) {
    document.querySelector("#tooltip-mobile").classList.remove("hide");
    document.querySelector(".tooltip").innerHTML = fill_info(mapData[index],"mobile");
    if (document.querySelector(".selected")) document.querySelector(".selected").classList.remove("selected");
    e.target.parentElement.classList.add("selected");
    // var tooltip = document.querySelector("#tooltip-mobile");
    // var bounds = this.getBoundingClientRect();
    // var x = e.clientX/2;// - bounds.left;
    // var y = e.clientY/2;// - bounds.top;
    // tooltip.style.left = x + 10 + "px";
    // tooltip.style.top = y - 10 + "px";
    // tooltip.classList[x > bounds.width / 2 ? "add" : "remove"]("flip");

    document.querySelector('#close-button-mobile').addEventListener('click', function(){
      document.querySelector("#tooltip-mobile").classList.add("hide");
    });
  });
});

// clicking for desktop map interactive
var qsa = s => Array.prototype.slice.call(document.querySelectorAll(s));
qsa(".map-group-ipad").forEach(function(group,index) {
  group.addEventListener("click", function(e) {
    document.querySelector("#tooltip-ipad").classList.remove("hide");
    document.querySelector("#tooltip-ipad").innerHTML = fill_info(mapData[index],"ipad");
    if (document.querySelector(".selected")) document.querySelector(".selected").classList.remove("selected");
    e.target.parentElement.classList.add("selected");
    var tooltip = document.querySelector("#tooltip-ipad");
    var bounds = this.getBoundingClientRect();
    var x = e.clientX/2;// - bounds.left;
    var y = e.clientY/4;// - bounds.top;
    tooltip.style.left = x + 10 + "px";
    tooltip.style.top = y + 90+ "px";
    // tooltip.classList[x > bounds.width / 2 ? "add" : "remove"]("flip");

    document.querySelector('#close-button-ipad').addEventListener('click', function(){
      document.querySelector("#tooltip-ipad").classList.add("hide");
    });
  });
});

// clicking for desktop map interactive
var qsa = s => Array.prototype.slice.call(document.querySelectorAll(s));
qsa(".map-group-desktop").forEach(function(group,index) {
  group.addEventListener("mouseover", function(e) {
    document.querySelector("#tooltip-desktop").classList.remove("hide");
    // console.log(group.title);
    document.querySelector("#tooltip-desktop").innerHTML = fill_info(mapData[index],"desktop");
    if (document.querySelector(".selected")) document.querySelector(".selected").classList.remove("selected");
    e.target.parentElement.classList.add("selected");
    var tooltip = document.querySelector("#tooltip-desktop");
    var bounds = this.getBoundingClientRect();
    var x = e.clientX/2;
    var y = e.clientY+40;
    tooltip.style.left = x+"px";
    tooltip.style.top = y+"px";
    // var x = e.clientX/2;// - bounds.left;
    // var y = e.clientY/4;// - bounds.top;
    // tooltip.style.left = x + 80 + "px";
    // tooltip.style.top = y + 200 + "px";
    // tooltip.classList[x > bounds.width / 2 ? "add" : "remove"]("flip");

    document.querySelector('#close-button-desktop').addEventListener('click', function(){
      document.querySelector("#tooltip-desktop").classList.add("hide");
    });
  });
  group.addEventListener("mouseout", function(e) {
    document.querySelector("#tooltip-desktop").classList.add("hide");
  });
});
