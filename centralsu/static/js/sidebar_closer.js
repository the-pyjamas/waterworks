document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('navbarsExample11');
    const toggler = document.querySelector('.navbar-toggler');

    // If sidebar is open
    if (sidebar.classList.contains('show') &&
        !sidebar.contains(e.target) &&
        !toggler.contains(e.target)) {

    const bsCollapse = new bootstrap.Collapse(sidebar, { toggle: true });
    bsCollapse.hide();
    }
});
