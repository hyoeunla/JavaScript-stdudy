function solution(angle) {
  if (0 < angle && angle < 90) {
    answer = 1;
    return answer;
  } else if (angle === 90) {
    answer = 2;
    return answer;
  } else if (angle < 180) {
    answer = 3;
    return answer;
  } else {
    answer = 4;
    return answer;
  }
}
