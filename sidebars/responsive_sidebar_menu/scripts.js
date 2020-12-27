function toggleMenu() {
    const toggleButton = document.querySelector('div.toggle');

    toggleButton.addEventListener('click', function () {
        const navigation = document.querySelector('.navigation');

        navigation.classList.toggle('active');
        toggleButton.classList.toggle('active');
    });
}

function toggleTheme() {
    const toggleButtonTheme = document.querySelector('div.theme');

    toggleButtonTheme.addEventListener('click', function () {
        const modeBlue = 'rgb(5, 23, 35)';
        const modeRose = 'rgb(21, 0, 25)';

        const bodyElement = document.querySelector('body');
        const bodyElementStyles = getComputedStyle(bodyElement);

        const asideElement = document.querySelector('aside.navigation');

        const liElements = document.querySelectorAll('aside.navigation ul li')

        const toggleButtonAside = document.querySelector('div.toggle');

        const iconChangeColor = toggleButtonTheme.querySelector('i');

        if (bodyElementStyles.backgroundColor === modeBlue) {
            bodyElement.style.backgroundColor = '#150019';
            asideElement.style.backgroundColor = '#3e0748';
            toggleButtonAside.style.backgroundColor = '#3e0748';
            toggleButtonTheme.style.backgroundColor = '#3e0748';
            iconChangeColor.style.color = '#01A8F7';

            for (let li of liElements) {
                li.addEventListener('mouseover', function() {
                    li.style.backgroundColor = '#ea1d63'
                });

                li.addEventListener('mouseout', function() {
                    li.style.backgroundColor = 'transparent';
                });
            }
        } else if (bodyElementStyles.backgroundColor === modeRose) {
            bodyElement.style.backgroundColor = '#051723';
            asideElement.style.backgroundColor = '#013147';
            toggleButtonAside.style.backgroundColor = '#013147';
            toggleButtonTheme.style.backgroundColor = '#013147';
            iconChangeColor.style.color = '#ea1d63';

            for (let li of liElements) {
                li.addEventListener('mouseover', function() {
                    li.style.backgroundColor = '#01A8F7'
                });

                li.addEventListener('mouseout', function() {
                    li.style.backgroundColor = 'transparent';
                });
            }
        }

    });
}

toggleMenu();
toggleTheme();