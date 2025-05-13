import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MiniBlog from "./pages/MiniBlog";
import BlogPageOne from "./pages/BlogPageOne";
import BlogPageTwo from "./pages/BlogPageTwo";
import BlogPageThree from "./pages/BlogPageThree";
import BlogPageFour from "./pages/BlogPageFour";
import BlogPageFive from "./pages/BlogPageFive";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mini-blog" element={<MiniBlog />} />
        <Route path="/blog-data" element={<BlogPageOne />} />
        <Route path="/blog-mongoDB" element={<BlogPageTwo />} />
        <Route path="/blog-sql" element={<BlogPageThree />} />
        <Route path="/blog-react-font" element={<BlogPageFour />} />
        <Route path="/blog-crud" element={<BlogPageFive />} />
      </Routes>
    </>
  );
};

export default App;
