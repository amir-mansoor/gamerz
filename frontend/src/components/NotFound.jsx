import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center mt-[10rem]">
      <h1 className="text-4xl">404 Not Found!</h1>
      <p>The page you are looking for is not available.</p>
      <Link to="/explore">
        <Button className="bg-transparent border mt-2">
          <ArrowLeft />
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
