# crud-backend

## MERN

This is a simple CRUD application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create, read, update, and delete data.

## Features

- CRUD operations for products
- Zod validation for product data
- MongoDB for data storage
- Express.js for server-side logic
- Node.js for backend runtime

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file and add your MongoDB connection string
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
   ```
4. Start the server with `npm run dev`
5. Open your browser and navigate to `http://localhost:3000` to access the application

> [!IMPORTANT]
> Configure your MongoDB connection in Atlas or your local MongoDB instance before running the application.

## Usage

1. Use Postman or any API client to interact with the RESTful API.
2. The base URL for the API is `http://localhost:3000/api`.
3. Available endpoints:
   - `GET /products`: Retrieve all products
   - `GET /products/:id`: Retrieve a single product by ID
   - `POST /products`: Create a new product
   - `PUT /products/:id`: Update a product by ID
   - `DELETE /products/:id`: Delete a product by ID
