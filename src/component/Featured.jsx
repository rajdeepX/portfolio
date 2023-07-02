import React from "react";
import { Link } from "react-router-dom";
import "./Featured.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Featured = () => {
  return (
    <div className="featured-container">
      <header>
        <h3>Featured</h3>
      </header>
      <div className="blog-container">
        <div className="blog-details">
          <div className="blog-head">
            <h3>Data transfer using local storage</h3>
            <p>Blog</p>
          </div>
          <Link to={"/blog-data"}>
            <div className="blog-img">
              <img src="/images/data2.jpg" alt="blogSS" />
            </div>
          </Link>
          <div className="blog-brief">
            <p>
              Get your data from an input field and to use that data in another
              page using local storage.
            </p>
          </div>
          <Link to={"/blog-data"}>
            Read full blog <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="blog-details">
          <div className="blog-head">
            <h3>Getting started with MongoDB</h3>
            <p>Blog</p>
          </div>
          <Link to={"/blog-mongoDB"}>
            <div className="blog-img">
              <img src="/images/db.jpg" alt="blogSS" />
            </div>
          </Link>
          <div className="blog-brief">
            <p>
              A step by step guide on how to setup mongoDB for your project.
            </p>
          </div>
          <Link to={"/blog-mongoDB"}>
            Read full blog <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
      <Link to={"/mini-blog"} className="other-blogs">
        View my other blogs <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
};

export default Featured;
