export class WhereDictionary {
    constructor() {
        // eslint-disable-next-line no-new-object
        this.dict = new Object();
    }

    builtFromArray(keyArr, valArr) {
        for (let i = 0; i < keyArr.length; i++) {
            this.add(keyArr[i], valArr[i]);
        }
    }
    /**
     * Adds any object to the dictionary. If Object already exists this mehtod sets the new object to exisitng key
     * @param {string} key 
     * @param {object} value 
     */
    add(key, value) {
        this.dict[key] = value;
    }
    /**
     * this method same as as add except that method do not add or set the new object if the key already exists
     * @param {string} key 
     * @param {object} value 
     * @returns 
     */
    addExclusive(key, value) {
        if (this.get(key)) {
            return;
        }

        this.add(key, value);
    }

    get(key) {
        return this.dict[key];
    }

    hasKey(key) {
        return this.dict[key] ? true : false;
    }

    getKeys() {
        return Object.keys(this.dict);
    }

    getValuesAsArray() {
        return Object.values(this.dict);
    }

    destroy(key) {
        if (this.hasKey(key)) {
            this.dict[key] = null;
        }
    }

    setOrAdd(key, obj) {
        if (this.hasKey(key)) {
            this.dict[key] = obj;
        }

        else {
            this.add(key, obj);
        }
    }
}