function toggleMenu() {
    const toggleButton = document.querySelector('div.toggle');

    toggleButton.addEventListener('click', function() {
        const navigation = document.querySelector('.navigation');

        navigation.classList.toggle('active');
        toggleButton.classList.toggle('active');
    });
}

toggleMenu();