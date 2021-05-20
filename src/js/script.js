window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    dropmenu = document.querySelector('.dropmenu');

    dropmenu.addEventListener('click', () => {
        dropmenu.classList.toggle('dropmenu_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            dropmenu.classList.toggle('dropmenu_active');
            menu.classList.toggle('menu_active');
        })
    })
})