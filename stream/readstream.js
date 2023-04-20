let fs = require('fs');


let constant = '';

let readstream = fs.createReadStream('input.tt');

readstream.on('data', (chunk)=> constant += chunk);

readstream.on('end', ()=> console.log(constant));

readstream.on('error',(err)=> console.log(err.stack));