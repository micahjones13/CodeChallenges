/* Day 1

Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

For example:

    For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
    For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
    For a mass of 1969, the fuel required is 654.
    For a mass of 100756, the fuel required is 33583.

The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

*/
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

let answerArr = [];
// console.log(day1Input, "before foreach");

day1Input.forEach(num => {
  // divide by 3, round down, - 2
  answerArr.push(Math.floor(num / 3) - 2);
});

// console.log(answerArr, "after");

let answer = answerArr.reduce((a, b) => a + b, 0);
console.log(answer, "answer"); //3152919
