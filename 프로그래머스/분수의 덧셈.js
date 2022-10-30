function solution(denum1, num1, denum2, num2) {
  var answer = [];
  denum1 = denum1 * num2;
  denum2 = denum2 * num1;
  num1 = num1 * num2;
  denum1 = denum1 + denum2;
  let min = denum1 < num1 ? denum1 : num1;
  let gcd = 1;
  for (let i = 2; i <= min; i++) {
    if (denum1 % i === 0 && num1 % i === 0) {
      gcd = i;
    }
  }
  answer = [denum1 / gcd, num1 / gcd];
  return answer;
}
