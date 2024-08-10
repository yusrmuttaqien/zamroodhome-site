import type { EvenSplitArrayParams } from './type';

export default function evenSplitArray(params: EvenSplitArrayParams) {
  const { array } = params;
  const arr = array;
  const middleIndex = Math.ceil(arr.length / 2);

  const firstArray = arr.slice(0, middleIndex);
  const secondArray = arr.slice(middleIndex);

  return { firstArray, secondArray };
}
