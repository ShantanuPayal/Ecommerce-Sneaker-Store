# Ringover-Kicksup-Internship-
This is an website model created with HTML CSS and some javascript. MySQL code is used to create a database with tables to store user account details and the products they purchased: Connection to the database from  website can be made using a server-side scripting language like PHP or a database access layer like PDO.
As per the Assets provided I have tried to create the same website.
The index page(home page ) appears to be blank as much info was not provided about it.

MySQL code to create a database with tables to store user account details and the products they purchased:
CREATE DATABASE store_db;

USE store_db;

CREATE TABLE accounts (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image VARCHAR(255) NOT NULL
);

CREATE TABLE purchases (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  account_id INT NOT NULL,
  product_id INT NOT NULL,
  purchase_date DATETIME NOT NULL,
  FOREIGN KEY (account_id) REFERENCES accounts(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);




connect to a MySQL database in PHP:
<?php
$servername = "localhost";
$username = "database_username";
$password = "database_password";
$dbname = "database_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>

