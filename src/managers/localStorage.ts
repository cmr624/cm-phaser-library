

export class Storage implements WindowLocalStorage {
    
    map : Map<string, BaseSaveFile>;
    saveSlots : Array<string>;

    constructor(){
        this.localStorage = window.localStorage;
        this.map = new Map<string, BaseSaveFile>();
    }

    localStorage: globalThis.Storage;

    saveFile<T extends BaseSaveFile>(file : T) : boolean{
        if (this.map[file.key] !== undefined) {
            console.log('we already have this thing in our db');
            return false;
        }
        this.localStorage.setItem(`${file.programID}${file.key}`, JSON.stringify(file));
        this.map[file.key] = file;
        return true;
    }
}

class DataObjectCreator {
    currentData : object;
    constructor(){
        this.currentData = {};
    }

    addItem(key, val){
        this.currentData[key] = val;
    }

    removeItem(key) {
        delete this.currentData[key];
    }

    returnJsonStr(){
        return JSON.stringify(this.currentData);
    }

}

// a save file has a program ID
// and an *iterable storage structure ?*

export interface BaseSaveFile {
    programID: number;
    key : string;
}