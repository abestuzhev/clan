import './style.css';
import Navigo from 'navigo';
import {Home} from './components/Home';
import {Add} from './components/Add';
import {NotFound} from './components/NotFound';
import {Verification} from './components/Verification';

const clientHeight = document.documentElement.clientHeight;
var root = null;
var useHash = true; // Defaults to: false
var hash = '#'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);
const $app = document.getElementById('app');
const home = new Home();

const closeAction = true; //настройка оставляет только историю, убирая регистрацию и информацию о подарке
//
router
    .on({
        'add': function () {
            // $app.innerHTML = 'Form page';
            $app.innerHTML = '';
            // console.log('add page');
            const add = new Add('#app');
            add.render();
        }
    })
    .on({
        'success': function () {
            // $app.innerHTML = 'Form page';
            $app.innerHTML = '';
            $app.innerHTML = new Verification().success();

        }
    });

router.on(() => {
    $app.innerHTML = '';

    $app.innerHTML = home.toHTML();
    home.init();

    const $btn = document.querySelector('.banner-top .c-btn-layout');
    $btn.style.top = (clientHeight - 82) + 'px';
});

router.notFound(() => {
    $app.innerHTML = '';
    $app.innerHTML = new NotFound().toHTML();
});

router.resolve();



const $hamburger = document.querySelector('.header-hamburger');
const $menu = document.querySelector('.header-menu');
$hamburger.addEventListener('click', (event)=> {
    $hamburger.classList.toggle('active');
    $menu.classList.toggle('is-show');
});

