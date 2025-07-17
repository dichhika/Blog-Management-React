import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import Card from "./components/card/Card";
import { baseURL } from "./../../config";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await axios.get(`${baseURL}/blog`);
    if (response.status === 200) {
      setBlogs(response.data.data);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      <Layout>
        <div className="flex flex-wrap justify-center space-x-5 mt-3">
          {blogs.length > 0 &&
            blogs.map((blog) => {
              console.log(blog);
              return <Card blog={blog} />;
            })}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
