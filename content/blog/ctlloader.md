---
title: SQL* Loader - Copying data from/to Oracle DB
description: A simple tool to extract data
tags:
  - oracle
  - sqlldr
  - spring-batch
date: "2018-03-28"
---
Today I needed to migrate data between two Databases, using sqlldr and spring-batch, here's some toughts on it:

## Exporting data

Using a select query such as:
```sql
SELECT NVL(RPAD(DUMMY, 8,' '), RPAD(' ',8,' '))
FROM DUAL;
```
Gets us the data we need with a fixed width (using left-pad for numeric values and right-pad for everything else), the output is then written into a file.

### Pros:
* Padding with spaces stops numerical wizardry (ex. '  -3,32' instead of '00-3,32' with '0' as the pad character);
* No need to use a very very very specific delimiter;
* Easier check for data inconsistency (for humans) as data is aligned;

### Cons:
* Numeric values probably need to be trimmed to work against all Databases;
* Kinda goes against the standard;

### Observations:
* In the task given, we encountered line breaks in some DB rows, so writing to a file caused a major pain in the S, we did manage to solve it by using a replace (using '{0}' as the placeholder):

```sql
SELECT NVL(RPAD(
    REPLACE(DUMMY,CHR(10)||CHR(13),'{0}'), 8,' '),
    RPAD(' ',8,' '))
FROM DUAL;
```

## Importing data

Using a Control file such as:
```sql
OPTIONS (BINDSIZE=512000, ROWS=10000)
LOAD DATA
CHARACTERSET WE8ISO8859P1
infile *
append
INTO TABLE MYSCHEMA.MYTABLE
(
    "ID"      POSITION (1:8),
    "FOO"     POSITION (9:108)
)
```

Using DIRECT path load is proven to be much faster but this way we can garantee constraint health as the job is performing inserts instead of populating Oracle tables with the data in the files.

## The stack
I'm using a simple tasklet to perform generic extract/ loading of data. I might write another post with the details of our implementation.
