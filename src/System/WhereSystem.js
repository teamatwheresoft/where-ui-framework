import {WhereEventSystem} from "../EventSystem/WhereEventSystem";

export class WhereSystem {
    constructor(){
        this.EventSystem = new WhereEventSystem();
        this.services = {};
        this.AppConfig = {}
    }
    
    initApp(config){

    }

    afterInitConfig(){
    }
    updateServices(){
       
    }

}