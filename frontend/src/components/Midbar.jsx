import React from "react";
import CreatePost from "./CreatePost";

const Midbar = () => {
  return (
    <div className="flex-grow">
      <div className="p-2">
        <CreatePost />
      </div>
    </div>
  );
};

export default Midbar;
