// Handles phone number reveal
const allPhones = document.querySelectorAll('.phone');

allPhones.forEach(phone => {

    phone.addEventListener('click', () => {

        phone.innerHTML = phone.getAttribute('phoneNumber');
        phone.style.textDecoration = "none";
        phone.style.cursor = "default";

    });

});

// Loads blurred BG image
document.querySelectorAll('.img-container').forEach(container => {

    const img = container.querySelector('img');
    const imgSrc = img.getAttribute('src');

    const blurBackground = container.querySelector('.blurredImage');
    blurBackground.style.backgroundImage = `url(${imgSrc})`;
    
});