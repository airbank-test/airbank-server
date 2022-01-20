# Airbank Test Server

This is the server of the Airbank Fullstack Engineering Challenge.

The tech stack is composed of:

- Nodejs
- Express
- Prisma
- GraphQL
- GraphQL
- Apollo Server

## Installation & Running the server

Download this project and move into the directory:

```sh
cd airbank-server
```

Next, install all the dependencies:

```sh
yarn install
```

Make sure you have a Postgres instance running on your local machine or in cloud.

Go to `airbank-server/.env` and change the `DATABASE_URL` to your Postgres instance. Yes, I uploaded the `.env` file to Github so it will be easy for you to setup the server.

```
DATABASE_URL="postgresql://postgres:0000@localhost:5432/transactiondb?schema=public
```

- **postgres**: This is the username of the Postgres instance.
- **0000**: This is the password of the user `postgres`.
- **localhost**: This is URL of our Postgres instance.
- **5432**: This is the port of our Postgres instance.
- **transactiondb**: This is the name of the database we will store our transactions data.

Next, we have to run migrations on our already setup Postgres instance.

Run the commands:

```sh
npx prisma migrate dev
npx prisma migrate dev --name "init"
```

Then, to see our database, run the command:

```sh
npx prisma db seed
```

Finally, run the server:

```
yarn start
```

## Run migrations

```sh
npx prisma migrate dev
```

```sh
npx prisma migrate dev --name "init"
```

## Seeding the database

```sh
npx prisma db seed
```
