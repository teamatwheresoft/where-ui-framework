import {WhereDictionary} from "./WhereDictionary";


export class WhereCollection {
    constructor(){
        this.dict = new WhereDictionary();
    }    

    add(key,value)
    {
        if(this.dict.hasKey(key))
        {
            this.dict.get(key).push(value);
            return;
        }

        let arr = [];
        arr.push(value)
        this.dict.add(key,arr);
    }

    get(key)
    {
        return this.dict.get(key);
    }

    getKeys()
    {
        return this.dict.getKeys();
    }

    remove(key)
    {
        this.dict.destroy(key);
    }   
}