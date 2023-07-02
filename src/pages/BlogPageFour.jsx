import React, { useEffect } from "react";
import BlogNav from "../component/BlogNav";

const BlogPageFour = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <div className="blog-main-container">
      <BlogNav />
      <header>
        <h2>React + Fontawesome</h2>
      </header>
      <div className="blog-main-details">
        <div className="blog-info">
          <p>
            Here is your step wise detailed guide on how to add the free
            fontawesome icons in your react application. I hope this helps you
            to avoid some migraine.
          </p>
          <p>
            <p>
              FontAwesome icons + ReactJs <br />
              How hard can it be to style your web app with some beautiful
              icons, and what better place to search for when you have
              FontAwesome! It is simple right? <br />
              Naah, not exactly.
            </p>
            <p>
              Using font awesome icons in plain html is just a cdn/kit link
              ctrl+c --> ctrl+v and then ctrl+c --> ctrl+v the icons you need,
              kind of easy.
            </p>
            <p>
              But its not the case with reactJs. <br />
              Yes, we can write html inside JS syntax in react. But not plain
              html. As you know it already, let's move ahead and add some
              visuals to our app.
            </p>
            <p>
              Think of this as an instruction manual rathar than some serious
              informative blog.
            </p>
            <p>
              Now you have two options, and you know the drill: Red pill or Blue
              pill
            </p>
            <p>
              If you want to figure out on your own and find it out by yourself,
              just take this RED pill and follow these steps:
            </p>
            <p>
              1. Go to this link:{" "}
              <a href="https://fontawesome.com/docs/web/use-with/react/">
                https://fontawesome.com/docs/web/use-with/react/
              </a>
            </p>
            <p>2. Follow the instructions Have a great day!</p>
            <p>
              But if you are someone, like any other normal programmers, go
              ahead and take the BLUE pill, copy-paste, and relax.
            </p>
            <p>
              1.Add SVG Core <br />
              npm: npm i --save @fortawesome/fontawesome-svg-core
              <br />
              yarn: yarn add @fortawesome/fontawesome-svg-core
            </p>
            <p>
              2.Add Icon Packages
              <br />
              npm: # Free icons styles
              <br />
              npm i --save @fortawesome/free-solid-svg-icons
              <br />
              npm i --save @fortawesome/free-regular-svg-icons
              <br />
              npm install --save @fortawesome/free-brands-svg-icons
              <br />
              <br />
              yarn: # Free icons styles
              <br />
              yarn add @fortawesome/free-solid-svg-icons
              <br />
              yarn add @fortawesome/free-regular-svg-icons
              <br />
              yarn add @fortawesome/free-brands-svg-icons
            </p>
            <p>
              3.Add the React Component:
              <br />
              Install the Font Awesome React component:
              <br />
              npm: npm i --save @fortawesome/react-fontawesome@latest
              <br />
              yarn: yarn add @fortawesome/react-fontawesome@latest
            </p>
            <p>You're Ready to Add Icons!</p>
            <p>
              But wait....there is more. For the icons to work, you need to add
              the icons in the form of react component.
            </p>
            <p>
              Suppose you are looking for a hippo icon. Search for the icon,
              copy the react link, and pasting it will NOT do the trick. Follow
              the steps to see what it needs for the icons to work.
            </p>
            <p>
              1. Search the icon, copy the React individual import code snippet
              <img src="/images/hippo.jpg" alt="ss" />
            </p>
            <p>2. Paste this where you want to use</p>
            <p>
              3. Import FontAwesomeIcon in the component:
              <br />
              <img src="/images/fontOne.jpg" alt="ss" />
            </p>
            <p>
              4. Now import the icon (or react will auto-import it if everything
              is correctly done in the above steps)
              <br />
              <img src="/images/fontTwo.jpg" alt="ss" />
            </p>
            <p>
              And now you are good to go. <br />
              With this you don't really need to copy the icons and import them
              every time you need another icon. Your just need to know the name
              of the icon (which is not mandatory, but as you will use more and
              more, it will be on your fingertips).
              <br />
              After that just use the syntax
              <img src="/images/syn.jpg" alt="ss" />
              and react will auto-import it from fontAwesome library you
              installed earlier.
              <br />
              <br />
              Have a happy programming session!
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPageFour;
