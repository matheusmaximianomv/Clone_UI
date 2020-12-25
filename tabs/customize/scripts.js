const tabOptions = document.querySelectorAll('nav ul li');

for (let tab of tabOptions) {
    tab.addEventListener('click', function() {
        const tabSelected = document.querySelector('nav ul li.selected');
        tabSelected.classList.remove('selected');

        tab.classList.add('selected');

        const containerViewer = document.querySelectorAll('main div');

        for (let context of containerViewer) {
            const h1Element = context.querySelector('h1');

            if (tab.innerHTML.includes(h1Element.innerHTML)) {
                context.classList.add('selected');
            } else {
                context.classList.remove('selected')
            }
        }
    });
}