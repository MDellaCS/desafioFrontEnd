const btnHamburguer = document.getElementById('btnHamburguer');
const navHamburguer = document.getElementById('navHamburguer');

btnHamburguer.addEventListener('click', () => {
    if (navHamburguer.style.display === 'flex') {
        navHamburguer.style.display = 'none';
    } else {
        navHamburguer.style.display = 'flex';
    }
});