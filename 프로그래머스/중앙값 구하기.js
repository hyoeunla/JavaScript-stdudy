function solution(array) {
  var answer = 0;
  array.sort(function (a, b) {
    return a - b;
  });
  let i = array.length - 1;
  i = i / 2;
  answer = array[i];
  return answer;
}
