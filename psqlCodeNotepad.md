# Creating Databases in Postgres

- Through PSQL
```
psql                       # Open up PSQL environment
CREATE DATABASE exampleDB; # Create DB
\c exampleDB;              # Connect to DB
```

- Through Command Line
```
createdb PuppyStore # Create Database
psql PuppyStore # Connect To Database
```

# Create a table in your DB
CREATE TABLE tableName();

CREATE TABLE owners(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

## Types of Data
VARCHAR(num) = Series of characters of variable length
TEXT = Very long string
INTEGER = Whole Number
BOOLEAN = True/false

## Constraints
NOT NULL = If its empty, we reject it
UNIQUE = Value here can't match the value in this col for other rows
PRIMARY KEY = UNIQUE + NOT NULL
DEFAULT 'value' = If null is passed in, use this value instead
   ex: name VARCHAR(255) DEFAULT "anonymous"

REFERENCES = Has to be a value matching a field on the given table
    "ownerId" INTEGER REFERENCES table(column)

CREATE TABLE puppy(
    name VARCHAR(255) NOT NULL,
    breed VARCHAR(255) DEFAULT 'unknown',
    age INTEGER,
    "ownerId" INTEGER REFERENCES owners(id)
);

# Add Data to Table
INSERT INTO owners(name)
VALUES
  ('Ben'),
  ('Izzy'),
  ('Briana'),
  ('Pawan');

INSERT INTO puppy(name, breed, age, "ownerId")
VALUES
  ('Cooper', 'Poodle', 2, 1),
  ('Blue', 'Pit', 3, 3);

INSERT INTO puppy(name, breed, age, "ownerId")
VALUES
  ('Larry', 'Terrier', 2, 100);

# Reading your fields on table
SELECT * FROM owners;
SELECT name FROM owners;

SELECT * 
FROM puppy
INNER JOIN owner
ON puppy."ownerId" = owners.id;