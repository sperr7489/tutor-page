const scrollmenu = document.querySelector(".scrollmenu");
const menuChild = scrollmenu.children;
const menuArr = Array.from(menuChild);
console.log(scrollmenu);
console.log(menuChild);
console.log(menuArr);
menuArr.forEach(element =>{

    element.addEventListener("mouseover", mouseoverElement);
    element.addEventListener("mouseout",mouseoutElement);
    element.addEventListener("click",pageMove);
});

const profile = document.querySelector(".profile");

profile.addEventListener("mouseover",mouseoverElement);
profile.addEventListener("mouseout",mouseoutElement);
profile.addEventListener("click",pageMove);


function mouseoverElement(event){

    var target = event.target;
    var source = target.getAttribute('src');   
    var sibling = target.nextElementSibling;

        target.style.opacity = 0.2;
        sibling.style.display = 'block';
        target.style.brightness ='40%';
        var str = source.split('/')[2].split('.')[0];

        console.log(str+".html");

//event는 말그대로 event가 되었을 때를 나타내는것이다. 
}
function mouseoutElement(event){
    var target = event.target;
    var source = target.getAttribute('src');
    var sibling = target.nextElementSibling;

    target.style.opacity = 1.0;
    sibling.style.display = 'none';
    target.style.brightness = '100%';
}

function pageMove(event){
    //클릭시에 페이지를 이동시키는 것.  
    var target = event.target;
    var source =target.getAttribute('src');
    var str = source.split('/')[2].split('.')[0]+".html";

    location.href = "/page/"+str;

}