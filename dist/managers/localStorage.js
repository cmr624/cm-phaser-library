"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Storage = /** @class */ (function () {
    function Storage(programID) {
        this.programID = programID;
        this.localStorage = window.localStorage;
        this.initialize();
    }
    Storage.prototype.initialize = function () {
        this.map = new Map();
        if (this.localStorage.getItem(this.programID + "manifest") === null) {
            console.log('first time this user has used this program');
            // initialize our manifest.
            // FIRST SAVE
            this.currentManifest = { programID: this.programID, keys: new Array(), key: this.programID + "manifest" };
            this.saveManifest();
        }
        else {
            // initialize our internal manifest with the local storage manifest
            // LOAD
            var manFromStorage = this.localStorage.getItem(this.programID + "manifest");
            if (manFromStorage === null) {
                console.error("wrong");
                return;
            }
            console.log('the manifest has been loaded');
            this.currentManifest = JSON.parse(manFromStorage);
            this.saveManifest();
        }
    };
    Storage.prototype.saveManifest = function () {
        this.localStorage.setItem(this.currentManifest.key, JSON.stringify(this.currentManifest));
    };
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
    Storage.prototype.saveFile = function (file) {
        if (this.map[file.key] !== undefined) {
            console.log('we already have this thing in our db');
            return false;
        }
        this.localStorage.setItem(file.key, JSON.stringify(file));
        this.map[file.key] = file;
        //this.updateManifestMap(true);
        return true;
    };
    return Storage;
}());
exports.Storage = Storage;
var DataObjectCreator = /** @class */ (function () {
    function DataObjectCreator() {
        this.currentData = {};
    }
    DataObjectCreator.prototype.addItem = function (key, val) {
        this.currentData[key] = val;
    };
    DataObjectCreator.prototype.removeItem = function (key) {
        delete this.currentData[key];
    };
    DataObjectCreator.prototype.returnJsonStr = function () {
        return JSON.stringify(this.currentData);
    };
    return DataObjectCreator;
}());
//# sourceMappingURL=localStorage.js.map