function addTwoNumbers(num1, num2) {
    return num1 + num2 
}

function assertEqual(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}
actualResult = addTwoNumbers(3, 5);
expectResult = 8

assertEqual(actualResult, expectResult, "The sum of two numbers")