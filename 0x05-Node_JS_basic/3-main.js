const countStudents = require('./test');

countStudents("database.csv")
    .then(() => {
        console.log(result);
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");
