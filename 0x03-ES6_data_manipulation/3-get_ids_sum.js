export default function getStudentIdsSum(students) {
	const sumOfIds = students.reduce((accumulator, currentValue, index, students) => accumulator + currentValue.id,
	0,);
	return sumOfIds
};
