function solution(numbers) {
  var answer = 0;
  for (i in numbers) {
    answer += numbers[i];
  }
  return answer / numbers.length;
}
