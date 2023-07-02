import React, { useEffect } from "react";
import BlogNav from "../component/BlogNav";

const BlogPageFive = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <div className="blog-main-container">
      <BlogNav />
      <header>
        <h2>CRUD operations using mongoDB</h2>
      </header>
      <div className="blog-main-details">
        <div className="blog-info">
          <p>
            Official documentation:
            <br />
            <br />
            <a href="https://www.mongodb.com/docs/manual/crud/">
              https://www.mongodb.com/docs/manual/crud/
            </a>
          </p>
          <p>To perfom CRUD we first have to create a database to work on</p>
          <p>
            1. Start up the server
            <br />
            mongod
          </p>
          <p>2. Run mongoDB shell mongosh</p>
          <p>
            After this you can type help to see all the available
            options/commands in mongoDB Now create a database
          </p>
          <p>
            1. Type the command
            <br />
            use name-of-database (e.g use shopDB)
            <br />
            and hit enter. This will take you to the shopDB direcly
            <br />
            To check if you are inside the database, just type db
            <br />
            If it spits out the name of your database its all good.
          </p>
          <p>*------ CREATE ------*</p>
          <p>
            Create or insert operations adds new documents (a single data
            record) to a collection (collection is similar to the table in sql).
          </p>
          <p>
            If the collection does not exist yet, then it creates a new one with
            the name you provide
          </p>
          <p>
            1. To add a new document to your new collection
            <br />
            db.collection-name.insertOne()
            <br />
            <br />
            OR
            <br />
            <br />
            db.collection.insertMany()
            <br />
            e.g db.products.insertOne()
          </p>
          <p>
            2. Inside insertOne(), we provide the document
            <br />
            <img src="/images/one.jpg" alt="ss" />
          </p>
          <p>
            Hit enter, and you have your new document inside your new
            collection.
          </p>
          <p>
            To add another document in the same collection, just do not change
            the collection name
          </p>
          <p>
            For insertMany(), we just add the documents in an array
            <br />
            <br />
            <img src="/images/two.jpg" alt="ss" />
          </p>
          <p>*------ READ ------*</p>
          <p>
            Retrives documents from a collection (i.e. querry a collection for
            documents)
          </p>
          <p>
            For that mongoDB provides the method:
            <br />
            <br />
            db.collection.find(query, projection, options)
            <br />
            <br />
            query : Specifies selection filter using query operators
            <br />
            projection : Specifies the fields that match the query filter
            <br />
            options : Modify query behaviour and how results are returned
          </p>
          <p>
            All these three parameters are optional.
            <br />
            If you wish to see all the documents inside your collection, just
            omit those and run the command
          </p>
          <p>
            1. To see all the documents inside your collection
            <br />
            <br />
            db.collection.find()
            <br />
            <br />
            This will list all your documents
          </p>
          <p>
            2. To specify a query and filter accordingly
            <br />
            <img src="/images/three.jpg" alt="ss" />( will return the document
            with the querry name = Pencil)
          </p>
          <p>
            For more specificity, you can use query operators
            <br />
            https://www.mongodb.com/docs/manual/reference/operator/query/
            <br />
            <br />
            Here are all the available query selectors that you can use
            <br />
            <br />
            e.g. if you wish to see all the products (inside your products
            collection) that have a price greater than $1, then use this
          </p>
          <p>
            <img src="/images/four.jpg" alt="ss" />
            ( $gt is the method for greater than)
            <br />
            this will return all the products/documents that have a price
            greater than $1
          </p>
          <p>
            Now if you only want specific detail of the product such as the name
            and price only and not the entire document,
            <br />
            then use parameters along with the query
          </p>
          <p>
            <img src="/images/five.jpg" alt="ss" />
          </p>
          <p>
            Here, we are searching for a product with a price of less than $1.
            <br />
            And also we want the name of the product (so we added 1).
            <br />
            But by default the _id also gets printed, we have omitted it
            manually (so we added 0)
            <br />
            <br />
            1: means true
            <br />
            0: means false
          </p>
          <p>*------ UPDATE ------*</p>
          <p>
            This operation modify existing documents in a collection.
            <br />
            The following method is provided by mongoDB:
          </p>
          <p>db.collection.updateOne()</p>
          <p>
            1. To add another column (like in the sql)
            <br />
            <br />
            <img src="/images/six.jpg" alt="ss" />
            <br />
            <br />
            this will add a stock key with value 23 in the document with id = 1
          </p>
          <p>*------ DELETE ------*</p>
          <p>Remove documents from a collection.</p>
          <p>
            Method provided by mongoDB:
            <br />
            <br />
            db.collection.deleteOne() (we will use this one :)
            <br />
            db.collection.deleteMany()
          </p>
          <p>
            1. To delete a document inside a collection
            <br />
            <br />
            <img src="/images/seven.jpg" alt="ss" />
            <br />
            <br />
            Here the field is the criteria or document id which is to be deleted
            <img src="/images/eight.jpg" alt="ss" />
          </p>
          <p>
            Thank you!
            <br />
            Have a wonderful day ahead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPageFive;
