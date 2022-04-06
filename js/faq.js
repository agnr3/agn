/*-------------------------------------------FAQ------------------------------------------------*/
const accordionBtns = document.querySelectorAll(".item__header");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("active");

    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.classList.toggle(null)
    } else {
      //if the accordion is currently closed
      content.classList.toggle("active")
    }
  };
});
/*----------------------------------------------------------------------------------------------*/