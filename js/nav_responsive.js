var menu = document.getElementById("menu__responsive1");
var contenedor = document.getElementById("nav__menuresponsivo1");
var close = document.getElementById("menu__responsive2");


menu.addEventListener("click" , () => {
  nav__menuresponsivo1.className = "nav__menuresponsivo active";
});

close.addEventListener("click" , () => {
  nav__menuresponsivo1.className = "nav__menuresponsivo";
});