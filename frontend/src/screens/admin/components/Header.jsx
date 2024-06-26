import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { SidebarClose } from "lucide-react";
const Header = () => {
  return (
    <div className="backdrop-brightness-150 py-2 px-2 rounded ">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">
          Gam<span className="text-red-600">erz</span>
        </h1>
        <div className="flex space-x-2 items-center">
          <div className="backdrop-brightness-150 rounded-full p-2 hover:backdrop-brightness-0">
            <Link to="/admin/feedbacks">
              <SidebarClose />
            </Link>
          </div>
          <div className="backdrop-brightness-150 rounded-full p-2 hover:backdrop-brightness-0">
            <Link to="/admin/feedbacks">
              <User />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
