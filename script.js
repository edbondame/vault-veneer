document.addEventListener('DOMContentLoaded', () => {
    const door = document.getElementById('door');
    door.addEventListener('click', () => {
        door.classList.toggle('active');
    });

    const form = document.getElementById('leadForm');
    const status = document.getElementById('formStatus');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        if (!email.includes('@')) {
            status.innerText = "Please enter a valid email.";
            status.style.color = "red";
            return;
        }

        status.innerText = "Thank you! Our master craftsman will contact you shortly.";
        status.style.color = "#c5a059";
        form.reset()
    });
});