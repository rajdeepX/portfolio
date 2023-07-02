import React, { useEffect } from "react";
import BlogNav from "../component/BlogNav";

const BlogPageThree = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <div className="blog-main-container">
      <BlogNav />
      <header>
        <h2>Crud Operations with SQLite</h2>
      </header>

      <div className="blog-main-details">
        <div className="blog-info">
          <p>
            This are the steps for SQLite online <br />
            <br />
            For any confusion or lack of data, search : w3school sql and I hope
            you will find your solution.
            <br />
          </p>
          <p>
            I have also provided the name of the sections from which I have
            referred from.
          </p>
          <p>
            We are going to see the CRUD operations being performed in our
            database
          </p>
          <p>
            Firstly,
            <br />
            <br />
            *-----CREATE-----*
            <br />
            <br />
            Go to the link:-
            <a href="https://sqliteonline.com/">https://sqliteonline.com/</a>
            <br />
            To create a new table, follow these steps:
          </p>
          <p>(w3school section: SQL Create Table)</p>
          <p>1. Delete the lines: SELECT * FROM demo</p>
          <p>
            2. To create a table you need to type in the command:
            <br />
            <br />
            CREATE TABLE name-of-the-table ( column1 datatype, column2 datatype,
            column3 datatype, PRIMARY KEY (column1) )
          </p>
          <p>
            Here the column represents the name of the coloumn you want to add,
            and datatype represent what kind of datatype is going to be in that
            column.
            <br />
            e.g. id INT, where id is the name of the column and INT is the
            datatype which is an integer
          </p>
          <p>
            There are various datatypes and they are similar to the datatypes we
            use in our languages, but to check more of them go and visit the
            w3schools doucmentation on that for more details.
          </p>
          <p>(w3school section: SQL Primary Key)</p>
          <p>
            If you want to add a primary key, use the command
            <br />
            PRIMARY KEY (column-name).
          </p>
          <p>
            This will make the column-name your primary key. In general it
            should be the id column for ease of access.
          </p>
          <p>NOTE: Primary key should be unique and cannot be null</p>
          <p>(w3school section: SQL Not Null)</p>
          <p>
            So, you can add the NOT NULL command after the column=value for
            which you want to have no null inputs
          </p>
          <p>
            CREATE TABLE name-of-the-table ( column1 datatype NOT NULL, column2
            datatype, column3 datatype, PRIMARY KEY (column1) )
          </p>
          <p>
            This will not allow to make any row of data if the column1 is null
          </p>
          <br />
          <br />
          <p>
            3. Hit run and your table is ready.
            <br />
            To see it, on the table section on the left navgigation where your
            name-of-the-table is now visible, right-click on it and select the
            option show table.
            <br />
            NOW To add data to your table follow these steps:
          </p>
          <p>(w3school section: SQL Insert Into)</p>
          <p>
            There are two ways you can insert data into your table, and it
            depends on the data you have.
          </p>
          <p>
            Suppose you have all the data for all the columns to fill and you
            want to fill all of it, then either you specify all the columns
            present in your table and then insert the values w.r.t the column.
          </p>
          <p>
            1. Then this command:
            <br />
            <br />
            INSERT INTO name-of-the-table (column1, column2, column3,..) VALUES
            (value1, value2, value3,..)
          </p>
          <p>
            OR, you can use this command:
            <br />
            <br />
            INSERT INTO name-of-the-table VALUES (value1, value2, value3,..)
          </p>
          <p>This way you can add all the values to all your columns.</p>
          <p>
            BUT, if in case, you do not have the data for a specific column,
            then use this command:
            <br />
            <br />
            INSERT INTO name-of-the-table (column1, column3,..) VALUES (value1,
            value3,..)
          </p>
          <p>
            Here in this case, you do not have a certain value of a column for
            your table, so you have to specify the columns for which the value
            are present.
            <br />
            <br />
            And for the column which do not have any value, will automatically
            hold NULL.
            <br />
            <br />
            BOTH THIS COMMAND WILL ONLY ADD ONE ROW OF DATA. FOR EVERY ROW, NEW
            COMMAND IS REQUIRED.
          </p>
          <p>*-----READ-----*</p>
          <p>Now to read data from your table, there are two options,</p>
          <p>
            1) Already used while creating our table, i.e right-click on
            name-of-the-table and hit show table
            <br />
            Here you can see the command written above as:
            <br />
            <br />
            (w3school section: SQL Select)
            <br />
            <br />
            SELECT * FROM table-name <br />
            which means, select everything from the table-name and display.
          </p>
          <p>
            2) You need some specific part of the table to be shown, <br />
            <br />
            ( w3school section: SQL Select Distinct )
            <br />
            <br />
            a) Specific column:
            <br />
            SELECT column2, column3 FROM table-name <br />
            and you will see the values corresponding to the columns you wanted.
            <br />
            <br />
            (w3school section: SQL Where)
            <br />
            <br />
            b) Specific row:
            <br />
            SELECT * FORM table-name WHERE column = value <br />
            <br />
            and you will see the entire row which contain the column with that
            value.
          </p>
          <p>
            NOTE: The value you will provide should have to be specific datatype
            along with the letter-case in which it is written
            <br />
            <br />
            e.g. if you are searching a string value in a column, then: <br />
            WHERE name = "Pen"
            <br />
            otherwise you will be served an error.
          </p>
          <p>*-----UPDATE-----*</p>
          <p>
            1. Update table data
            <br />
            <br />
            (w3school section: SQL Update)
            <br />
            <br />
            To update table data use the command: <br />
            <br />
            UPDATE table-name
            <br />
            SET column=value (NOTE: value should be in correct datatype)
            <br />
            WHERE column=value (NOTE: best practice is to use the id, or primary
            key, to reduce confusion)
          </p>
          <p>
            2. Update table (ALTER)
            <br />
            <br />
            (w3school section: SQL Alter Table)
            <br />
            <br />
            To update the table, i.e to add new column, we can use the ALTER
            command: <br />
            ALTER TABLE table-name ADD column-name datatype
          </p>
          <p>
            This will create a new column with the column-name provided with the
            corresponding datatype
          </p>
          <p>*-----DELETE-----*</p>
          <p>(w3school section: SQL Delete)</p>
          <p>
            To delete the data from our SQL db, we use the command:
            <br />
            <br />
            DELETE FROM table-namebr WHERE column=value (e.g. WHERE id=2, use id
            where ever possible)
          </p>
          <p>
            And this will delete the entire row with the column id which value =
            2
          </p>
          <p>
            NOTE: Always use WHERE with the DELETE command, else if you do not,
            or forgot to, it will wipe all the data from your table.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPageThree;
