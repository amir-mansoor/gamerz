import React from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";

const Midbar = () => {
  return (
    <div className="flex-grow px-2">
      <div className="">
        <CreatePost />
        <div className="mt-2">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Midbar;
