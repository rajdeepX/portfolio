import React, { useEffect } from "react";
import BlogNav from "../component/BlogNav";
import "./BlogPage.css";

const BlogPageTwo = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="blog-main-container">
      <BlogNav />
      <header>
        <h2>Getting Started with MongoDB</h2>
      </header>

      <div className="blog-main-details">
        <div className="blog-info">
          <p>
            *-----v 6.0-----* <br />
            <br />
            Steps for getting things started: use this link for the first 2
            steps only:
            <p>
              <a href="https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514">
                https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514
              </a>
            </p>
            <p>
              1. Install mongoDB (server) from the official website Note the
              version (or you can see it in the directory where it is installed)
            </p>
            <p>
              2. Create the Data Folders to Store our databases create a new
              folder name it = data, inside C:\ drive, and inside data, add a
              new folder, name it = db
            </p>
            <p>
              ======IMP FROM HERE ONWARDS (above link will not help much)======
            </p>
            <p>
              3.Setup Alias Shortcuts for mongos and mongod (earlier it was
              mongo)
            </p>
            <p>
              a) Open your Hyper Terminal running git bash
              <br />
              b) Change directory to home cd ~
              <br />
              c) Create a .bash_profile file: touch .bash_profile
              <br />
              d) Open this file with vim: vim .bash_profile
              <br />
              e) Now in vim, press I key to enter insert mode and paste the
              following: KEEP IN MIND:
              <br />
              --YOUR VERSION (here it is 6.0)
              <br />
              --Rename mongo to mongos alias
              <br />
              mongod="/c/Program\ files/MongoDB/Server/6.0/bin/mongod.exe" alias
              <br />
              mongos="/c/Program\ Files/MongoDB/Server/6.0/bin/mongos.exe"{" "}
              <br />
              DO NOT PRESS ENTER
              <br />
              f) Now to save this, press ESC key to exit the insert mode, and
              then type :wq! This command saves and exit vim
              <br />
              g) It's DONE.
            </p>
            <p>
              To verify, relaunch the hyper terminal and type mongos --version
              And you should see the version and other properties.
            </p>
            <p>
              IF NOT, then you messed up somewhere. So, redo the steps again.
            </p>
            <p>4. Download MongoDB shell from their website</p>
            <p>
              5. Extract the downloaded file and rename it to mongosh (renaming
              is up to you)
            </p>
            <p>
              6. Paste it in the Program Files folder directly or Paste the
              mongosh.exe file in the bin folder of the mongoDB directory
            </p>
            <p>7. Now copy the mongosh.exe file path</p>
            <p>
              8. In your pc, search for environment variable and follow the
              steps:
              <br />
              Edit the environment variables (opens sys props) > Environment
              Variables.. (bottom tab)> In the sys variables window select Path
              (click on it) and then press Edit In the Edit environment variable
              > New > paste the mongosh.exe file path you copied > hit OK to
              save <br />
              NOW IT's all set up
            </p>
            <p>
              9. To start the server:
              <br />
              a) Open hyper terminal
              <br />
              b) type mongod and if it does not redirect to the original
              directory you are good to go
            </p>
            <p>
              10. To use mongoDB, open a new tab in your hyper terminal, type
              mongosh and hit enter You will see Current Mongosh Log ID
              Connecting to and many more. All set.
              <br />
              <br />
              IF not, repeate the process. PEACE
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPageTwo;
