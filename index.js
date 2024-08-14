// import dotenv from "dotenv";
// import Database from './data.js'

// dotenv.config()

// console.log(process.env.APP_SERVER_PORT);

// const read = async () => {
//     const db = await Database();
//     // db.insertOne({
//     //     name:"abcd",
//     //     age:[17,19,22]
//     // })
//     // const result = db.aggregate( [ { $match:{ gender:"Female" } }, { $project:{gender:"Female"}}, {$count:"number of Female"}] )
//     const result = db.aggregate([{$match:{name:"abcd"}},{$project:{name:1}}])

//     // console.log(result);
//     for await (const doc of result) {
//         console.log(doc);
//     }
// }

// read();

import mysql2 from "mysql2";

const connection = mysql2.createConnection({
    host: 'localhost',   // Replace with your MySQL host, if different
    user: 'root',        // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'node_example'
});

// Connect to the MySQL server
//   connection.connect((err) => {
//     if (err) {
//       return console.error('error connecting: ' + err.stack);
//     }
//     console.log('Connected to MySQL server as id ' + connection.threadId);

//     // Create a new database named 'node_example'
//     const createDbQuery = 'CREATE DATABASE IF NOT EXISTS node_example';

//     connection.query(createDbQuery, (err, results) => {
//       if (err) {
//         console.error('Error creating database:', err.message);
//       } else {
//         console.log('Database created successfully:', results);
//       }

//       // Close the connection
//       connection.end();
//     });
//   });

// connection.connect((err) => {
//     if (err) {
//       return console.error('error connecting: ' + err.stack);
//     }
//     console.log('Connected to MySQL server as id ' + connection.threadId);

//     // SQL query to create a table
//     const createTableQuery = `
//       CREATE TABLE IF NOT EXISTS users (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//       )
//     `;

//     // Execute the query to create the table
//     connection.query(createTableQuery, (err, results, fields) => {
//       if (err) {
//         console.error('Error creating table:', err.message);
//       } else {
//         console.log('Table created successfully:', results);
//       }

//       // Close the connection
//       connection.end();
//     });
//   });

connection.connect((err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Database Connected.......!");
    }
});

// connection.query("select * from student",(error,result)=>{
//     console.log("result",result);
//     })

// connection.query("INSERT INTO users(id, name, email, password, contact) VALUES(3, 'Savji','savju1@gmail.com','Savji123',3210456987)", (error, result) => {
//     console.log(result);
// })

// connection.query("UPDATE users SET name = 'Kanji', email = 'kanju@gmail.com', password = 'kanji123', contact = 98765278910 WHERE id = 3", (error, result) => {
//     console.log(result)
// })

// connection.query("DELETE FROM users WHERE id=0", (error, result) => {
//     console.log(result)
// })

connection.query("SELECT name, email, contact FROM users WHERE id=3", (err, result) => {
    console.log(result);
})