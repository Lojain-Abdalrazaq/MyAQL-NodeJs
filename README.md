## Node.js & MySQL CRUD Application📅
This is a simple CRUD (Create, Read, Update, Delete) application built with Node.js, Express, and MySQL. This project demonstrates how to connect a Node.js application to a MySQL database and perform basic database operations.

### 🌟Features🌟
Database Creation: Creates a MySQL database named nodeDB.
Table Creation: Creates a posts table with id, title, and body fields.
CRUD Operations:
**Create**: Adds new posts to the posts table. \n
**Read**: Retrieves all posts or a single post by ID. \n
**Update**: Updates a specific post’s title by ID.
**Delete**: Deletes a specific post by ID.

### Routes:
* Create Database: GET /createdb - Creates nodeDB.
* Create Table: GET /createtable - Creates posts table in nodeDB.
* Add Post: GET /addpost1 - Adds a sample post.
* Get All Posts: GET /getposts - Retrieves all posts.
* Get Single Post: GET /getpost/:id - Retrieves a post by ID.
* Update Post: PUT /updatepost/:id - Updates the title of a post by ID.
* Delete Post: DELETE /deletepost/:id - Deletes a post by ID.
