import { Link } from "react-router-dom";
import { User, Info } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSelector } from "react-redux";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="rounded sticky top-0 bg-gray-700 z-40">
      <div className="w-full container  py-3 flex items-center bg-[#102536] justify-between border-b z-30 border-slate-300">
        <h1 className="text-4xl font-bold">
          Gam<span className="text-red-600">erz</span>
        </h1>
        <div className="flex space-x-2 items-center">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <div className="backdrop-brightness-150 rounded-full p-2 hover:backdrop-brightness-0">
                  <User />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#102536] text-white mr-1">
                <DropdownMenuLabel>{userInfo.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/admin/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/admin/users">Users</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/admin/posts">Posts</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/admin/games">Games</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/admin/events">Events</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/admin/reports">Reports</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
