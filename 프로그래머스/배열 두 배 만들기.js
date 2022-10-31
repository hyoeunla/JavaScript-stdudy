function solution(numbers) {
  var answer = [];
  for (i in numbers) {
    i = numbers[i] * 2;
    answer.push(i);
  }
  return answer;
}

// 파이썬 append 대신 push를 사용한다
