document.getElementById("btn_open").addEventListener("click", open_close_menu);
var side_menu = document.getElementById('menu_side');
var btn_open = document.getElementById('btn_open');

function open_close_menu(){
  menu_side.classList.toggle("menu__side_move");
}