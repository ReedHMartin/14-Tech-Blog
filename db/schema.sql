-- Drop the tech_blog_db database if it already exists
DROP DATABASE IF EXISTS tech_blog_db;

-- Create the tech_blog_db database
CREATE DATABASE tech_blog_db;

-- Use the tech_blog_db database
USE tech_blog_db;

-- Create the User table
CREATE TABLE User (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL
);

-- Create the Post table
CREATE TABLE Post (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE
);

-- Create the Comment table
CREATE TABLE Comment (
  id INT AUTO_INCREMENT PRIMARY KEY,
  content TEXT NOT NULL,
  user_id INT NOT NULL,
  post_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
  FOREIGN KEY (post_id) REFERENCES Post(id) ON DELETE CASCADE
);
