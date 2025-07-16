import React from "react";
import Layout from "../../layout/Layout";
import Form from "./components/form/Form";
import { baseURL } from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const handleCreateBlog = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/blog`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 201) {
        navigate("/");
      } else {
        alert("Something went error");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return (
    <div>
      <Layout>
        <Form type="Create" onSubmit={handleCreateBlog} />
      </Layout>
    </div>
  );
};

export default AddBlog;
