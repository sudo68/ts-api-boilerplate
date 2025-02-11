# TypeScript Node.js API Boilerplate

This is a boilerplate for building a Node.js API using TypeScript, Express, Sequelize, and MySQL. The project is configured with environment variables, a proper folder structure, and basic examples to get started quickly.

---

## Features

-   **TypeScript**: Strict typing and modern JavaScript features.
-   **Express**: Lightweight and fast web framework.
-   **Sequelize**: ORM for managing database models.
-   **MySQL**: Relational database integration.
-   **Nodemon**: For hot-reloading during development.
-   **Environment Variables**: Managed with `dotenv`.

---

## Project Structure

```
typescript-node-api/
├── src/
│   ├── config/
│   │   └── db.config.ts          # Sequelize configuration
|   |── controllers/
|   |   └── example.controller.ts # Example controller
|   |── middleware/
|   |   └── example.middleware.ts # Example middleware
│   ├── models/
│   │   ├── example.model.ts      # Example model
│   │   └── index.ts              # Model registry
│   ├── routes/
│   │   └── example.route.ts      # API routes
|   |── utils/                    # Utility files directory
│   ├── app.ts                    # Express app setup
│   └── server.ts                 # Server entry point
├── .env                          # Environment variables
|── .gitignore                    # Gitignore file
|── nodemon.json                  # Nodemon configuration
├── package.json                  # Project metadata and dependencies
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Documentation
```

---

## Getting Started

### Prerequisites

-   Node.js (v14 or later)
-   npm or yarn
-   MySQL (installed and running)

### Installation

1. Clone the repository:

    ```bash
    git clone <repository_url>
    cd typescript-node-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure the `.env` file:

    ```env
    DB_NAME=
    DB_USER=
    DB_PASSWORD=
    DB_HOST=localhost
    PORT=8000
    SERVER_URL=http://localhost
    ```

4. Run the application:
    ```bash
    npm run dev
    ```

---

## Scripts

-   `npm run dev`: Start the development server with hot-reloading.
-   `npm run build`: Compile TypeScript to JavaScript.
-   `npm start`: Run the production server.

---

## API Endpoints

### GET /api/

-   **Description**: Test the API status.
-   **Response**:
    ```json
    {
        "message": "API is running!"
    }
    ```

---

## Models

### Example Model

| Field        | Type    | Required |
| ------------ | ------- | -------- |
| id           | INTEGER | Yes      |
| ExampleField | STRING  | Yes      |

---

## Sequelize Configuration

The database connection is configured in `src/config/database.ts` using environment variables from `.env`. Models are defined in `src/models/` and automatically synchronized with the database using Sequelize.

---

## Dependencies

### Core Dependencies

-   `express`: Web framework.
-   `sequelize`: ORM for database operations.
-   `mysql2`: MySQL driver for Sequelize.

### Dev Dependencies

-   `typescript`: TypeScript compiler.
-   `ts-node`: Execute TypeScript directly.
-   `nodemon`: Automatically restart the server on changes.

---

## License

This project is licensed under the MIT License. Feel free to use it for your projects.

---

## Contribution

Feel free to submit issues or pull requests to improve this boilerplate. Suggestions are always welcome!
