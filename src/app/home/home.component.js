import { BrandTitleComponent } from "../../shared/components/brand-title.component/brand-title.component";
import { TitleComponent } from "../../shared/components/title.component/title.component";
import { ButtonComponent } from "../../shared/components/button.component/button.component";
import { Components } from "../../shared/components/super-class/super.component";

export class HomeComponent extends Components{

    constructor(){
        super()
    }

    display(parent){
        const div1 = document.createElement("div");
        const brandTitleComponent = new BrandTitleComponent("Welcome to Worlds of Java", "assets/images/logoOfficiel.png", "height : 150px")
        brandTitleComponent.display(div1)
        const title = new TitleComponent("Ready for a game party ?");
        title.display(div1);
        const divPropose = super.createAppendElement(div1, "div");
        const proposeButton = new ButtonComponent("Propose Game");
        proposeButton.display(divPropose);
        const divSearch = super.createAppendElement(div1, "div");
        const searchGame = new ButtonComponent("Search Game");
        searchGame.display(divSearch);
        parent.appendChild(div1);
    }

}