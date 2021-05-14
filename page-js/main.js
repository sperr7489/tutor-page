const scrollmenu = document.querySelector(".scrollmenu");
const menuChild = scrollmenu.children;
const menuArr = Array.from(menuChild);
console.log(menuChild);
console.log(menuArr);
menuArr.forEach(element =>{

    element.addEventListener("click", hoverScrollMenu);

    console.log(element);


});

function hoverScrollMenu(element){
    console.log(element.getAttribute("src"));

}