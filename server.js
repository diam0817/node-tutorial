const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');




const config = {

    name: 'sample-express-app',

    port: 3000,

    host: '0.0.0.0',

    abcd: 3,

    abcd: 3
};
var users=[{
    id:1,
    name:"diamond",
    email:"diamondc@hotmail.com"
},
{
    id:2,
    name:"alex",
    email:"alex@alex.com"
}
]



const app = express();

const logger = log({ console: true, file: false, label: config.name });




app.use(bodyParser.json());

app.use(cors());

app.use(ExpressAPILogMiddleware(logger, { request: true }));




app.get('/', (req, res) => {

    res.status(200).send('hello Diamond');

});
app.get('/items/:itemId', (req, res) => {

    res.status(200).send(req.params.itemId);

});
app.get('/abcd', (req, res) => {

    res.status(200).send('hello NBCSports');

});
app.post('/', (req, res) => {
    let username=req.body.username
    let password=req.body.password
    let success=false
    let message="invalid login"
    if (username==="diamond" && password==="password123"){
        success=true
        message="valid login"
    }
    let response={
        success,message
    }
    let statusCode=401
    if (success){statusCode=200}
    res.status(statusCode).send(response);

});
app.get('/users', (req, res) => {

    let userslist=JSON.stringify(users)

    res.status(200).send(userslist);

});
app.post('/users', (req, res) => {

    let name=req.body.name
    let email=req.body.email
if(!name || !email){
    res.status(403).send()
}
let id=users.length+1
let user={id,name,email}
users.push(user)
    res.status(200).send(users);

});
app.put('/users/:id', (req, res) => {

let id=parseInt(req.params.id)
let userIndex=users.findIndex(u => u.id===id)  
if(userIndex===-1) {

    res.status(404).send()

}  
let name=req.body.name
    let email=req.body.email
    users[userIndex]={id,name,email}
    res.status(200).send(JSON.stringify(users))
});
app.listen(config.port, config.host, (e)=> {

    if(e) {

        throw new Error('Internal Server Error');

    }

    logger.info(`${config.name} running on ${config.host}:${config.port}`);

});

