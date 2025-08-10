document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});
