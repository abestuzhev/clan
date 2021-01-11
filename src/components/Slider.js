// core version + navigation, pagination modules:
import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';
// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);
const story = require('../story');


export class Slider {

   constructor() {
      this.story = JSON.parse(JSON.stringify(story));
   }

   generateSlide() {
      const arr = [];

      this.story.forEach(slide => {
         arr.push(
            `
               <!--START story-slider__item-->
                <div class="story-slider__item swiper-slide">
                  <div class="story-card">
                    <div class="story-card__img">
                      <img src="${slide.img}" alt="${slide.title}">
                    </div>
                    <div class="story-card__body">
                      <div class="story-card__wrapper swiper-container">
                      
                         <div class="swiper-wrapper">
                             <div class="swiper-slide" ss-container>
                                <div class="story-card__title">${slide.title}</div>
                                <div class="story-card__text" >
                                  ${slide.text}
                                </div>
                             </div>                     
                         </div>
                         <div class="swiper-scrollbar"></div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <!--END story-slider__item-->
               `
         );
      });

      return arr.join('');
   }

   toHTML() {
      return `
        <!--START story-->
      <div class="story">
      <div class="section-title">История клана</div>
      <div class="layout">
      <div class="story-container swiper-container">
          <div class="story-slider swiper-wrapper">            
            ${this.generateSlide()}
          </div>         

          <div class="story-operation">
          
             <div class="swiper-button-prev"></div>
             
             <div class="story-pagination">
                <span class="story-pagination__text">Эпизод: </span>
                <div class="swiper-pagination"></div>
             </div>  
             <div class="swiper-button-next"></div>   
          </div>
          
          <div class="story-navigation">
          </div>    
          
        </div>
      </div>
        
      </div>
      <!--END story-->
        `
   }

   init() {

      // const sliderWrap = this.toHTML();


      // document.addEventListener("DOMContentLoaded", function (event) {
         const swiper = new Swiper('.story-container', {
            loop: true,


            navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
            },

            pagination: {
               el: '.swiper-pagination',
               type: 'fraction',
               clickable: true,
               renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + (index + 1) + '</span>';
               },
            },
         });

      // });


      return '';
   }
}