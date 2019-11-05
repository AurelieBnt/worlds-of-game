import { Components } from "../super-class/super.component";

export class LoadingComponent extends Components {

    constructor(text){
        super();
        this.text = text;
    }
    display(parent){
        this.loadingComponent = super.createAppendElement(parent,"label");
        super.createTextAndAppendElement(this.loadingComponent, this.text);
    }
    hide(){
        this.loadingComponent.parentNode.removeChild(this.loadingComponent);
    }
}