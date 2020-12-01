# Anestech Task API

## System Dependencies

- Package manager - Yarn or npm
- Node.Js

## How to start

- First of all, clone the repository and install the dependencies

```bash
  git clone https://github.com/Lucasc-Dev/Anestech-Task-API.git anestech-task-api
  cd anestech-task-api
  yarn
  // or npm install
```

- Rename the .env.example file to .env and configure it with your database

```bash
  mv .env.example .env
```

- Execute all migrations

```bash
  yarn sequelize db:migrate
  // or npm run sequelize db:migrate
```

- Execute all seeders

```bash
  yarn sequelize db:seed:all
  // or npm run sequelize db:seed:all
```

- Start the api

```bash
  yarn dev:server
  // or npm run dev:server
```

## Application routes

- Import the "insomnia-config.json" as a workspace into your insomnia to access the routes.

### Users

- [POST] /users - Create an user ( ADMIN_ROLE )
- [PUT] /users/:user_id - Update user ( ADMIN_ROLE )
- [GET] /users - List all users with pagination ( ADMIN_ROLE )
- [GET] /users/:user_id - Show a specific user ( ADMIN_ROLE )
- [DELETE] /users/:user_id - DELETE user ( ADMIN_ROLE )

### Sessions

- [POST] /sessions - Create a session


### Tasks

- [POST] /tasks - Create a task
- [PUT] /tasks - Update task
- [GET] /tasks/:task_id - Show a task
- [GET] /tasks - List all tasks with pagination, search by description and status, ordering by status and creation date ( ADMIN_ROLE )

### Indicators

- [GET] /indicators - Show task indicators between 'start_date' and 'end_date' ( ADMIN_ROLE )
