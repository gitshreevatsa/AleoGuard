import React, { useEffect, useState } from "react";

const ViewRepo = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  // Dummy data for testing
  const dummyData = {
    field1: "Dummy Value 1",
    field2: "Dummy Value 2",
    field3: "Dummy Value 3",
    field4: "Dummy Value 4",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-500">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Purple Theme View Repository
        </h1>
        {formData ? (
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Repository Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <strong>Field 1:</strong> {formData.field1}
              </div>
              <div>
                <strong>Field 2:</strong> {formData.field2}
              </div>
              <div>
                <strong>Field 3:</strong> {formData.field3}
              </div>
              <div>
                <strong>Field 4:</strong> {formData.field4}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">
              Dummy Repository Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <strong>Field 1:</strong> {dummyData.field1}
              </div>
              <div>
                <strong>Field 2:</strong> {dummyData.field2}
              </div>
              <div>
                <strong>Field 3:</strong> {dummyData.field3}
              </div>
              <div>
                <strong>Field 4:</strong> {dummyData.field4}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewRepo;
