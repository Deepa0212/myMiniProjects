// Circle positioning in a div container

var container = document.getElementById("container");
var theThing = document.getElementById("box");

container.addEventListener("click", getClickPosition);

function getClickPosition(e) {
  var parentPosition = getCords(e.currentTarget);
  var xPosition = e.clientX - parentPosition.x - theThing.clientWidth / 2;
  var yPosition = e.clientY - parentPosition.y - theThing.clientHeight / 2;

  theThing.style.left = xPosition + "px";
  theThing.style.top = yPosition + "px";
}

function getCords(el) {
  var xPos = 0;
  var yPos = 0;
  console.log("X and Y axis", el);
  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += el.offsetLeft - xScroll + el.clientLeft;
      yPos += el.offsetTop - yScroll + el.clientTop;
    } else {
      // for all other non-BODY elements
      xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
      yPos += el.offsetTop - el.scrollTop + el.clientTop;
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

//HTML
{
  /* <div class="main" id="container">
<div class="box" id="box"></div> */
}

// function move(e) {
//   console.log("move", e.target.id);
//   var id = e.target.id;
//   id = id.toString();
//   //document.getElementById([id]).style.left = "10px";
//   var element = document.getElementById([id]);
//   element.classList.add("newStyle");
// }
