import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";

const ExploreScreen = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5 flex">
        {/* leftbar */}
        <div className="flex flex-[0.3]">
          <ProfileCard />
        </div>

        {/* Midbar */}
        <div className="flex-[0.5] bg-red-300">
          <h1>Midbar</h1>
        </div>

        {/* Rightbar */}
        <div className="flex-[0.2] bg-red-400">
          <h1>RightBar</h1>
        </div>
      </div>
    </div>
  );
};

export default ExploreScreen;
