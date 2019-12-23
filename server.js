require ('dotenv').config()
const http = require('http');
const express = require('express');
const router = express();
const bodyParser = require('body-parser');
var r;
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));
const mysql = require('mysql');
var path = require('path').join(__dirname,'/public');
router.use(express.static(path));

router.set('view engine','ejs');

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.database_user,
    password: process.env.database_password,
    database: 'InternReg'
});

connection.connect(function(err) {
    if (!err) {
        console.log('Connected to MySql!\n');
    } else {
        console.log(err);
    }
});

router.post('/addi',(req,res)=>{
    const name = req.body.name;
    const address = req.body.address;
    const branch = req.body.branch;

    connection.query('insert into interns(fullname,address, branch,projname) values(?,?,?,"")',[name,address,branch],function(error,results,fields){
    if(error)
    {
        console.log(error);
        console.log("error");
        res.sendStatus(400);
    }
    else
    res.redirect("thanks");
    });
});

router.post('/addp',(req,res)=>{
    const name = req.body.name;
    const domain = req.body.domain;
    connection.query('insert into projects(projname,domaintype,fullname) values(?,?,"")',[name,domain],function(error,results,fields){
    if(error)
    {
        console.log(error);
        console.log("error");
        res.sendStatus(400);
    }
    else
    res.redirect("thanks");
    });
});

router.get('/interns', (req, res) =>{
    //fetching from logs table
    connection.query('SELECT* FROM interns', function (error, result, fields) {
    if (error){
        console.log(error)
        res.sendStatus(400);
    }
    else
    res.render("interns",{results:result});
    });
});

router.get('/projects', (req, res) =>{
    //fetching from logs table
    connection.query('SELECT* FROM projects', function (error, result, fields) {
    if (error){
        console.log(error)
        res.sendStatus(400);
    }
    else
        console.log(result)
    res.render("projects",{results:result});
    });
});

router.get('/assignproject', (req, res) =>{
    connection.query('SELECT projects.projname, interns.fullname from interns, projects', function (error, result, fields) {
    if (error){
        console.log(error)
        res.sendStatus(400);
    }
    else
    res.render("assignproject",{dropdownVals:result});
    });
   
});

router.post('/assignp',(req,res)=>{
    const name = req.body.sortfilter;

    connection.query('insert into list values(?)',[name],function(error,results,fields){
    if(error)
    {
        console.log(error);
        console.log("error");
        res.sendStatus(400);
    }
    else
    res.redirect("thanks2");
    });
});
router.get("/", (req,res)=>{
res.render("home");
});

router.get("/thanks", (req,res)=>{
res.render("thanks");
});

router.get("/thanks3", (req,res)=>{
res.render("thanks3");
});

router.get("/thanks2", (req,res)=>{
res.render("thanks2");
});

router.get("/addintern", (req,res)=>{
res.render("addintern");
});

router.get("/addproject", (req,res)=>{
res.render("addproject");
});

router.get("/home", (req,res)=>{
res.render("home");
});

//port activation
router.listen(4001, (req, res) => {
    console.log("Listening on 4001");
});