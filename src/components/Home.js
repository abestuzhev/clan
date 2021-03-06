import imgLogo from '../img/logo-clan.png';
import imgIphone from '../img/iphone12.png';
import imgIphoneBg from '../img/iphone-bg.png';
import imgBannerTopText from '../img/banner-top-text.png';
import {Card} from "./Card";
import {Slider} from "./Slider";
import Timer from "./Timer";


export class Home {

    constructor() {
        this.slider = new Slider();
        this.card = new Card();
    }

    toHTML() {
        return `
            <div class="wrapper">
              <!--<div class="header-layout">
                <div class="layout">
                  <div class=header>
                    <a href="#" class="header-logo">Клан Престо</a>
                   
                    <div class="header-operation">
                        <div class="header-menu">
                          <a href="./doc/Uslovia_provedenia_aktsii_Klan_Presto.pdf" target="_blank" class="header-menu__link">Положение акции</a>
                        </div>                        
                    </div>
                           
                  </div>          
                </div>
              </div>-->
              <div class="banner-top-layout">
                
                <div class="layout">
                  <div class="banner-top">
                    <div class="banner-top__body">
                      <div class="banner-top__logo">
                        <img src="./src/img/logo-clan.png" class="banner-top__logo-pic" alt="Логотип «Клан Престо»">
                        <img src="${imgBannerTopText}" class="banner-top__logo-text" alt="текст">
                      </div>
                      <!--<div class="c-btn-layout c-btn-layout--left">                        
                         <a href="#add" class="c-btn c-btn-default">Зарегистрировать купон</a> 
                      </div>-->
          
                    </div>
                  </div>
                </div>
              </div>
              
              ${this.slider.toHTML()}
              ${this.init()}
              
              ${this.card.toHTML()}
              
            
              <div class="registration"></div>
              <!--START regulations-->
              <!--<div class="regulation" id="conditions">
                <div class="layout">
                  <div class="regulation-grid">
                    <div class="regulation-img">
                      <img src="${imgIphone}" class="regulation-img__phone" alt="iphone12">
                      <img src="${imgIphoneBg}" class="regulation-img__bg" alt="">
                    </div>
                    <div class="regulation-body">
                      <div class="regulation-head">
                        <div class="regulation-title">Выиграйте <span>iPhone 12</span></div>
                        <div class="regulation-subtitle">и много других призов</div>
                      </div>
                      <div class="regulation-text">
                        <p>
                          Примите участие в розыгрыше главного приза в увлекательной истории «Клан Престо»
                        </p>
        
                        <div class="regulation-list">
                          <div class="regulation-list__title">Правила участия:</div>
                          <div class="regulation-important">Сохраните купон и чек для получения приза</div>
                          <ol>
                            <li>
                              Сделайте заказ от 1000 рублей в службе доставки «Престо» через <a href="https://pizzapresto.ru/">сайт</a>, мобильное приложение или позвонив в call-центр по номеру <a href="tel:88005500900">8 800-5-500-900</a>
                            </li>
                            <li>
                              Вместе с заказом получите купон на участие в розыгрыше «Клан Престо»
                            </li>
                            <li>
                              Зарегистрируйте купон через <a href="#add">форму</a> на сайте
                            </li>
                            <li>
                              Собирайте купоны, чтобы повысить свои шансы на выигрыш главного приза
                            </li>
                            <li>
                              Не пропустите подведение итогов, которое состоится 19 января 2021 года в онлан-режиме в группе вКонтакте.
                            </li>
                          </ol>
                        </div>
        
                        
                      </div>        
                    </div>
                  </div>
                  <div class="regulation-note">
                     Сделай заказ прямо сейчас, каждый купон увеличивает шансы на победу!
                  </div>
                  
                  <div class="c-btn-layout c-btn-layout--center">                        
                      <a href="https://pizzapresto.ru/menu/#!/Pitstsa" class="c-btn c-btn-default">Сделать заказ</a> 
                  </div>
                       
                </div>        
              </div>-->
              <!--END regulations-->
              
              <div class="footer">
                  <div class="layout">
                  
                      <div class="footer-grid">
                        <div class="footer-col">
                            <span class="copyright">© 2021 Пиццерия Престо™ Все права защищены</span>                
                        </div>
                        <!--<div class="footer-col">
                            <a href="./doc/Uslovia_provedenia_aktsii_Klan_Presto.pdf" target="_blank" class="c-link">Положение акции</a>
                        </div>-->              
                      </div> 
                  
                  </div>
                          
                
              </div>
            </div>
        `
    }

    init(){
       this.slider.init();
       SimpleScrollbar.initAll();

       return '';
    }
}