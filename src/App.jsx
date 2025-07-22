import React, { useEffect, useState } from "react";
import Meal from "./assets/components/Meal";
import Tabs from "./assets/components/Tabs";
import Input from "./assets/components/Input";

const App = () => {
  const [MealData, setMealData] = useState([]);
  const [area, setarea] = useState("Indian");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchDataFromApi = async (area) => {
    try {
      setLoading(true);
      setError("");
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();
      if (data.meals) {
        setMealData(data.meals);
      } else {
        setMealData([]);
        setError(`No meals found for area: "${area}"`);
      }
    } catch (err) {
      setError("Failed to fetch meals. Please try again.");
      setMealData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromApi(area);
  }, [area]);

  return (
    <main className="bg-gray-900 min-h-screen">
      <Tabs setarea={setarea} />

      <Input
        setMealData={setMealData}
        setError={setError}
        setLoading={setLoading}
      />

      <div className="px-3 py-1 text-white text-center">
        {loading && <p className="text-lg text-white">Loading meals...</p>}
        {error && <p className="text-lg text-red-400">{error}</p>}
        {!loading && !error && MealData.length === 0 && (
          <p className="text-lg text-white">No meals available.</p>
        )}
      </div>
      <div className="p-3 text-white flex justify-center flex-wrap gap-5 bg-gray-900">
        {!loading &&
          !error &&
          MealData.map((data) => <Meal key={data.idMeal} data={data} />)}
      </div>
    </main>
  );
};

export default App;
