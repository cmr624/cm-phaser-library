export const displayAndCopyCoords = (scene : Phaser.Scene) => {
    scene.input.on('pointerdown', (pointer : Phaser.Input.Pointer) => {
        let str = copyPhaserWorldCoordsToClipboard(pointer);
        let text = scene.add.text(pointer.worldX, pointer.worldY, `${str}\ncopied to clipboard`, {fontSize:'34px', color:'black'}).setOrigin(.5);
        setTimeout(() => {
            text.destroy();
        }, 500);
    })
    
} 
const copyPhaserWorldCoordsToClipboard = (pointer : Phaser.Input.Pointer) : string=> {
    let str = `${pointer.worldX},${pointer.worldY}`;
    stringToClipboard(str);
    return str;
}

/**
 *
 *
 * @export
 * @param {string} str
 */
function stringToClipboard(str : string) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}