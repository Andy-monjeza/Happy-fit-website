
function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
function closeMenu() {
    const menu = document.getElementById('dropdown-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}



function showCategory(category) {
    // Hide all category contents
    document.querySelectorAll('.category-content').forEach(content => {
        content.style.display = 'none';
    });

    // Show the selected category
    document.getElementById(category).style.display = 'block';
}

// Initially hide all category sections
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.category-content').forEach(content => {
        content.style.display = 'none';
    });
});

function showAbout(index) {
    // Hide all the info boxes
    const infoBoxes = document.querySelectorAll('.top-item-info');
    infoBoxes.forEach((box) => {
        box.style.display = 'none';
    });

    // Show the selected info box
    const selectedBox = document.getElementById(`info-${index}`);
    if (selectedBox) {
        selectedBox.style.display = 'block';
    }
   
}
