import React from "react";

const ViewAll: React.FC = () => {
  return (
    <div className="view-all w-full relative mt-8">
      <button className="absolute md:right-0 text-gray-400 | hover:text-global-shade transition-colors">
        View all ➔
      </button>
    </div>
  );
};

export default ViewAll;
