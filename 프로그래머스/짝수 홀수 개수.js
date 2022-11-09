function solution(num_list) {
  let odd = 0;
  let even = 0;
  for (i in num_list) {
    if (num_list[i] % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }
  var answer = [];
  answer.push(even);
  answer.push(odd);
  return answer;
}
