function closeALL() {
    var nav_0 = document.getElementById('item_div_0');
    var nav_1 = document.getElementById('item_div_1');
    var nav_2 = document.getElementById('item_div_2');
    var nav_3 = document.getElementById('item_div_3');
    var nav_4 = document.getElementById('item_div_4');
    nav_0.style.display = "none";
    nav_1.style.display = "none";
    nav_2.style.display = "none";
    nav_3.style.display = "none";
    nav_4.style.display = "none";
}

function change_look() {
    closeALL();
    var nav_btn = document.getElementById('hamburger');
    var nav = document.getElementById('nav_side_holder');
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
    nav_btn.classList.toggle("open");
}

function change_look_0() {
    closeALL();
    var nav_btn = document.getElementById('hamburger_0');
    var nav = document.getElementById('item_div_0');
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

function change_look_1() {
    closeALL();
    var nav_btn = document.getElementById('hamburger_1');
    var nav = document.getElementById('item_div_1');
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

function change_look_2() {
    closeALL();
    var nav_btn = document.getElementById('hamburger_2');
    var nav = document.getElementById('item_div_2');
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

function change_look_3() {
    closeALL();
    var nav_btn = document.getElementById('hamburger_3');
    var nav = document.getElementById('item_div_3');
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

function change_look_4() {
    closeALL();
    var nav_btn = document.getElementById('hamburger_4');
    var nav = document.getElementById('item_div_4');
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

function credit(){
    alert('CREDITS\n\nKyle Awah: Concept, UI Design & Frontend Development\nKyle Awah: Asset Render (Rendered in Blender)\n\nAlessandro Diamanti (SketchFab): City Asset\nICONS8: Icons');
    /* City Asset by Alessandro Diamanti (SketchFab): https://sketchfab.com/3d-models/low-poly-city-41697300a4c643d089784b8688b2ed2c */
}