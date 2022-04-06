/*// function([string1, string2],target id,[color1,color2])
consoleText(["Servicio técnico", "Reparaciones", "Soluciones informáticas" , "Río Tercero"], "text", [
  "tomato",
  "rebeccapurple",
  "lightblue",
  "pink"
]);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";

      visible = true;
    }
  }, 400);
}
*/

/*document.getElementById("btn_open").addEventListener("click", open_close_menu);
var side_menu = document.getElementById('menu_side');
var btn_open = document.getElementById('btn_open');

function open_close_menu(){
  menu_side.classList.toggle("menu__side_move");
}*/



/*const BTN = document.querySelector("button");

const TOGGLE = () => {
  BTN.setAttribute(
    "aria-pressed",
    BTN.getAttribute("aria-pressed") === "true" ? "false" : "true"
  );
};

BTN.addEventListener("click", TOGGLE);*/
/*---------------------------------Botton-subir------------------------------------------------*/
buttonUp = document.getElementById("boton__arriba");
document.getElementById("boton__arriba").addEventListener("click", scrollUp);

function scrollUp(){
  var currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0){
    window.requestAnimationFrame(scrollUp);
    window.scrollTo (0, currentScroll - (currentScroll / 5));
    buttonUp.style.transform = "scale(0)";
  }
}

window.onscroll = function(){
  var scroll = document.documentElement.scrollTop;
  if (scroll > 500){
    buttonUp.style.transform = "scale(1)";
  } else if(scroll < 500){
    buttonUp.style.transform = "scale(0)";
  }
}
/*------------------------------------------------------------------------------------------------*/

