function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const resultText = document.getElementById('resultText');
    const resultSection = document.getElementById('resultSection');
    const messageTitle = document.getElementById('messageTitle');
    const messageSubtitle = document.getElementById('messageSubtitle');
    const munecoImage = document.getElementById('munecoImage');

    // Aquí puedes implementar tu lógica de encriptación
    const encryptedText = btoa(inputText); // Ejemplo simple de encriptación con base64

    resultText.textContent = encryptedText;
    resultSection.classList.remove('hidden');
    messageTitle.classList.add('hidden');
    messageSubtitle.classList.add('hidden');
    munecoImage.classList.add('hidden');
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const resultText = document.getElementById('resultText');
    const resultSection = document.getElementById('resultSection');
    const messageTitle = document.getElementById('messageTitle');
    const messageSubtitle = document.getElementById('messageSubtitle');
    const munecoImage = document.getElementById('munecoImage');

    try {
        // Aquí puedes implementar tu lógica de desencriptación
        const decryptedText = atob(inputText); // Ejemplo simple de desencriptación con base64

        resultText.textContent = decryptedText;
        resultSection.classList.remove('hidden');
        messageTitle.classList.add('hidden');
        messageSubtitle.classList.add('hidden');
        munecoImage.classList.add('hidden');
    } catch (e) {
        alert('Error al desencriptar el texto. Asegúrate de que el texto esté correctamente encriptado.');
    }
}

function copyToClipboard() {
    const resultText = document.getElementById('resultText');
    const textArea = document.createElement('textarea');
    textArea.value = resultText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Texto copiado al portapapeles');
}
