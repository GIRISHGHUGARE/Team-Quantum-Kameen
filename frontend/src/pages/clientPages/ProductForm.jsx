import React, { useState } from "react";
import axios from "axios";

function ProductForm() {
  const [formData, setFormData] = useState({
    material: 0,
    carbonFootprint: 0,
    packaging: 0,
    certification: 0,
  });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: Number(e.target.value) });
  };

  // Submit form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/knn/predict", formData);
      setResult(response.data.prediction);
    } catch (error) {
      console.error("Error:", error);
      setResult("Error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
        Product Classification
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-gray-300 font-medium">
            Material (0: Non-Eco, 1: Eco-Friendly):
          </label>
          <input
            type="number"
            name="material"
            value={formData.material}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-300 font-medium">Carbon Footprint:</label>
          <input
            type="number"
            name="carbonFootprint"
            value={formData.carbonFootprint}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-300 font-medium">Packaging (0: Plastic, 1: Paper):</label>
          <input
            type="number"
            name="packaging"
            value={formData.packaging}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-300 font-medium">Certification (0: No, 1: Yes):</label>
          <input
            type="number"
            name="certification"
            value={formData.certification}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-md transition duration-300"
          disabled={loading}
        >
          {loading ? "Classifying..." : "Classify"}
        </button>
      </form>

      {result && (
        <div className="mt-4 p-4 bg-gray-800 text-green-400 rounded-md">
          <h3 className="text-center text-lg font-semibold">Result: {result}</h3>
        </div>
      )}</>
  );
}

export default ProductForm;
