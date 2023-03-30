function openMenu() {
    var menu = document.getElementById("dropdownMenu");
    var menuStyle = window.getComputedStyle(menu);
    if (menuStyle.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

window.onclick = function (event) {
    if (!event.target.matches('.right-btns')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}