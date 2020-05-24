

export class Storage implements WindowLocalStorage {
    
    map : Map<string, BaseSaveFile>;
    
    localStorage: globalThis.Storage;


    private currentManifest : SaveManifest;

    constructor(public programID : number){
        this.localStorage = window.localStorage;
        this.initialize();
    }


    initialize(){

        this.map = new Map<string, BaseSaveFile>();
        if (this.localStorage.getItem(`${this.programID}manifest`) === null) {
            console.log('first time this user has used this program');
            // initialize our manifest.
            // FIRST SAVE
            this.currentManifest = {programID : this.programID, keys : new Array<string>(), key : `${this.programID}manifest`};
            this.saveManifest();
        }
        else {
            // initialize our internal manifest with the local storage manifest
            // LOAD
            let manFromStorage = this.localStorage.getItem(`${this.programID}manifest`);
            
            if (manFromStorage === null) {
                console.error("wrong");
                return;
            }
            console.log('the manifest has been loaded');
            this.currentManifest = JSON.parse(manFromStorage) as SaveManifest;
            this.saveManifest();
        }
    }

    saveManifest() : void {
        this.localStorage.setItem(this.currentManifest.key, JSON.stringify(this.currentManifest)); 
    }

    // updateManifestMap(save? : boolean){
    //     (Object.keys(this.map).forEach((e) => {
    //         this.currentManifest.keys.push(e);
    //     }));
    //     save ? this.saveManifest() : null;
    // }

    /**
     * 
     * @param file 
     */
    saveFile<T extends BaseSaveFile>(file : T) : boolean{
        if (this.map[file.key] !== undefined) {
            console.log('we already have this thing in our db');
            return false;
        }
        this.localStorage.setItem(file.key, JSON.stringify(file));
        this.map[file.key] = file;
        //this.updateManifestMap(true);
        return true;
    }
}
interface SaveManifest extends BaseSaveFile{
    programID : number;
    key : string;
    keys : Array<string>;
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