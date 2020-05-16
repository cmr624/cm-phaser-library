

export class Storage implements WindowLocalStorage {
    
    map : Map<string, BaseSaveFile>;
    
    localStorage: globalThis.Storage;


    private currentManifest : SaveManifest;

    constructor(public programID : number){
        this.localStorage = window.localStorage;
        this.initialize();
    }


    initialize(){
        if (this.localStorage.getItem(`${this.programID}manifest`) === null) {
            console.log('first time this user has used this program');
        }
        else {
            // initialize our manifest.


        }
        this.map = new Map<string, BaseSaveFile>();
    }

    /**
     * 
     * @param file 
     */
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

interface SaveManifest {
    programID : number;
    map : Map<string, BaseSaveFile>;
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

// we could have a manifest document that exists at the 'programIDmanifest' key that has every entry in storage

// a save file has a program ID
// and an *iterable storage structure ?*

export interface BaseSaveFile {
    programID: number;
    key : string;
}