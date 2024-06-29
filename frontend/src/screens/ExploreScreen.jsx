import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import Midbar from "@/components/Midbar";
const ExploreScreen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mt-5 flex flex-grow">
        {/* Leftbar */}
        <div className=" flex-[0.3]">
          <ProfileCard />
        </div>

        {/* Midbar */}
        <div className="flex-[0.5] flex flex-col overflow-y-auto">
          <Midbar />
        </div>

        {/* Rightbar */}
        <div className="flex-[0.2] ">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default ExploreScreen;
