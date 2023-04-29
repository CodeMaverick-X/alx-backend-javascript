var student1 = {
    firstName: 'yoyo',
    lastName: 'reinhard',
    age: 21,
    location: 'port-harcourt',
};
var student2 = {
    firstName: 'james',
    lastName: 'king',
    age: 22,
    location: 'port-harcourt',
};
var studentsList = [student1, student2];
console.table(studentsList, ['firstName', 'location']);
