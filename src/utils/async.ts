/**
 * Async For Each
 * calls 'await' on each promise
 * @param array array
 * @param callback callback
 */
export async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }