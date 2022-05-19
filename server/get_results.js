const values = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

const cleanInput = (input) => {
  if (!input) return [];
  return input
    .toString()
    .split("")
    .filter((el) => values[el]);
};

const getValues = (input) => {
  return values[input.toString()];
};

const valuesForInput = (input) => {
  return input.map((number) => {
    return getValues(number);
  });
};

const getCombinations = (baseArray, tailArray) => {
  if (!tailArray) {
    return "";
  }

  if (tailArray.length === 1) {
    let result = baseArray
      .map((letter) => {
        return tailArray[0].map((tail_letter) => {
          return letter + tail_letter;
        });
      })
      .flat();
    return result;
  } else {
    const [head, ...tail] = tailArray;
    return getCombinations(baseArray, [getCombinations(head, tail)]);
  }
};

const calculateResult = (input) => {
  const [head, ...tail] = valuesForInput(cleanInput(input));
  if (!tail || tail.length === 0) {
    if (!head) {
      return [];
    } else {
      return head;
    }
  }

  return getCombinations(head, tail);
};

module.exports = { calculateResult };
