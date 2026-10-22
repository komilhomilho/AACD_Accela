export function iniciar() {
    const abasFaq = document.querySelectorAll('details.accordion-item');

    abasFaq.forEach((aba) => {
        aba.addEventListener('toggle', () => {
            if (aba.open) {
                setTimeout(() => {
                    aba.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        });
    });
}