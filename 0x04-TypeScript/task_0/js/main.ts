interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'yoyo',
    lastName: 'reinhard',
    age: 21,
    location: 'port-harcourt',
}
const student2: Student = {
    firstName: 'james',
    lastName: 'king',
    age: 22,
    location: 'port-harcourt',
}
const studentsList = [student1, student2];
console.table(studentsList, ['firstName', 'location']);
