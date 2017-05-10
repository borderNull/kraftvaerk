document.addEventListener('DOMContentLoaded', function () {

    let menu = document.querySelector('.mobile-menu-block')

    menu.addEventListener('click', function() {
        this.classList.toggle('active');
        this.parentNode.classList.toggle('active');
    })

})

    