import React from "react";
import Layout from "../../layout/Layout";
import Card from "./components/Card";

const Home = () => {
  return (
    <div>
      <Layout>
        <div className="flex flex-wrap justify-center space-x-5 mt-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
