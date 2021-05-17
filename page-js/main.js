const scrollmenu = document.querySelector(".scrollmenu");
const menuChild = scrollmenu.children;
const menuArr = Array.from(menuChild);
console.log(menuChild);
console.log(menuArr);
menuArr.forEach(element =>{

    element.addEventListener("click", clickScrollMenu);


});

function clickScrollMenu(event){

    var target = event.target;
    var source = target.getAttribute('src');   
    var sibling = target.nextElementSibling;
    if(target.style.opacity == 0.2)
    {
        target.style.opacity = 1;
        sibling.style.display = 'none';
    }
    else{
        target.style.opacity = 0.2;
        sibling.style.display = 'block';
        target.style.brightness ='40%';



    }







//event는 말그대로 event가 되었을 때를 나타내는것이다. 
}