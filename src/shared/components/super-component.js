export class Components {

    constructor (elem, json) {
        this.elem = elem;
        this.json = json;
    }

    setAttribute(elem, json) {
        for (const key in json) {
            elem.setAttribute(key, json[key]);
        };
    }

}