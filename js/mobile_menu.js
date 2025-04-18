function change_look() {
    var nav_btn = document.getElementById('hamburger');
    var nav = document.getElementById('nav_side_holder');

    // Function to close the navigation
    function closeNav() {
        nav.style.display = "none";
        nav_btn.classList.remove("open");
    }

    // Toggle navigation visibility on hamburger button click
    if (nav.style.display === "block") {
        closeNav();
    } else {
        nav.style.display = "block";
        nav_btn.classList.add("open");
    }

    // Close navigation on window resize
    window.addEventListener('resize', function() {
        closeNav();
    });
}