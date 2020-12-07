export class Card {

    constructor(){
        this.card = [
            {
                name: 'Маргарита',
                img: './src/img/card-margarita.jpg',
                text: 'Главная героиня истории, дочь самого влиятельного мафиози города'
            },
            {
                name: 'Винсент Пепперони',
                img: './src/img/card-vinsent.jpg',
                text: 'Миллионер, плейбой, филантроп. Ему принадлежит весь банковский сектор города'
            },
            {
                name: 'Дон Сан-Доменико',
                img: './src/img/card-san-domeniko.jpg',
                text: 'Известный мафиози, держит весь грибной рынок в округе. Не стоит попадаться ему на пути.'
            },
            {
                name: 'Кристина Алигера',
                img: './src/img/card-aligera.jpg',
                text: 'Горячая особа с отличной репутацией в финансовых кругах.'
            },
            {
                name: 'Тоскующая Тоскана',
                img: './src/img/card-toskana.jpg',
                text: 'Бывшая жена Сан-Доменико. После страшных событий с кланом Сан-Ремо обитает в психбольнице'
            },
            {
                name: 'Детектив Романьоли',
                img: './src/img/card-romanoly.jpg',
                text: 'Детектив с хладнокровным спокойствием. Расследует убийство дамы Карбонары'
            },
            {
                name: 'Четыре Сыра',
                img: './src/img/card-cheeze.jpg',
                text: 'Четверо верных бойцов, готовые в любой момент накрыть своим телом Дона. За главного у них мистер Моцарелла'
            },
            {
                name: 'Чоризо',
                img: '',
                text: 'Хитрый малый. Уличный шулер, готовый добавить перчинки в жизнь простого обывателя.'
            }

        ]
    }

    generateCard(){
        const arr = [];

        this.card.forEach(item => {
            arr.push(
               `
               <div class="person-list__item">
                    <div class="person-card">
                      <div class="person-card__img">
                        <img src="${item.img ? item.img : './src/img/card-default.jpg' }" alt="${item.name}">
                      </div>
                      <div class="person-card__label">${item.name}</div>
                      <div class="person-card__body">
                        <div class="person-card__text">
                          ${item.text}
                        </div>
                      </div>
                    </div>
                </div>
               `
            );
        });

        return arr.join('');
    }

    toHTML(){
        const text =  'hello';
        return `
            <div class="person">
            <div class="layout">
<!--               <div class="section-title">Персонажи</div>-->
                <div class="person-list">
                  ${this.generateCard()}
                </div>
            </div>
               
            </div>
        `
        // document.querySelector('.person').innerHTML = text;
    }

    init(){

    }
}