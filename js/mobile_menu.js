function change_look() {
    var nav_btn = document.getElementById('hamburger');
    var nav = document.getElementById('nav_side_holder');
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
    nav_btn.classList.toggle("open");
}

function credit(){
    alert('Kyle Awah: Concept, UI Design & Frontend Development Kyle Awah: 3D Assets (Rendered in Blender) Raphael Frei: Earth Asset ');
}