
// ibg
function isIE() {
    const ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
}
if (isIE()) {
    document.querySelector('html').classList.add('ie');
}

function ibg() {
    if (isIE()) {
        let ibg = document.querySelectorAll("._ibg");
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
                ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
        }
    }
}
ibg();

// бургер меню
const iconMenu = document.querySelector('.burger-menu');
const menuBody = document.querySelector('.menubox');

const handlerMenu = e => {
    const target = e.target;
    if (target.matches('.menu-item')) {
        toggleMenu();
    }
}


const toggleMenu = () => {
    menuBody.classList.toggle('_active');
    iconMenu.classList.toggle('_active');

    if (menuBody.classList.contains('_active')) {
        document.body.addEventListener('click', handlerMenu)
    } else {
        document.body.removeEventListener('click', handlerMenu)
    }
};

iconMenu.addEventListener('click', toggleMenu);