window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const header = document.querySelector('header'); // o usa el selector que tengas

    if (scrollTop === 0) {
        header.classList.remove('scrolled');
    } else {
        header.classList.add('scrolled');
    }
});