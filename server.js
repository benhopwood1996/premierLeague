const words = ['Duck', 'Frog', 'Dog', 'Cat', 'Fish'];
const express = require('express');

const PORT = 8081;
const app = express();



function findWordBinary(word){
    console.log(word);
    let found = false;
    let high = words.length;
    let low = 0;
    let index = Math.floor(words.length/2);

    while(!found){
        if(words[index] === word){
            return true;
        }

        if(words[index] > word){
            high = index;
        }
        else if(words[index] < word){
            low = index+1;
        }
        index = Math.floor((low+high)/2);

        if(high <= low){
            return false;
        }
    }
}

app.options('/', function(req, res){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', '*');
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Max-Age", "1728000");
    return res.sendStatus(200);
});

app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    returnVal = findWordBinary(req.headers.word);
    console.log('Returning response: ' + returnVal);
    res.send(returnVal);
});

app.listen(PORT);
console.log("Server is running on localhost8081");
