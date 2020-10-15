Vue.component ( 'Logo', {
    props: ['image'],
    template:
    `
    <div class="logo">
        <a class="logo-action" href="/">
            <img class="logo-action-img" :src="image"></img>
        </a>
    </div>
    `
})
Vue.component ( 'Wrapmenu', {
    template:
    `
    <nav id="wrap-menu" class="wrap-menu">
            <a href="#menu" class="btnMenu btnMenu_open"></a>
            <ul id="menu" class="menu">
                <li class="btnMenu btnMenu_close">Sair</li>
                <li class="menu-item"><a href="/" class="menu-item-action">Home</a></li>
                <li class="menu-item"><a href="/sobre/" class="menu-item-action">Quem Somos</a></li>
                <li class="menu-item"><a href="/noticias/" class="menu-item-action">Notícias</a></li>
                <li class="menu-item"><a href="/agenda/" class="menu-item-action">Agenda</a></li>
                <li class="menu-item"><a href="/fotos/" class="menu-item-action">Fotos</a></li>
                <li class="menu-item"><a href="/videos/" class="menu-item-action">Vídeos</a></li>
                <li class="menu-item"><a href="/contato/" class="menu-item-action">Contato</a></li>
                <li class="menu-item"><a href="/patrocine/" class="menu-item-action">Patrocine</a></li>
            </ul>
            <br>
        </nav>
    `
})

let cabecalho = new Vue({
    el: "#cabecalho",
})

const $menu = document.querySelector('.menu');
const $btnMenuOpen = document.querySelector('.btnMenu_open');
const $btnMenuClose = document.querySelector('.btnMenu_close');

$btnMenuOpen.addEventListener('click', function() {
    $menu.classList.add('menu_open');
})

$btnMenuClose.addEventListener('click', function() {
    $menu.classList.remove('menu_open');
})