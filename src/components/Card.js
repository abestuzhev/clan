export class Card {

    constructor(){
        this.card = [
            {
                name: 'Маргарита',
                img: '',
                text: 'главная героиня истории, дочь самогог влиятельного мафиозе города'
            },
            {
                name: 'Винсент Пепперони',
                img: '',
                text: 'Гений, миллиардер, плейбой, филантроп'
            }
        ]
    }

    generateCard(){

        const arr = this.card.forEach(item => {
            
        });

        return arr;
        return `
        <div class="person-list__item">
            <div class="person-card">
              <div class="person-card__img">
                <img src="./src/img/card-маргарита.jpg" alt="">
              </div>
              <div class="person-card__label">Маргарита</div>
              <div class="person-card__body">
                <div class="person-card__text">
                  Главная героиня истории, дочь самого влиятельного мафиозе города
                </div>
              </div>
            </div>
        </div>
        `
    }

    render(){
        return `
            <div class="person">
                <div class="person-title">Персонажи</div>
                <div class="person-list">
                  ${this.generateCard()}                  
                </div>
            </div>
        `
    }
}