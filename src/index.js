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
    $app.innerHTML = new Home().toHTML();
    const $btn = document.querySelector('.banner-top .c-btn-layout');
    $btn.style.top = (clientHeight - 82) + 'px';
    // console.log('home');
});

router.notFound(() => {
    $app.innerHTML = '';
    $app.innerHTML = new NotFound().toHTML();
});

router.resolve();




