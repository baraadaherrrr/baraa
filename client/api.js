const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const xlsx = require('xlsx')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/*
app.use(cors({
    origin: ['https://www.section.io', 'https://www.google.com/']
}));*/


app.use(cors());
   


/*app.get('/' , function(req, res) {
    res.send('baraa daher')
})

app.get('/' , (req, res)=> {
    res.send('baraa daher')
})
app.get('/louay' , (req, res) =>{
    res.send('louay daher')
})
app.get('/saer' , (req, res) =>{
    res.send('saer daher')
})*/
app.get('/getstudents' , (req, res) =>{
    res.send({id:17 , name :'baraa daher' , age : 19})
})
app.get('/getAllstudents' , (req, res) => {
   /* res.send
    (
        [
            {id:14 , name : 'baraa' , age :19},
            {id:15 , name : 'louay' , age :21},
            {id:16 , name : 'saer' , age :20},
            {id:17 , name : 'antony' , age :18},
            {id:18 , name : 'rony' , age :25},
            {id:19 , name : 'hiba' , age :17},
            {id:20 , name : 'carla' , age :24}
        ]
        
    )
})*/

let wb = xlsx.readFile('data3.xlsx');
let ws = wb.Sheets['studentss'];
let data = xlsx.utils.sheet_to_json(ws)
res.send(data);
})
app.post('/login' , (req, res) =>{
    let _username = req.body.username;
    let _password = req.body.password;
    if (_username == "baraa" && _password =="daher04"){
        res.status(200).send("success")
    }
    else
    {
        res.status(301).send("unsuccess")
    }
    res.send({id:17 , name :'baraa daher' , age : 19})
})

app.listen(3000)