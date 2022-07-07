const calculatingDifference = (inputNum) => {
    if (typeof inputNum === "number") {
      if (inputNum > 13) {
        return 2 * Math.abs(inputNum - 13);
      } else {
        return Math.abs(inputNum - 13);
      }
    }
  };
  
  console.log(calculatingDifference(50));
  console.log(calculatingDifference(7));