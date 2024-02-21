const ERROR_PREFIX = "[ERROR]";

const ERROR_MESSAGE = Object.freeze({
  typeIsInteger: `${ERROR_PREFIX} 정수만 입력 가능합니다.`,
  outOfRange: `${ERROR_PREFIX} 1,000원 이상, 100,000원 이하의 금액만 입력 가능합니다.`,
  divisibleByMinimumPrice: `${ERROR_PREFIX} 1000으로 나누어 떨어지는 입력만 가능합니다.`,
  notEmpty: `${ERROR_PREFIX} 공백은 입력할 수 없습니다.`,
  withoutSpaces: `${ERROR_PREFIX} 입력에 공백을 포함할 수 없습니다.`,
});

export default ERROR_MESSAGE;
