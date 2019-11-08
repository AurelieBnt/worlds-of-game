import { Components } from "../super-class/super.component";

export class AlertComponent extends Components {

    constructor(text) {
        super();
        this.text = text;
        this.element = null;
    }

    display(parent) {
        this.divAlert = super.createAppendElement(parent, "wog-alert-component");
        this.element = super.createAppendElement(this.divAlert, "h4");
        super.createTextAndAppendElement(this.element, this.text);
        parent.insertBefore(this.divAlert, parent.firstChild);
        //super.setAttribute(this.element, {name : this.name, value : this.value});
    }

    hide() {
        this.divAlert.parentNode.removeChild(this.divAlert);
    }

}