let tabHeader = document.querySelector('header.tab-header');
let tabIndicator = document.querySelector('div.tab-indicator');
let tabBody = document.querySelector('article.tab-body');

let tabsPane = document.getElementsByTagName('div');

for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener('click', function() {
        tabHeader
            .querySelector('.active')
            .classList.remove('active');
        tabsPane[i].classList.add('active');

        tabBody
            .querySelector('.active')
            .classList.remove('active');
        tabBody
            .getElementsByTagName('div')[i]
            .classList.add('active');

        tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
    });
}