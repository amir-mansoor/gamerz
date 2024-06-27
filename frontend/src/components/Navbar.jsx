import { Bell, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/slices/authSlice";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigiate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigiate("/login");
  };

  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <div id="logo" className="flex items-center">
          <h1 className="text-white font-extrabold text-4xl">
            Gam<span className="text-red-600">erz</span>
          </h1>
          <input
            type="text"
            placeholder="Explore"
            className="ml-4 rounded-full outline-none  bg-slate-600 p-1 text-white"
          />
        </div>
        <div className="flex items-center text-white space-x-5">
          <Link to="/inbox">
            <Mail />
          </Link>
          <Link to="/notification">
            <div className="relative">
              <Bell className="w-6 h-6" />

              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                1
              </span>
            </div>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Avatar className="w-7 h-7">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>
                  {userInfo?.name.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#102536] text-white mr-1">
              <DropdownMenuLabel>Amir Mansoor</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to={`/profile/edit/${userInfo?._id}`}>Edit Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/admin/users">Users</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/admin/posts">Posts</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={() => handleLogout()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
