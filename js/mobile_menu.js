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
    alert('CREDITS\n\nKyle Awah: Concept, UI Design & Frontend Development\nKyle Awah: Asset Render (Rendered in Blender)\n\nAlessandro Diamanti (SketchFab): City Asset\nICONS8: Icons');
    /* City Asset by Alessandro Diamanti (SketchFab): https://sketchfab.com/3d-models/low-poly-city-41697300a4c643d089784b8688b2ed2c */
}