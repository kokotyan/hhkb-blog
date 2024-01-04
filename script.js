// script.js

function toggleMenu() {
    var menu = document.querySelector('.global_nav');
    menu.classList.toggle('show');
}

// ドキュメント全体をクリックしたらメニューを閉じるようにする
document.addEventListener('click', function (event) {
    var menu = document.querySelector('.global_nav');
    var openBtn = document.querySelector('.openbtn');

    if (!menu.contains(event.target) && !openBtn.contains(event.target)) {
        menu.classList.remove('show');
    }
});
