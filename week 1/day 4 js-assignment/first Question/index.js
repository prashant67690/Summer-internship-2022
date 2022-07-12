
// created the areaOfTriangle function to calculate the area of triangle through herons formula
const areaOfTriangle = (firstSide,secondSide, thirdSide) => {
    const firstSideIsNum = typeof firstSide === "number";
    const secondSideIsNum = typeof secondSide === "number";
    const thirdSideIsNum = typeof thirdSide === "number";
    if (!(firstSideIsNum && secondSideIsNum && thirdSideIsNum)) {   //checking that the sides entered are of number type or not
      return NaN;
    } else {

        // calculating the semi perimeter here
      const semiPerimeter = (firstSide +secondSide +secondSide) / 2;
      const area = Math.sqrt(
        semiPerimeter *
          (semiPerimeter - firstSide) *
          (semiPerimeter - secondSide) *
          (semiPerimeter - thirdSide)
      );//applying the herons formula here
      return area.toFixed(2);
    }
  };
  
  console.log(areaOfTriangle(5, 6, 7));