const btnOpenModal = document.getElementById('btnOpenModal');
const modalHouse = document.getElementById('modalHouse');
const btnCloseModal = document.getElementById('btnCloseModal');

btnOpenModal.addEventListener('click', () => {
    modalHouse.style.display = 'flex';
});

btnCloseModal.addEventListener('click', () => {
    modalHouse.style.display = 'none';
});

modalHouse.addEventListener('click', (event) => {
    if (event.target === modalHouse) {
        modalHouse.style.display = 'none';
    }
});