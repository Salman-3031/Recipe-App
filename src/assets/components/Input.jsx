import React, { useState } from "react";

const Input = ({ setMealData, setError, setLoading }) => {
  const [inputdata, setinputdata] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const query = inputdata.trim();

    if (!query) {
      setError("Please enter a valid meal name.");
      setMealData([]);
      return;
    }

    try {
      setLoading(true);
      setError("");
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await api.json();
      if (data.meals) {
        setMealData(data.meals);
        setinputdata('')
      } else {
        setMealData([]);
        setError(`No meals found for: "${query}"`);
        setinputdata('')
      }
    } catch (err) {
      setError("Error fetching meal data. Try again.");
      setMealData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submitHandler} className="p-3 flex justify-center">
      <input
        value={inputdata}
        onChange={(e) => setinputdata(e.target.value)}
        className="text-white bg-gray-700 min-w-[100px] w-96 py-2 px-5 rounded-sm focus:outline outline-white border-0"
        placeholder="Enter meal name"
        type="text"
      />
    </form>
  );
};

export default Input;
