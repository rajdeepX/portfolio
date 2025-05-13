import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const BlogNav = () => {
  return (
    <div className="header-link">
      <Link to={"/"} className="blog-arrow">
        <FontAwesomeIcon icon={faArrowLeft} />
        Home
      </Link>
      <Link to={"/mini-blog"} className="blog-arrow">
        <FontAwesomeIcon icon={faArrowLeft} />
        Mini-Blog
      </Link>
    </div>
  );
};

export default BlogNav;
