"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayAndCopyCoords = function (scene) {
    scene.input.on('pointerdown', function (pointer) {
        var str = copyPhaserWorldCoordsToClipboard(pointer);
        var text = scene.add.text(pointer.worldX, pointer.worldY, str + "\ncopied to clipboard", { fontSize: '34px', color: 'black' }).setOrigin(.5);
        setTimeout(function () {
            text.destroy();
        }, 500);
    });
};
var copyPhaserWorldCoordsToClipboard = function (pointer) {
    var str = pointer.worldX + "," + pointer.worldY;
    stringToClipboard(str);
    return str;
};
/**
 *
 *
 * @export
 * @param {string} str
 */
function stringToClipboard(str) {
    var el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
//# sourceMappingURL=worldCoords.js.map