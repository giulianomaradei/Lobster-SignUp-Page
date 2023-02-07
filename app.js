const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))


app.get('/',(req,res) =>{
    res.sendFile(__dirname + "/signup.html");
});

app.post('/',(req,res) =>{
    var firstName = req.body.fname-input;
    var secName = req.body.sname-input;
    var email = req.body.email-input;

    var obj = {
        members:[
            {
                email_address: email,
                status: "subscribe",
                merge:{
                    
                }
            }
        ]
    }
    
});


app.listen(port,() =>{
    console.log("Tá funcionando chefia :)");
});

/* de9f5c5ec794fb1ac0aaf2d21d4bf30c-us21 */
/* c6375b774c */