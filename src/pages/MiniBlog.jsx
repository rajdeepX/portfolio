import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./BlogPage.css";
import BlogNav from "../component/BlogNav";

const MiniBlog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <>
      <div className="mini-blog-container">
        <BlogNav />
        <div className="blog-info-container">
          <Link to={"/blog-data"}>
            <h2>Data transfer using local storage in a react app</h2>
          </Link>
          <div className="blog-brief-info">
            <p>
              Get your data from an input field and to use that data in another
              page using local storage.
            </p>
          </div>
        </div>
        <div className="blog-info-container">
          <Link to={"/blog-mongoDB"}>
            <h2>Getting Started with MongoDB</h2>
          </Link>
          <div className="blog-brief-info">
            <p>
              A step by step guide on how to setup mongoDB for your project.
            </p>
          </div>
        </div>
        <div className="blog-info-container">
          <Link to={"/blog-sql"}>
            <h2>Crud Operations with SQLite</h2>
          </Link>
          <div className="blog-brief-info">
            <p>
              Create, read, update and delete operations with SQLite for your
              database management
            </p>
          </div>
        </div>
        <div className="blog-info-container">
          <Link to={"/blog-react-font"}>
            <h2>React + Fontawesome</h2>
          </Link>
          <div className="blog-brief-info">
            <p>
              Here is your step wise detailed guide on how to add the free
              fontawesome icons in your react application.
            </p>
          </div>
        </div>
        <div className="blog-info-container">
          <Link to={"/blog-crud"}>
            <h2>CRUD operations using mongoDB</h2>
          </Link>
          <div className="blog-brief-info">
            <p>
              Create, read, update and delete operations with MongoDB for your
              database management.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniBlog;
