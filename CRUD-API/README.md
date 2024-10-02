# CRUD API with Node.js

This project is a simple CRUD (Create, Read, Update, Delete) API built using Node.js and Express.

## Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager)

## Installation

1. Clone the repository:
    ```sh
    git clone <path of the repo>
    ```
2. Navigate to the project directory:
    ```sh
    cd javascript-handbook/CRUD-API
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    node server.js
    ```
2. The server will be running on `http://localhost:3000`.

## API Endpoints

- `GET /items` - Retrieve all items
- `GET /items/:id` - Retrieve a single item by ID
- `POST /items` - Create a new item
- `PUT /items/:id` - Update an existing item by ID
- `DELETE /items/:id` - Delete an item by ID

## Example

Here is an example of how to use the API with `curl`:

- Create a new item:
    ```sh
    curl -X POST -H "Content-Type: application/json" -d '{"name":"Item 1","description":"This is item 1"}' http://localhost:3000/items
    ```
- Get all items:
    ```sh
    curl http://localhost:3000/items
    ```
- Get a single item by ID:
    ```sh
    curl http://localhost:3000/items/1
    ```
- Update an item by ID:
    ```sh
    curl -X PUT -H "Content-Type: application/json" -d '{"name":"Updated Item","description":"This is the updated item"}' http://localhost:3000/items/1
    ```
- Delete an item by ID:
    ```sh
    curl -X DELETE http://localhost:3000/items/1
    ```






