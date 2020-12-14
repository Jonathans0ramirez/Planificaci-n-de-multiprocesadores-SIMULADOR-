//Import express.js module and create its variable. 
const express = require('express');
const app = express();

//  8000 and can be accessed through localhost:8000 
const PORT = process.env.PORT || 8000;

//Import PythonShell module. 
const { PythonShell } = require('python-shell');

//Router to handle the incoming request. 
app.get("/", (req, res, next) => {
    //Here are the option object in which arguments can be passed for the python_test.js. 
    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time 
        scriptPath: './scripts', //If you are having python_test.py script in same folder, then it's optional. 
        args: ['-n', '1', '-L', 'a:30:200', '-M', '300', '-c', '-T'] //An argument which can be accessed in the script using sys.argv[1] 
    };


    PythonShell.run('multi.py', options, function (err, result) {
        if (err) throw err;
        // result is an array consisting of messages collected  
        //during execution of script.
        const vj = result.map(line => {
            return `${line}<br>`
        }).join('')
        res.send(vj)
    });
});

// Creates the server on port. localhost:PORT
app.listen(PORT, () => {
    console.log(`Server connected to ${PORT}`);
});