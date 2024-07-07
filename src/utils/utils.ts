/**
 * Shuffles a copy of the array using the Fisher-Yates (aka Knuth) algorithm.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to be shuffled.
 * @return {T[]} - A shuffled copy of the original array.
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  let currentIndex = array.length;
  const shuffledArray = [...array];
  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex], shuffledArray[currentIndex]];
  }

  return shuffledArray;
};
