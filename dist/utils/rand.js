"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * random int inclusive
 * @param min
 * @param max
 *
 */
function randIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
exports.randIntInclusive = randIntInclusive;
//# sourceMappingURL=rand.js.map