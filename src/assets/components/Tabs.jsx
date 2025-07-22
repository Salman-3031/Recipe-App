import React from "react";

const Tabs = ({ setarea }) => {
  return (
    <div className="p-3 flex gap-y-2 gap-x-5 justify-center flex-wrap">
      {["Indian", "Canadian", "American", "Thai", "British", "Russian"].map((area) => (
        <button
          key={area}
          onClick={() => setarea(area)}
          className="hover:scale-105 duration-500 transition ease hover:bg-cyan-700 outline outline-cyan-400 px-5 py-2 rounded-md text-white capitalize"
        >
          {area}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
