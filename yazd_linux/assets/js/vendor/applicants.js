document.addEventListener("DOMContentLoaded", function () {
    const accountNumberSpan = document.getElementById("accountNumber");

    if (accountNumberSpan) {
        const toggleBtn = document.getElementById("toggleAccount");
        const eyeIcon = document.getElementById("eyeIcon");

        const fullAccount = accountNumberSpan.getAttribute("data-full");
        const maskedAccount = `•••• •••• ${fullAccount.slice(-4)}`;
        let isMasked = true;

        toggleBtn.addEventListener("click", () => {
            if (isMasked) {
                accountNumberSpan.textContent = fullAccount;
                eyeIcon.classList.replace("ri-eye-line", "ri-eye-off-line");
            } else {
                accountNumberSpan.textContent = maskedAccount;
                eyeIcon.classList.replace("ri-eye-off-line", "ri-eye-line");
            }
            isMasked = !isMasked;
        });
    }
});

// Copy to clipboard function
document.addEventListener('DOMContentLoaded', function () {
    const copyBtn = document.getElementById('copyBankDetails');

    if (copyBtn) {
        copyBtn.addEventListener('click', function () {
            const bankDetails = Array.from(document.querySelectorAll('.bank-info li'))
                .map(li => {
                    const label = li.querySelector('.info-label span')?.textContent || '';
                    const value = li.querySelector('.info-value')?.textContent.replace(/\•/g, '').trim() || '';
                    return `${label} ${value}`;
                })
                .join('\n');

            navigator.clipboard.writeText(bankDetails).then(() => {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="ri-check-line me-1"></i> Copied!';
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 2000);
            });
        });
    }
});

// Handle all interactive elements through document click
document.addEventListener('click', function (e) {
    // Password toggle
    if (e.target.closest('.toggle-password')) {
        const passwordDisplay = document.querySelector('.password-display');
        const icon = e.target.closest('.toggle-password').querySelector('i');

        if (passwordDisplay.textContent.includes('•')) {
            passwordDisplay.textContent = 's3cur3p@ss';
            icon.classList.replace('ri-eye-line', 'ri-eye-off-line');
        } else {
            passwordDisplay.textContent = '••••••••';
            icon.classList.replace('ri-eye-off-line', 'ri-eye-line');
        }
    }

    // Email copy
    if (e.target.closest('.icon-btn .ri-file-copy-line')) {
        const email = 'ethan.mitchell@example.com';
        navigator.clipboard.writeText(email);

        const btn = e.target.closest('.icon-btn');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="ri-check-line"></i> Copied!';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
        }, 2000);
    }
});