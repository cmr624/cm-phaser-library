/**
 * random int inclusive
 * @param min 
 * @param max 
 * 
 */
export function randIntInclusive(min, max) : number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}