document.getElementById('tekstveld').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        setTimeout(() => {
            alert(this.value);
        }, 1000);
    }
});