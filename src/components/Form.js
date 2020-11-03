import {generateCode, storage, request, create} from '../utils';
import {Verification} from './Verification';
import IMask from '../../node_modules/imask';

export class Form {
    
    constructor(){
        this.$root = create('div', 'order');
        this.urlLink = 'https://api.pizzapresto.ru/clan_user';

    }

    getRoot(){        

        this.$root.innerHTML = this.toHTML();
        return this.$root;
    }

    toHTML(){
        return `
        <div class="order-body">
          <div class="layout">
          <div class="order-header">
            <div class="section-title">Добавить купон</div>
            <a href="#/" class="c-btn c-btn-outline">Назад</a>
          </div>  
            
            <form action="" method="POST" id="add_code" name="addCode">
              <div class="form-layout">
                <!-- START FORM -->
                <div class="form__inputs">
                  <div class="input-wrap">
                    <label for="inputPhone" class="input__label"
                      >Имя</label
                    >
                    <input
                      type="tel"
                      name="inputName"
                      id="inputName"
                      class="input"
                      placeholder=""
                      required=""
                      value="Иван"
                      autocomplete="off"
                    />
                    <!-- <div id="tooltipContainerEmailError" class="tooltip tooltip-error">
                      <span id="tooltipMessageEmailError"></span>
                    </div> -->
                  </div>
                  <div class="input-wrap">
                    <label for="inputPhone" class="input__label"
                      >Контактный телефон</label
                    >
                    <input
                      type="tel"
                      name="inputPhone"
                      id="inputPhone"
                      class="input"
                      placeholder="+7(000) 000-00-00"
                      value="+79506602664"
                      required=""
                      autocomplete="off"
                    />
                    <div id="tooltipContainerEmailError" class="tooltip tooltip-error">
                      <span id="tooltipMessagePhoneError"></span>
                    </div>
                  </div>
                  <div class="input-wrap">
                    <label for="inputCode" class="input__label"
                      >Номер купона</label
                    >
                    <input
                      type="number"
                      name="inputCoupon"
                      id="inputCoupon"
                      class="input"
                      placeholder="00001"
                      required=""
                      value="00003"
                      autocomplete="off"
                    />
  
                    <div id="tooltipContainerEmailError" class="tooltip tooltip-error">
                      <span id="tooltipMessageCouponError"></span>
                    </div>
                  </div>
                </div>
                <div class="form__body">
                  <a href="#" id="buttonRegustration" data-type="registration" class="button-submit">
                  Зарегистрировать
                  </a>
                </div>
                <!-- END FORM -->
              </div>
              
            </form>

            <div class="login-block-public">
              Согласен с условиями
              <a href="https://pizzapresto.ru/confidentiality/" target="_blank"
                >обработки персональных данных</a
              >
              и правилами розыгрыша.
            </div>
            <div class="order-message"></div>
          </div>
        </div>

        `
    }

    mask(){

        var phoneMask = IMask(
            this.inputPhone, {
                mask: '+{7}(000)000-00-00'
            });

        var couponMask = IMask(
            this.inputCoupon, {
                mask: /^[0-9]\d{0,4}$/
                // mask: /^([0-1]{1}[0-5]{1}[0-9]{0,2})$/
            });

        var nameMask = IMask(
            this.inputName, {
                mask: /^([А-яё]{0,23})$/
            });


    }

    validate(){

        if(this.inputCoupon.value.length < 5 || this.inputCoupon.value === ""){
            console.log('couponMask', this.inputCoupon.value.length);
            // document.getElementById('tooltipMessageCouponError').innerHTML = 'Введите корректный номер купона';
            return false;
        }


        if(this.inputPhone.value.length < 16 || this.inputCoupon.value === ""){
            console.log('inputPhone', this.inputPhone.value.length);
            // document.getElementById('tooltipMessagePhoneError').innerHTML = 'Введите корректный номер телефона';
            return false;
        }
        return true;
    }

    getFormData(){
        const formData = {};
        formData['name'] = this.inputName.value;
        formData['phone'] = this.inputPhone.value;
        formData['code'] = this.inputCoupon.value;
        // console.log('formData', formData);
        return formData;
    }

    onClick(event){
        // console.log('root', this.$root);
        const verification = new Verification();
        const $message = document.querySelector('.order-message');

        if(event.target.dataset.type === "registration"){
            event.preventDefault();



            //Данные для отправки смс
            const smsLogin = 'pizzapresto';
            const smsPassword = 'Presto*2020';
            const smsPhone = '79506602664';
            const smsCode = generateCode();
            storage('_smsCode', smsCode);
            const smsMessage = `${smsCode} - ваш одноразовый код подтверждения Клан Престо`;



            if(this.validate()){

                // отправка смс
                // const smsUrl = 'https://smsc.ru/sys/send.php?login='+ smsLogin +'&psw='+ smsPassword +'&phones='+ smsPhone +'&mes=' + smsMessage + '';
                // request(smsUrl);

                //имитация отправки смс
                const $dataCode = document.querySelector('.data-code');
                setTimeout(function(){
                    $dataCode.innerHTML = `<div class="data-code-card"> ${smsCode} - ваш одноразовый код подтверждения Клан Престо</div>`;
                }, 1000);
                //********************

                //Показ окна с вводом кода из смс
                this.$root.innerHTML = verification.toHTML();
                //********************

                $message.innerHTML = '';

            }else {
                $message.innerHTML = '<span>Пожалуйста, заполните все поля</span>';
            }


        } else if(event.target.dataset.type === "send"){


            // console.log('storage', storage('_smsCode') );
            console.log('localStorage', localStorage.getItem('_smsCode'));
            console.log('verification.validate()', verification.validate() );

            
            if(verification.validate() === localStorage.getItem('_smsCode')){
                $message.innerHTML = '';
                const formDataForm = this.getFormData();
                
                console.log('formDataForm', formDataForm);

                const formDataSend = new FormData();
                formDataSend.append('name', formDataForm.name);
                formDataSend.append('phone', formDataForm.phone);
                formDataSend.append('code', formDataForm.code);

                fetch(this.urlLink, {
                    method: 'POST',
                    body: formDataSend
                })
                .then((resp) => resp.json())
                .then(function(response) {
                    console.info('fetch()', response);
                    return response;
                });
                

                // request('https://api.pizzapresto.ru/clan_user', 'POST', formDataSend)
                // .then(function(response) {
                //     console.info('fetch()', response);
                //     return response;
                // });
                
                this.$root.innerHTML = verification.success();
            }else {
                $message.innerHTML = '<span>Код из смс не соответствует. Пожалуйста, повторите еще раз</span>';
            }


            // console.log('verification', verification.validate());
            // if(storage('_smsCode')){
            //     request(urlLink, 'POST', {});
            // }
        } else {

        }
    }

    onSubmit(event){
        event.preventDefault();
        // проверка всех полей формы
        console.log('onSubmit preventDefault');

        // if(storage('_smsCode')){
        //     request(urlLink, 'POST', formData);
        // }

        //Если поля заполнены верно появляется поле кода из СМС
    }

    onInput(event){
        // console.log('onInput', event.target.id);
        //Получение данных с формы и запись в LocalStorage
        const formData = JSON.stringify(this.getFormData());
        storage('_formData', formData);



        if(event.target.value === "") {
            console.log('Error пустое поле', event.target);
        }
        if(event.target.dataset.type === "registration"){

        }

    }

    init(){


        this.$root.addEventListener('click', this.onClick.bind(this));
        this.$root.addEventListener('input', this.onInput.bind(this));
        this.$root.addEventListener('submit', this.onSubmit.bind(this));


        this.inputName = document.getElementById('inputName');
        this.inputPhone = document.getElementById('inputPhone');
        this.inputCoupon = document.getElementById('inputCoupon');

        this.mask();


        //вывод результатов базы
        const $dataList = document.querySelector('.data-list');
        let usersArr = [];
        console.log('this.urlLink', this.urlLink);
        const res = request(this.urlLink);
        res.then(users => {
          users.forEach(user => {
            usersArr.push(`<div>${user.name || 'имя'} : ${user.phone || 'телефон'} : ${user.code || 'номер'}</div>`);
          });

          $dataList.innerHTML = usersArr.join('');

        })

    }


}