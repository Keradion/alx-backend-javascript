export default (students, city) => {
  let studentInCity = [];
  studentInCity = students.filter((student) => student.location === city);

  return studentInCity;
};
