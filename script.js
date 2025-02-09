function myMenuFuction() {
    var menuBth = document.getElementById ("mynavmenu")

    if (menuBth.className ==="nav-menu"){
        menuBth.className += "responsive";
    } else {
        menuBth.className = "nav-menu";
    }
}

const body = document.querySelector("body"),
toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
}
);