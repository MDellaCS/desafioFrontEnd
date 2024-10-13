const frmMessage = document.getElementById('frmMessage');

const txtCPF = document.getElementById('txtCPF');
const txtPhone = document.getElementById('txtPhone');
const txtSubject = document.getElementById('txtSubject');

// Handles form submission
frmMessage.addEventListener('submit', function (e) {

    e.preventDefault();

    alert("CPF: " + txtCPF.value + "\nTelefone: " + txtPhone.value + "\nAssunto: " + txtSubject.value);

    frmMessage.reset();

});

// CPF's realtime regex
txtCPF.addEventListener('input', (e) => {

    const removedAlpha = e.target.value.replace(/\D/g, '');

    const appliedMask = removedAlpha.replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    e.target.value = appliedMask;

});

// Phone's realtime regex
txtPhone.addEventListener('input', (e) => {

    const removedAlpha = e.target.value.replace(/\D/g, '');

    const appliedMask = removedAlpha.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');

    e.target.value = appliedMask;
    
});
