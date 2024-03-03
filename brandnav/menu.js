function showmenu() {
    document.getElementById('menuoverlay').style.display = "block";

    var innerMenu = document.querySelector('.innermenu');
    innerMenu.style.display = "block";

    var menuItems = innerMenu.querySelectorAll('.menuitems');
    menuItems.forEach(function (item) {
        item.style.display = "block";
    });

    document.getElementById('close').style.display = "block";
}


function hidemenu() {
    document.getElementById('menuoverlay').style.display = "none";

    var menuItems = document.querySelectorAll('.menuitems');
    menuItems.forEach(function (item) {
        item.style.display = "none";
    });

    document.getElementById('close').style.display = "none";
}
