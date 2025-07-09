document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll
    const links = document.querySelectorAll('nav a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    }

    // Form Submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Formulário enviado com sucesso!');
        // Aqui você pode adicionar a lógica para enviar o formulário usando AJAX, por exemplo.
    });
});
