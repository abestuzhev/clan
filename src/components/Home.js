import imgLogo from '../img/logo-clan.png';
import imgIphone from '../img/iphone12.png';
import imgIphoneBg from '../img/iphone-bg.png';
import imgBannerTopText from '../img/banner-top-text.png';


export class Home {
    toHTML(){
        return `
            <div class="wrapper">
      <div class="header-layout">
        <div class="layout">
          <div class=header>
            <div class="header-logo">Клан Престо</div>
            <div class="header-menu">
            <a href="#/" class="header-menu__link">Главная</a>
            <a href="#add" class="header-menu__link">Добавить купон</a>
              <!-- <a href="#" class="header-menu__link">Эпизоды</a>
              <a href="#" class="header-menu__link">Персонажи</a>
              <a href="#" class="header-menu__link">Скидки на пиццу</a>
              <a href="#" class="header-menu__link">Условия розыгрыша</a> -->
            </div>
            <div class="header-hamburger"><span></span></div>

          </div>          
        </div>
      </div>
      <div class="banner-top-layout">
        <div class="layout">
          <div class="banner-top">
            <!--<img src="./img/banner-top.jpg" alt="Баннер с главными героями «Клан Престо»">-->
            <div class="banner-top__body">
              <div class="banner-top__logo">
                <img src="${imgLogo}" class="banner-top__logo-pic" alt="Логотип «Клан Престо»">
                <img src="${imgBannerTopText}" class="banner-top__logo-text" alt="текст">
              </div>
              <div class="c-btn-layout c-btn-layout--left">
                <!-- <a href="#" class="c-btn c-btn-default">Зарегистрировать купон</a> -->
                <div class="banner-top__message">
                  Регистрация купонов начнется 03.11.2020 г.
                  <span>Купон можно получить при заказе в службе доставки от 1 000 руб.</span>

                </div>
              </div>
  
            </div>
          </div>
        </div>
      </div>
      <div class="registration"></div>
      <!--START regulations-->
      <div class="regulation">
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
                  <ol>
                    <li>
                      Сделайте заказ от 1000 рублей в службе доставки «Престо» через сайт, мобильное приложение или позвонив в call-центр
                    </li>
                    <li>
                      Вместе с заказом получите купон на участие в розыгрыше «Клан Престо»
                    </li>
                    <li>
                      Зарегистрируйте купон через форму на сайте
                    </li>
                    <li>
                      Собирайте купоны, чтобы повысить свои шансы на выигрыш главного приза
                    </li>
                    <li>
                      Не пропустите подведение итогов, которое состоится 19 января 2021 года в онлан-режиме в группе вКонтакте.
                    </li>
                  </ol>
                </div>

                <!--<div class="c-btn-layout c-btn-layout&#45;&#45;left">-->
                  <!--<a href="#" class="c-btn c-btn-default">Зарегистрировать купон</a>-->
                <!--</div>-->
              </div>

            </div>
          </div>

        </div>

      </div>
      <!--END regulations-->

    </div>
        `
    }
}