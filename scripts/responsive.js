const btnHamburguer = document.getElementById('btnHamburguer');
const navHamburguer = document.getElementById('navHamburguer');

// Switches visible/invisible Hamburguer Menu
btnHamburguer.addEventListener('click', () => {

    if (navHamburguer.style.display === 'flex') {

        navHamburguer.style.display = 'none';

    } else {

        navHamburguer.style.display = 'flex';

    }

});