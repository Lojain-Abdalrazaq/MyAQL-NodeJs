const express = require('express');
const mysql = require('mysql');

const app = express();

// creating a connection to mysql
// 1. We have to make sure that the user and password are correct.
// 2. make sure about the authentication method used by your MySQL user is compatible with the MySQL client used in your Node.js app
//    (for example, the caching_sha2_password authentication plugin is not supported by the mysql package for Node.js).
//    As a result, I updated the password for the root user to use the mysql_native_password plugin in the mysql workbench using:
//    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root123';
//    FLUSH PRIVILEGES;
const db_connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'nodeDB'
});

// creating a database using a route in express and then connecting to the database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodeDB';
    db_connection.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

// connecting to the database
db_connection.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Connected to the database...');
});

// create a table route
app.get('/createtable', (req,res) =>{
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(244), PRIMARY KEY(id))';
    db_connection.query(sql, (err, result) => {
        if(err) throw err.message;
        console.log(result);
        res.send('Posts table created...');
    });
});

// insert a post route
app.get('/addpost1', (req,res) =>{
    let post = {title: 'Post One', body: 'This is post number one'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db_connection.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post one added...');
    });
});

// select posts route
app.get('/getposts', (req,res) =>{
    let sql = 'SELECT * FROM posts';
    let query = db_connection.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    });
});

// select single post route
app.get('/getpost/:id', (req,res) =>{
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db_connection.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

// update post route
app.put('/updatepost/:id', (req,res) =>{
    let newTitle = 'Updated Title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db_connection.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post updated...');
    });
});

// delete post route
app.delete('/deletepost/:id', (req,res) =>{
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db_connection.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post deleted...');
    });
});

app.listen('3000',() =>{
    console.log('Server started on port 3000');
});