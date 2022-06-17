const fs = require ('fs');

let fileNumber = 1;

while (fileNumber <= 5) {
    createFileAsync(fileNumber);
    createFileSync(fileNumber);
    fileNumber++;
}

function createFileAsync(fileNumber) {
    console.time(`time (async-file-${fileNumber})`);
    fs.writeFile(`async-test-${fileNumber}.txt`, 'Hello Node.js', (err) => {
        if (err) throw err;
        console.timeEnd(`time (async-file-${fileNumber})`);
    });
}

function createFileSync(fileNumber) {
    console.time(`time (sync-file-${fileNumber})`);
    fs.writeFileSync(`sync-test-${fileNumber}.txt`, 'Hello Node.js')
    console.timeEnd(`time (sync-file-${fileNumber})`);
}

