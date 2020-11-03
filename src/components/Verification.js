import IMask from '../../node_modules/imask';

export class Verification{

    // constructor($root){
    //     this.$root = $root;
    // }
    
    toHTML (){
        return `
        <div class="password">
            <div class="layout">
                <div class="form__inputs">
                <div class="input-wrap">
                    <label for="inputPhone" class="input__label"
                    >Код из смс</label
                    >
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
                <div class="success-text">Вы успешно зарегистрировали купон!</div>
                <div class="c-btn-layout c-btn-layout--center">
                    <a href="#" class="c-btn c-btn-outline">На главную</a>
                </div>                
            </div>
        `

    }
}