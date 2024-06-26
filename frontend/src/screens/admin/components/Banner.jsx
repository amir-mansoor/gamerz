import { useSelector } from "react-redux";

const Banner = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="mt-10 backdrop-brightness-150 py-5 px-4 rounded">
      <h1 className="text-4xl">Good Morning, {userInfo.name} 👋</h1>
      <p className="mt-2">Here is what's happening with your project today:</p>
    </div>
  );
};

export default Banner;
