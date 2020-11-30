// core version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
// Swiper.use([Navigation, Pagination]);


export class Slider {

    constructor($root){
        // this.$root = $root;
        // this.$root.innerHTML = this.toHTML();
        console.log('return from constructor Slider');
        // this.init();
    }
    
    toHTML(){
        return `
        <!--START story-->
      <div class="story">
        <div class="swiper-container">
          <div class="story-slider swiper-wrapper">
            <!--START story-slider__item-->
            <div class="story-slider__item swiper-slide">
              <div class="story-card">
                <div class="story-card__img">
                  <img src="./src/img/episode-1.jpg" alt="">
                </div>
                <div class="story-card__body">
                  <div class="story-card__wrapper">
                    <div class="story-card__title">Кто же осмелился позариться на ее пышные карбонарки!?</div>
                    <div class="story-card__text">
                      <p>
                        Все началось в дождливый промозглый день...
                      </p>
                      <p>
                        Общественность города А взбудоражило чудовищное убийство известной особы, дамы Карбонары.
                        Вся первая полоса местной газеты была занята скандальной статьей неуловимой журналистки, Гавайской Кокетки.
                      </p>
                      <p>
                        Она очень остра на язык, она знает всё, что происходит в городе А, она знает про вас даже то, что не знают соседи напротив, но кто она — не знает никто!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--END story-slider__item-->
            <!--START story-slider__item-->
            <div class="story-slider__item swiper-slide">
              <div class="story-card">
                <div class="story-card__img">
                  <img src="./src/img/episode-2.jpg" alt="">
                </div>
                <div class="story-card__body">
                  <div class="story-card__wrapper">
                    <div class="story-card__title">Кто же осмелился позариться на ее пышные карбонарки!?</div>
                    <div class="story-card__text">
                      <p>
                        Все началось в дождливый промозглый день...
                      </p>
                      <p>
                        Общественность города А взбудоражило чудовищное убийство известной особы, дамы Карбонары.
                        Вся первая полоса местной газеты была занята скандальной статьей неуловимой журналистки, Гавайской Кокетки.
                      </p>
                      <p>
                        Она очень остра на язык, она знает всё, что происходит в городе А, она знает про вас даже то, что не знают соседи напротив, но кто она — не знает никто!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--END story-slider__item-->
          </div>
        </div>
      </div>
      <!--END story-->
        `
    }
    init(){



        // init Swiper:
        // const swiper = new Swiper();
    }
}