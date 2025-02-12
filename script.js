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
const imageUrl = "hani.PNG.png"; 
const pdfUrl = "tugas1.pdf"; 

function openPDF(pdfFile) {
    window.open(pdfFile, "_blank"); // Membuka PDF di tab baru
}


