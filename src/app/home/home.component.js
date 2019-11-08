import { BrandTitleComponent } from "../../shared/components/brand-title.component/brand-title.component";
import { TitleComponent } from "../../shared/components/title.component/title.component";
import { ButtonComponent } from "../../shared/components/button.component/button.component";
import { Components } from "../../shared/components/super-class/super.component";
import { BackButtonComponent } from "../../shared/components/back-button.component/back-button.component";

export class HomeComponent extends Components{

    constructor(){
        super()
    }

    display(){
        const div1 = document.createElement("div");
        this.brandTitleComponent = new BrandTitleComponent("Welcome to Worlds of Java", "assets/images/logoOfficiel.png", "height : 150px")
        this.brandTitleComponent.display(div1)
        this.title = new TitleComponent("Ready for a game party ?");
        this.title.display(div1);
        const divPropose = super.createAppendElement(div1, "div");
        const proposeButton = new ButtonComponent("Propose Game");
        proposeButton.display(divPropose);
        const divSearch = super.createAppendElement(div1, "div");
        this.searchGame = new ButtonComponent("Search Game");
        this.searchGame.display(divSearch);
        this.backButton = new BackButtonComponent("back", "submit", "login");
        this.backButton.display(div1);
        document.body.appendChild(div1);
    }

    hide(){
        this.brandTitleComponent.hide();
        this.title.hide();
        this.searchGame.hide();
        this.backButton.hide();

    }
}