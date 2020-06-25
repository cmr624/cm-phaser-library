import { BaseSprite } from "../sprites/base";

export class LinearBoardEditor {
    currentBoardArray : Array<Phaser.Types.Math.Vector2Like>;
    images : Array<Phaser.GameObjects.Image>;
    downloadJsonButton : BaseSprite; 
    undoButton : BaseSprite;

    constructor(public scene : Phaser.Scene, public spaceKey : string, public undoKey : string, public downloadKey : string){
        this.currentBoardArray = new Array<Phaser.Types.Math.Vector2Like>();
        this.images = new Array<Phaser.GameObjects.Image>();

        this.scene.input.on('pointerdown', (pointer : Phaser.Input.Pointer) => {

            if (this.undoButton.getBounds().contains(pointer.worldX, pointer.worldY)
            || this.downloadJsonButton.getBounds().contains(pointer.worldX, pointer.worldY))
            {
                return;
            }

            this.currentBoardArray.push({x:pointer.worldX,y:pointer.worldY});
            this.images.push(this.scene.add.image(pointer.worldX, pointer.worldY, this.spaceKey));
        });

        this.undoButton = new BaseSprite(this.scene, 50, 1000, this.undoKey);
        this.undoButton.setInteractive();
        this.undoButton.on('pointerdown', () => {
            this.undoLastAddedItem();
        });

        this.downloadJsonButton = new BaseSprite(this.scene, 1550, 1000, this.downloadKey);
        this.downloadJsonButton.setInteractive();
        this.downloadJsonButton.on('pointerdown', () => {
            this.saveArrayToJSON();
        });

    }
    
    undoLastAddedItem(){
        this.currentBoardArray.splice(this.currentBoardArray.length - 1);
        this.images[this.images.length - 1].destroy();
        this.images.splice(this.images.length - 1);
    }

    saveArrayToJSON(){
        downloadObjectAsJson(this.currentBoardArray, 'boardData');
    }

}

// src https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
export function downloadObjectAsJson(exportObj : any, exportName : string){
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    let downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }