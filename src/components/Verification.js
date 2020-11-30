// import IMask from '../../node_modules/imask';
import {startTimer} from '../utils';

export class Verification{

    // constructor($root){
    //     this.$root = $root;
    // }
    
    toHTML (){
        return `
        <div class="password">
            <div class="layout">
                <div class="password-head">
                    <div class="section-title">Введите код</div>
                </div>
             
                <div class="form__inputs">
                <div class="input-wrap">                
                    
                    <input
                    type="number"
                    name="inputSmsCode"
                    id="inputSmsCode"
                    data-type="password"
                    class="input"
                    placeholder=""
                    required=""
                    autocomplete="off"
                    />
                    <!-- <div id="tooltipContainerEmailError" class="tooltip tooltip-error">
                    <span id="tooltipMessageEmailError"></span>
                    </div> -->
                </div>
                
                </div>
                <div class="form__body">
                <button type="submit" id="buttonSubmit" data-type="send" class="button-submit">
                    Отправить код
                </button>
                
                
                </div>
                
                <div class="order-message"></div>
            </div>
            
            
            
        </div>
        `
    }

    repeatSms(){

        //<a href="#" class="password-repeat">Повторная отправка доступна через <span id="timer">01:00</span></a>
        startTimer(10, document.getElementById('timer'))
        
        
        if(startTimer){
            
        }
    }

    validate(){
        // if(event.target.dataset.type === "password"){
        //     this.$root.addEventListener('input', () => {
        //         console.log('password input', event.target.value);
        //     });
        // }

        const $inputSmsCode = document.getElementById('inputSmsCode');
        return $inputSmsCode.value;
        
    }

    success(){
        return `
            <div class="success">                
                <div class="success-icon"></div>
                <div class="success-body">
                    <div class="success-text">Вы успешно зарегистрировали купон! Сохраните купон и чек для получения приза.</div>
                    <div class="c-btn-layout c-btn-layout--center">
                        <a href="#" class="c-btn c-btn-outline">На главную</a>
                    </div>   
                </div>                             
            </div>
        `
    }

    error(){
        return `
            <div class="error">                
                <div class="error-text">Что-то пошло не так. Повторите регистрацию или напишите нам на email <a href="mailto:help@pizzapresto.ru">help@pizzapresto.ru</a>. Отвечаем в течении 24 часов</div>
                <div class="c-btn-layout c-btn-layout--center">  
                    <a href="#" class="c-btn c-btn-outline">На главную</a>
                </div>                
            </div>
        `
    }
}