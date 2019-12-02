const day1Input = [
  51590,
  53619,
  101381,
  81994,
  139683,
  53417,
  124196,
  127640,
  99688,
  116170,
  127812,
  95979,
  73734,
  105347,
  130495,
  89331,
  116486,
  65177,
  143689,
  130487,
  57206,
  74950,
  141398,
  100921,
  114019,
  137106,
  137690,
  70779,
  61421,
  121827,
  122432,
  108229,
  65362,
  70884,
  56127,
  83611,
  126776,
  91422,
  51444,
  52424,
  69535,
  110270,
  115006,
  97214,
  85306,
  77028,
  102078,
  82928,
  101635,
  91889,
  58082,
  72996,
  74276,
  135691,
  113622,
  118522,
  56796,
  115576,
  138861,
  63418,
  64090,
  131682,
  93394,
  61302,
  98591,
  67253,
  69822,
  121652,
  133636,
  106283,
  83460,
  53394,
  65208,
  66158,
  113100,
  52984,
  126741,
  75880,
  124770,
  54681,
  69994,
  138088,
  83435,
  75332,
  114436,
  141680,
  68659,
  111337,
  56920,
  74203,
  96424,
  86848,
  69561,
  53861,
  118216,
  79570,
  136039,
  120959,
  122917,
  122226
];

/*

So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative. For example:

    A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
    At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel,
     which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
    The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.

What is the sum of the fuel requirements for all of the modules on your spacecraft when also taking into account the mass of the added fuel?
 (Calculate the fuel requirements for each module separately, then add them all up at the end.)

*/
// console.log(Math.floor(100756 / 3) - 2);
let answerArr = [];
const total_fuel = num => {
  while (Math.floor(num / 3) - 2 > 0) {
    answerArr.push(Math.floor(num / 3) - 2);
    let new_num = Math.floor(num / 3) - 2;
    num = new_num;
  }
};
// total_fuel(100756);
day1Input.forEach(num => {
  //   console.log(num);
  total_fuel(num);
});
// console.log(answerArr);
let answer = answerArr.reduce((a, b) => a + b, 0);
console.log(answer);
