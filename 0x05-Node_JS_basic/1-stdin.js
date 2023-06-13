process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    let val = process.stdin.read();
    if (val !== null) {
        process.stdout.write('Your name is: ' + val);
    }
})
process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
