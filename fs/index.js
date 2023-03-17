const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Write data to a file
fs.writeFile('example.txt', 'Hello, world!', 'utf8', (err) => {
if (err) throw err;
console.log('File written successfully!');
});

// Create a new directory
fs.mkdir('mydir', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Directory created successfully!');
  });
  
// Remove a directory
fs.rmdir('mydir', (err) => {
if (err) {
    console.error(err);
    return;
}
console.log('Directory removed successfully!');
});
  
// List the contents of a directory
fs.readdir('mydir', (err, files) => {
if (err) {
    console.error(err);
    return;
}
console.log(files);
});
