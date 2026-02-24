document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', function() {
        // Find the input in the same input-group
        const passwordInput = this.closest('.input-group').querySelector('input[type="password"], input[type="text"]');
        const icon = this.querySelector('i');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.remove('ri-eye-line');
            icon.classList.add('ri-eye-off-line');
        } else {
            passwordInput.type = 'password';
            icon.classList.remove('ri-eye-off-line');
            icon.classList.add('ri-eye-line');
        }
    });
});