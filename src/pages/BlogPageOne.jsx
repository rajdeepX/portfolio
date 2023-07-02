import React, { useEffect } from "react";
import "./BlogPage.css";
import BlogNav from "../component/BlogNav";

const BlogPageOne = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="blog-main-container">
      <BlogNav />
      <header>
        <h2>Data transfer using local storage in a react application</h2>
      </header>

      <div className="blog-main-details">
        <div className="blog-info">
          <p>
            To get the data from an input field and to use that data in another
            page either to display or to do some function (not exactly used as a
            function), we can use the local storage. <br />
            To do that just follow the steps:
          </p>
          <p>
            1. Create state variables for inputs for the data you are suppose to
            collect <br />
            e.g. name and email <br />
            <img src="/images/const.jpg" alt="ss" />
          </p>

          <p>
            2. Store the input data in the state variable using the onChange
            attribute of the input <br />
            <img src="/images/input.jpg" alt="ss" />
            Here we are passing an event "e" in the form of a parameter to the
            arrow function to hold the value where the event occured i.e. the
            target, and set it in the state variable
          </p>
          <p>
            3. Now in the submit button (which you have obviously created to
            submit the form), add the onClick attribute to trigger an event.
            Here we will trigger a function.
            <img src="/images/button.jpg" alt="ss" />
          </p>

          <p>
            4. Create the handleSubmit (or your preferred name) function above
            the component return statement to add the input values to the local
            storage
            <img src="/images/handle.jpg" alt="ss" />
          </p>
          <p>
            The localStorage.setItem is a method by which you can set the value
            of your state variable to the local storage.
          </p>
          <p>
            You can learn more about the Web Storage API and the localStorage
            object by referring to the official Mozilla Developer Network (MDN)
            documentation.
          </p>
          <br />
          <p>
            The MDN documentation provides a comprehensive explanation of the
            Web Storage API, including the localStorage object and its methods.
            Here is a link to the MDN documentation for the Web Storage API:{" "}
          </p>
          <br />
          <p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API">
              https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
            </a>
          </p>
          <br />
          <p>
            The setItem() method is covered in the documentation under the
            "Using the Web Storage API" section: <br />
          </p>
          <p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API">
              https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
            </a>
          </p>

          <p>
            In JavaScript, the Web Storage API is part of the core language
            specification, so you can find more information about it in the
            ECMAScript documentation. Here is a link to the ECMAScript
            documentation for the Web Storage API: <br />
          </p>
          <p>
            <a href="https://tc39.es/ecma262/#sec-web-storage-apis">
              https://tc39.es/ecma262/#sec-web-storage-apis
            </a>
          </p>

          <p>
            Note that the ECMAScript documentation is more technical and
            detailed than the MDN documentation, and is aimed at language
            implementers and advanced JavaScript developers.
          </p>
          <p>
            5. Now add values in the input fields and hit submit to store the
            data.
            <br /> You can see the data in the browser by inspect &gt;
            Application tab &gt; Local Storage (in chrome)
          </p>
          <p>
            Now if you want to access this data in different pages accross your
            react application just follow this steps: <br />
          </p>
          <p>
            1. Navigate to the component tab where you want to display or use
            the data, you stored earlier, in your code editor. <br />
          </p>
          <p>
            2. Use the method: localStorage.getItem("Name") // here Name is the
            key that you used to store your data into
          </p>
          <p>
            <br /> 3. Store it in a variable or object or any form you like, and
            access it in the page. <br />
          </p>
          <p>
            To check the data is there you can always log it first before being
            bombed by the red alerts if any issue arises.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPageOne;
