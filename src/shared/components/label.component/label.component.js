import { Components } from "../super-class/super.component";

export class LabelComponent extends Components {

    constructor(text) {
        super();
        this.text = text;
        this.element = null;
    }

    display(parent) {
        this.divLabel = super.createAppendElement(parent, "wog-label-component");
        this.element = super.createAppendElement(this.divLabel, "label");
        super.createTextAndAppendElement(this.element, this.text);
    }

}