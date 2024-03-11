import { LocationData } from '../constants/typings';

const RestaurantValidator = {
  validateUserInput(inputData: Object) {
    const inputLocationData = inputData as LocationData;
    if (!inputLocationData.category || !inputLocationData.minutesWalk) {
      throw new Error('값을 입력해주세요.');
    }
    this.validateRestaurantName(inputLocationData.name);
  },

  validateRestaurantName(userInput: string) {
    const isNameLengthOutOfRange = userInput.length < 1 || userInput.length > 20;
    if (isNameLengthOutOfRange) {
      throw new Error('1글자 이상 20글자 이하로 입력해주세요.');
    }

    const isNameBlank = [...new Set(userInput)].join('') === ' ';
    if (isNameBlank) {
      throw new Error('공백을 제외하고 1글자 이상 입력해주세요.');
    }
  },
};

export default RestaurantValidator;
