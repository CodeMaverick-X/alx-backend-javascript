const fs = require('fs');
function arrToCsv (arr) {
  let nameStr = '';
  for (let x of arr) {
    x = x.split(',')[0];
    if (nameStr === '') {
      nameStr = nameStr + x;
    } else {
      nameStr = nameStr + ', ' + x;
    }
  }
  return nameStr;
}
module.exports = function countStudents (path) {
  fs.readFile(path, 'utf8', function (err, data) {
    if (data) {
      const dataArray = data.split('\n').slice(1);
      const sweArr = [];
      const csArr = [];
      let count = 0;
      for (const row of dataArray) {
        const col = row.split(',');
        if (row) {
          count++;
        }
        if (col[3] === 'SWE') {
          sweArr.push(row);
        } else if (col[3] === 'CS') {
          csArr.push(row);
        }
      }
      const lstSwe = ' List: ' + arrToCsv(sweArr);
      const lstCs = ' List: ' + arrToCsv(csArr);
      console.log('Number of students: ' + count);
      console.log('Number of students in CS: ' + csArr.length + lstCs);
      console.log('Number of students in SWE: ' + sweArr.length + lstSwe);
    }
    if (err) {
      console.log('Cannot load the database');
    }
  });
};
