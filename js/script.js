document.addEventListener('DOMContentLoaded', () => {


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
const menuHeader = document.querySelector('.menu-header');

function handlerMenu(e) {
    const target = e.target;
    if (target.matches('.menu-item')) {
        toggleMenu();
    }
}


function toggleMenu() {
    menuBody.classList.toggle('_active');
    iconMenu.classList.toggle('_active');

    if (menuBody.classList.contains('_active')) {
        document.body.addEventListener('click', handlerMenu)
    } else {
        document.body.removeEventListener('click', handlerMenu)
    }
};

window.addEventListener('click', e => {
    const target = e.target;
    console.log(target);
    if (!target.closest('.menubox') && !target.closest('.burger-menu')) {
        menuBody.classList.remove('_active');
        menuBody.classList.add('_hide');
    } else {
        menuBody.classList.remove('_hide');
        menuBody.classList.add('_active');
    }
  });



iconMenu.addEventListener('click', toggleMenu);

// search form
const inputElems = document.querySelectorAll('.input');
const menuElems = document.querySelectorAll('.menu');
const guestList = document.querySelector('.guest__list');
const buttonApply = document.querySelector('.apply');

function chooseAmount() {
            const searchForm = document.querySelector('.search-main__form');
            if (searchForm) {
                searchForm.addEventListener('click', e => {
                    const target = e.target;
                    if (target.closest('.button__plus')) {
                       e.preventDefault();
                        target.closest('td').querySelector('.counter').textContent++;
                    } else if(target.closest('.button__minus')) {
                        e.preventDefault();
                        target.closest('td').querySelector('.counter').textContent--;
                    }
                });
            };
        };

inputElems.forEach(item => {
    item.onfocus = function(e) {
        if(e.target) {
            const list  = e.target.closest('.field').querySelector('.menu');
            list.style.display = 'block';
            } 
        };
    });

window.addEventListener('click', e => {
        const target = e.target;
        if (!target.closest('.field') && !target.closest('.guest__list') && !target.closest('.input') || target.closest('.apply')) {
            guestList.style.display = 'none';
        }
      });
    

chooseAmount();

// sublist menu 

const eventLink = document.querySelector('.event__type-menu');
const subMenuLinks = document.querySelectorAll('.event__type-submenu');

eventLink.addEventListener('click', e => {
        const target = e.target;
        console.log(target.closest('.event__type-link'));
        const list = target.closest('.event__type-link').querySelector('.event__type-submenu');
        list.classList.toggle('_active');
    });

window.addEventListener('click', e => {
        const target = e.target;
        if (!target.closest('.event__type-menu') && !target.closest('.event__type-submenu') && !target.closest('.input')) {
            eventLink.style.display = 'none';
        }
      });
});










/*eventLink.addEventListener('click', e => {
    const target = e.target;
    console.log(target.closest('.event__type-link'));
    const list = target.closest('.event__type-link').querySelector('.event__type-submenu');
    list.classList.toggle('_active');
});*/




