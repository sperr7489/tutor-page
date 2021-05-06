const loginBtn = document.querySelector(".login-page__login-btn");

function pageMove(event)
{
    console.log("버튼이클릭되었다.");
    window.location.replace("main.html");
}

loginBtn.addEventListener("click",pageMove);