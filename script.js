const menu = document.getElementById('itens');

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function clickMenu() {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

window.addEventListener('load', mudouTamanho);
window.addEventListener('resize', mudouTamanho);
