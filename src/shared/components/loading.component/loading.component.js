import { Components } from "../super-class/super.component";

export class LoadingComponent extends Components {

    constructor(text){
        super();
        this.text = text;
    }
    display(parent){
        this.divLoading = super.createAppendElement(parent, "wog-loading-component");
        this.loadingComponent = super.createAppendElement(this.divLoading,"label");
        super.createTextAndAppendElement(this.loadingComponent, this.text);
    }
    hide(){
        this.divLoading.parentNode.removeChild(this.divLoading);
    }
}