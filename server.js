//Import express.js module and create its variable + body-parser.
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//  8000 and can be accessed through localhost:5000 
const PORT = process.env.PORT || 5000;

//Import PythonShell module. 
const { PythonShell } = require('python-shell');

// Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

//Router to handle the incoming request. 
app.post("/api/execute-script", (req, res, next) => {
    const params = req.params;
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

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

// Creates the server on port. localhost:PORT
app.listen(PORT, () => {
    console.log(`Server connected to ${PORT}`);
});