document.getElementById('welkomButton').addEventListener('click', function() {
    const nameInput = document.getElementById('naamInput').value.trim();
    const messageDiv = document.getElementById('message');

    if (nameInput.length >= 2) {
        messageDiv.style.color = 'green';
        messageDiv.textContent = `Welkom, ${nameInput}!`;
    } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Vul alstublieft een naam in met minimaal 2 tekens.';
    }
});