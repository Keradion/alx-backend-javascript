export default function taskBlock(trueOrFalse) {
  var task;
  var task2;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }
  task = false;
  task2 = true;

  return [task, task2];
}
