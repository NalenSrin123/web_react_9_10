// process.stdin.setEncoding('utf-8');
console.log('Enter something:');

process.stdin.on('data', (data) => {
    console.log(`You entered: ${data}`);
    process.exit();
});

