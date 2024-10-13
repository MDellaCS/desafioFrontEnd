const btnDownload = document.getElementById('btnDownload');
const captureTarget = document.getElementById('challenge5');

btnDownload.addEventListener('click', () => {

    // Utilizes html2canvas to print and download the target
    html2canvas(captureTarget).then(function (canvas) {

        const imgData = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.href = imgData;
        link.download = "capture.png";
        link.click();

    });

});