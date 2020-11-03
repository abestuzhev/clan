// отправка смс
const smsLogin = 'alex';
const smsPassword = '123';
const smsPhone = '79999999999';
const smsCode = generateCode();
storage('_smsCode', smsCode);
const smsMessage = ''+ smsCode + ' - ваш одноразовый код подтверждения Клан Престо';
const smsUrl = 'https://smsc.ru/sys/send.php?login='+ smsLogin +'&psw='+ smsPassword +'&phones='+ smsPhone +'&mes=' + smsMessage + '';

const clientHeight = document.documentElement.clientHeight;


const $btn = document.querySelector('.banner-top .c-btn-layout');
$btn.style.top = (clientHeight - 82) + 'px';

console.log('clientHeight', clientHeight);
console.log('$btn', $btn);

// ******************************************************
const urlLink = 'https://api.pizzapresto.ru/clan_user';
const $app = document.getElementById('app');
const $dataCode = document.querySelector('.data-code');
const $dataList = document.querySelector('.data-list');
const $password = document.querySelector('.password');

const $form = document.getElementById('add_code');
const $formLayout = document.querySelector('form-layout');
const $btnRegistration = document.getElementById('buttonRegustration');

// $passClass = new Verification($password);

// $dataList.innerHTML = clientHeight;

$btnRegistration.addEventListener('click', function(e){
    e.preventDefault();

    // $formLayout.innerHTML = '654654';
    console.log('trest');
    // $formLayout.innerHTML = $passClass.render();
    // $passClass.init(e);

    setTimeout(function(){
        $dataCode.innerHTML = '<div class="data-code-card">'+ smsCode + ' - ваш одноразовый код подтверждения Клан Престо</div>';
    }, 1000);    
    

});

document.addEventListener('submit', async function(e){
    e.preventDefault();
    
    const $inputSmsCode = document.getElementById('#inputSmsCode');
    console.log('inputSmsCode', $inputSmsCode);
    
    
    if($inputSmsCode.value === storage('_smsCode')){
        request(urlLink, 'POST', formData);
    }

});


// ******************************************************
// let usersArr = [];
// const res = request(urlLink);
// res.then(users => {
//   users.forEach(user => {
//     usersArr.push(`<div>${user.phone} : ${user.code}</div>`);
//   });
//
//   $dataList.innerHTML = usersArr.join('');
//
// })

// ******************************************************

// var root = null;
// var useHash = true; // Defaults to: false
// var hash = '#'; // Defaults to: '#'
// var router = new Navigo(root, useHash, hash);
// console.log('router', router);

// const $app = document.getElementById('app');

// document.innerHTML = "index page"
// router
//   .on({    
//     'add': function () {
//       // $app.innerHTML = "add page";
//       console.log('add page');
//       // const add = new Add('#app');
//       // add.render();
//     }
//   });
//
//
// router.on(() => { $app.innerHTML = "add page"; });
//
// router.notFound(() => { $app.innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>'; });
//
// router.resolve();


