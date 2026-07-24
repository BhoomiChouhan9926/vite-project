import React, { useState } from "react";
import "./CreateScrapbook.scss";

import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { createScrapbook } from "../../Services/MemoryServices";
import {useNavigate} from 'react-router-dom'
const CreateScrapbook = () => {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    theme: "custom",
    coverImg: null,
    isPublic: false,
  });

  const handleChange = (e) => {

    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      setFormData({
        ...formData,
        coverImg: files[0],
      });
    } else if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit =  async(e) => {
    e.preventDefault();

  try {
    console.log(formData)
    const response = await createScrapbook(formData)
    console.log("This is the scrapbook data")
    console.log(response.data)
    navigate('/dashboard');
  } catch (err) {
    console.log(err.response?.data);
  }
  };

  return (
    <section className="create-page">

      <div className="create-card">

        <h1>Create New Scrapbook 📚</h1>

        <p>Create a beautiful scrapbook to preserve your memories forever.</p>

        <form className="create-form" onSubmit={handleSubmit}>

          <Input
            type="text"
            name="title"
            placeholder="Enter scrapbook title"
            value={formData.title}
            onChange={handleChange}
          />

          <textarea
            name="desc"
            placeholder="Write a short description..."
            value={formData.desc}
            onChange={handleChange}
          ></textarea>

          <select
            name="theme"
            value={formData.theme}
            onChange={handleChange}
          >
            <option value="custom">Custom</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="friendship">Friendship</option>
            <option value="farewell">Farewell</option>
            <option value="love">Love</option>
          </select>

          <input
            type="file"
            name="coverImg"
            accept="image/*"
            onChange={handleChange}
          />

          <label className="checkbox-container">

            <input
              type="checkbox"
              name="isPublic"
              checked={formData.isPublic}
              onChange={handleChange}
            />

            <span>Make this scrapbook public</span>

          </label>

          <Button
            text="Create Scrapbook"
            type="submit"
          />

        </form>

      </div>

    </section>
  );
};

export default CreateScrapbook;