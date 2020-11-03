import {Form} from './Form';

export class Add {
    constructor(selector){
        this.$el = document.querySelector(selector);
    }

    render(){
        const form = new Form();
        this.$el.append(form.getRoot());
        form.init();
    }

}