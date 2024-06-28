import React from "react";
import coverPhoto from "../assets/cover.jpg";
import profilePhoto from "../assets/profile.jpeg";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div className="max-w-sm backdrop-brightness-150 text-white p-5 rounded-lg">
      <div className="relative">
        <img className="w-full h-32 object-cover" src={coverPhoto} />
        <img
          className="w-24 h-24 rounded-full border-4 border-white absolute bottom-0   transform translate-y-1/2"
          src={profilePhoto}
        />
      </div>
      <div className="mt-12 text-center p-2">
        <h2 className="text-xl font-semibold">John Doe</h2>
        <p className="text-gray-300">
          Full Stack Software Engineer specializing in the MERN stack
        </p>
        <div class="mt-4 flex justify-center items-center space-x-4">
          <p class=" border-r border-gray-300 pr-4">Friends 150</p>
          <p class=" pl-4"> Requests 3</p>
        </div>
        <div class="mt-4">
          <Link to="/proflie" class="text-indigo-200 hover:text-indigo-400">
            My Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
