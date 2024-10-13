const btnOpenModal = document.getElementById('btnOpenModal');
const modalHouse = document.getElementById('modalHouse');
const btnCloseModal = document.getElementById('btnCloseModal');


// Shows modal
btnOpenModal.addEventListener('click', () => {

    modalHouse.style.display = 'flex';

});

// Hides modal
btnCloseModal.addEventListener('click', () => {

    modalHouse.style.display = 'none';

});

// Hides modal when clicking on BG
modalHouse.addEventListener('click', (event) => {

    if (event.target === modalHouse) {

        modalHouse.style.display = 'none';

    }

});