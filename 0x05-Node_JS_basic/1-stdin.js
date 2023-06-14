process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const val = process.stdin.read();
  if (val) {
    process.stdout.write(`Your name is: ${val}`);
  }
});
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
