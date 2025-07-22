import React from "react";

const Meal = ({ data }) => {
  return (
    <div
      className="text-center 
        
        basis-[calc(50%-15px)] 
        sm:basis-[calc(33.333%-15px)] 
        md:basis-[calc(25%-15px)] 
        flex-shrink-0"
    >
      <div className="w-full">
        <img
          className="w-full object-cover rounded-sm"
          src={data.strMealThumb}
          alt={data.strMeal}
        />
      </div>
      <h2 className="my-2 text-2xl">{data.strMeal}</h2>
    </div>
  );
};

export default Meal;
