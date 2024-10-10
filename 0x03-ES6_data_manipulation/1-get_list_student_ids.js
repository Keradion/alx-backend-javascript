export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    const ids = students.map((student) => student.id);
    return ids;
  }
  return [];
}
