export class NotFound {

    toHTML(){
        return `
        <div class="notFound">
            <div class="notFound-text">Страница не найдена</div>  
            <a href="#/" class="c-btn c-btn-outline">На главную</a>
        </div>
        `
    }

}