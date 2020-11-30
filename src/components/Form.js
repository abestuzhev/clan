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
                      type="text"
                      name="inputName"
                      id="inputName"
                      class="input"
                      placeholder="Имя"
                      required=""
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
            <div class="order-message"></div>

            <div class="login-block-public">
              Согласен с условиями
              <a href="https://pizzapresto.ru/confidentiality/" target="_blank"
                >обработки персональных данных</a
              >
              и правилами розыгрыша.
            </div>
            
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

        if(this.inputName.value.length > 25 || this.inputName.value === ""){
            document.getElementById('inputName').classList.add('no-success');
            // document.getElementById('tooltipMessagePhoneError').innerHTML = 'Введите имя';
            return false;
        }else {
            document.getElementById('inputName').classList.remove('no-success');
        }

        if(this.inputPhone.value.length < 16 || this.inputPhone.value === ""){
            document.getElementById('inputPhone').classList.add('no-success');
            // document.getElementById('tooltipMessagePhoneError').innerHTML = 'Введите корректный номер телефона';
            return false;
        }else {
            document.getElementById('inputPhone').classList.remove('no-success');
        }

        if(this.inputCoupon.value.length < 5 || this.inputCoupon.value === ""){
            document.getElementById('inputCoupon').classList.add('no-success');
            // document.getElementById('tooltipMessageCouponError').innerHTML = 'Введите корректный номер купона';
            return false;
        }else {
            document.getElementById('inputCoupon').classList.remove('no-success');
        }

        return true;
    }

    getFormData(){
        const formData = {};
        formData['name'] = this.inputName.value;
        formData['phone'] = this.inputPhone.value.trim().replace('(', '').replace(')', '').replace('-', '').replace('-', '').slice(1);
        formData['code'] = this.inputCoupon.value;
        return formData;
    }

    onClick(event){
        const verification = new Verification();
        const $message = document.querySelector('.order-message');

        if(event.target.dataset.type === "registration"){
            event.preventDefault();



            //Данные для отправки смс
            const smsLogin = 'pizzapresto';
            const smsPassword = 'Presto*2020';
            // const smsPhone = '79505556677';
            const smsPhone = this.getFormData().phone;
            const smsCode = generateCode();
            storage('_smsCode', smsCode);
            const smsMessage = `${smsCode} - ваш одноразовый код подтверждения Клан Престо`;



            if(this.validate()){



                //отправка смс
                const smsUrl = 'https://smsc.ru/sys/send.php?login='+ smsLogin +'&psw='+ smsPassword +'&phones='+ smsPhone +'&mes=' + smsMessage + '';
                // request(smsUrl);

                fetch(smsUrl)
                .then((resp) => resp.json())
                .then(response => {


                    if(response){
                        console.info('fetch success', response);
                    }else {
                        console.info('fetch error', response);
                    }
                });

                //имитация отправки смс
                // const $dataCode = document.querySelector('.data-code');
                // setTimeout(function(){
                //     $dataCode.innerHTML = `<div class="data-code-card"> ${smsCode} - ваш одноразовый код подтверждения Клан Престо</div>`;
                // }, 1000);
                //********************

                //Показ окна с вводом кода из смс
                this.$root.innerHTML = verification.toHTML();
                document.getElementById("inputSmsCode").focus();
                //********************

                //появление повторной отправки кода
                // verification.repeatSms();
                $message.innerHTML = '';

            }else {
                $message.innerHTML = '<span>Пожалуйста, заполните все поля</span>';
            }


        } else if(event.target.dataset.type === "send"){

            
            if(verification.validate() === localStorage.getItem('_smsCode')){
                $message.innerHTML = '';
                const formDataForm = this.getFormData();

                const formDataSend = new FormData();
                formDataSend.append('name', formDataForm.name);
                formDataSend.append('phone', formDataForm.phone);
                formDataSend.append('code', formDataForm.code);

                fetch(this.urlLink, {
                    method: 'POST',
                    body: formDataSend
                })
                .then((resp) => resp.json())
                .then(response => {
                    console.info('fetch()', response);

                    if(response){
                        this.$root.innerHTML = verification.success();
                    }else {
                        this.$root.innerHTML = verification.error();
                    }
                });
                

            }else {
                $message.innerHTML = '<span>Код из смс не соответствует. Пожалуйста, повторите еще раз</span>';
            }
        } else {

        }
    }

    onSubmit(event){
        event.preventDefault();

        //Если поля заполнены верно появляется поле кода из СМС
    }

    onInput(event){
        //Получение данных с формы и запись в LocalStorage
        const formData = JSON.stringify(this.getFormData());
        storage('_formData', formData);

        this.validate();



        if(event.target.value === "") {
            // console.log('Error пустое поле', event.target);
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

    }


}