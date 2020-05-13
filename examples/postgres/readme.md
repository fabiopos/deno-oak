#
## Installation

Create a .env file in the root directory and put this variables:

```bash
PGPASSWORD="yourDatabasePassword"
PGUSER="yourDatabaseUser"
PGDATABASE="yourDatabaseName"
PGHOST="yourDatabaseHost"
```

### Users table

You will need a table in your database to perform the API queries.

```sql
CREATE TABLE users (
	email varchar(200) NOT NULL,
	name varchar(200) NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (email)
);
```

## Running

```bash
deno run --allow-net --allow-env --allow-read main.ts 
```

**Why allow-net?**

It is mandatory to load the packages from the server and for database communication.

**Why allow-env?**

Well, we need to read our environment variables, so we need this flag.

**Why allow-read?**

Dotenv will read the .env file to load the environment variables and load those into “Deno.env”.
