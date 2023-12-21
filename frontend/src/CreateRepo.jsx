import React, { useState } from "react";

const CreateRepo = () => {
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store data in localStorage
    localStorage.setItem("formData", JSON.stringify(formData));
    // Clear the form after submission
    setFormData({
      field1: "",
      field2: "",
      field3: "",
      field4: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-500">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Purple Theme Create Repository
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="field1" className="text-white block mb-1">
              Field 1
            </label>
            <input
              type="text"
              id="field1"
              name="field1"
              value={formData.field1}
              onChange={handleChange}
              placeholder="Enter Field 1"
              className="py-2 px-4 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="field2" className="text-white block mb-1">
              Field 2
            </label>
            <input
              type="text"
              id="field2"
              name="field2"
              value={formData.field2}
              onChange={handleChange}
              placeholder="Enter Field 2"
              className="py-2 px-4 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="field3" className="text-white block mb-1">
              Field 3
            </label>
            <input
              type="text"
              id="field3"
              name="field3"
              value={formData.field3}
              onChange={handleChange}
              placeholder="Enter Field 3"
              className="py-2 px-4 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="field4" className="text-white block mb-1">
              Field 4
            </label>
            <input
              type="text"
              id="field4"
              name="field4"
              value={formData.field4}
              onChange={handleChange}
              placeholder="Enter Field 4"
              className="py-2 px-4 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-700 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRepo;
