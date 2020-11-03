import './style.css';
import Navigo from 'navigo';
import {Home} from './components/Home';
import {Add} from './components/Add';
import {NotFound} from './components/NotFound';


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
    });

router.on(() => {
    $app.innerHTML = '';
    $app.innerHTML = new Home().toHTML();
    // console.log('home');
});

router.notFound(() => {
    $app.innerHTML = '';
    $app.innerHTML = new NotFound().toHTML();
});

router.resolve();

//
// console.log('Working!');


// router
//     .on('*', function () {
//         $app.innerHTML = new Home().toHTML()
//     })
//     .on('add', function () {
//         $app.innerHTML = 'Form page'
//     })
//     .resolve();