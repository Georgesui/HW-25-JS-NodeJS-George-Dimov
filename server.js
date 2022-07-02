const Student = require('./student')
const Teacher = require('./teacher')


let student1 = new Student('George', 27, 'male', 'sport')
let teacher = new Teacher('Olga', 34, 'female', 'science', 'biology')
console.log(student1, teacher)