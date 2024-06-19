import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import blogdata from "./data/blogdata.json";
import Singleblogdata from "./data/single-blogdata.json";
import Footerdata from "./data/footerdata.json";

import Home from "./components/Home";
import Header from "./components/components-global/Header";
import Footer from "./components/components-global/Footer";
import Blogfull from "./components/components-blog/Blogfull";
import Blog2col from "./components/components-home/Blog2col";
import Blog3col from "./components/components-blog/blog-3-col";
import Blogfullleftsidebar from "./components/components-blog/blog-full-left-sidebar";
import Blogfullrightsidebar from "./components/components-blog/blog-full-right-sidebar";
import Singleblog from "./components/components-blog/single-blog";
import Singleleftsidebar from "./components/components-blog/single-left-sidebar";
import Singlerightsidebar from "./components/components-blog/single-right-sidebar";
// import ScrollToTop from "./components/components-global/ScrollToTop";
// import WhatsAppIcon from "./components/components-home/WhatsAppIcon";

class Root extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            {/* <ScrollToTop /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog-full" element={<Blogfull data={blogdata} />} />
              <Route path="/blog-2-col" element={<Blog2col data={blogdata} />} />
              <Route path="/blog-3-col" element={<Blog3col data={blogdata} />} />
              <Route
                path="/blog-full-left-sidebar"
                element={<Blogfullleftsidebar data={blogdata} />}
              />
              <Route
                path="/blog-full-right-sidebar"
                element={<Blogfullrightsidebar data={blogdata} />}
              />
              <Route path="/single-blog" element={<Singleblog data={Singleblogdata} />} />
              <Route
                path="/single-left-sidebar"
                element={<Singleleftsidebar data={Singleblogdata} />}
              />
              <Route
                path="/single-right-sidebar"
                element={<Singlerightsidebar data={Singleblogdata} />}
              />
            </Routes>
            <Footer data={Footerdata} />
          </div>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
