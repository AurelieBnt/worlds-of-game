export class Components {

    constructor () { 
    }

    setAttribute(elem, json) {
        for (const key in json) {
            elem.setAttribute(key, json[key]);
        };
    }

    createAppendElement(parent, tagName){
        const child = document.createElement(tagName)
        parent.appendChild(child);
        return child;
    }

    createTextAndAppendElement(parent, textNode){
        const child = document.createTextNode(textNode)
        parent.appendChild(child);
        return child;
    }
}