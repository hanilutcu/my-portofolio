function myMenuFuction() {
    var menuBth = document.getElementById ("mynavmenu")

    if (menuBth.className ==="nav-menu"){
        menuBth.className += "responsive";
    } else {
        menuBth.className = "nav-menu";
    }
}

const toggleSwitch = document.querySelector('.moon-sun'); 
const body = document.body;

toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');
});