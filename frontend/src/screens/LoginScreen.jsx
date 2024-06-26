import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/slices/userApiSlice";
import { setCredentials } from "@/slices/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const handleForm = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      toast.error("All Fields Are Required.");
      return;
    }
    try {
      const res = await login({ email, password }).unwrap();

      dispatch(setCredentials({ ...res }));
      navigate("/explore");
    } catch (err) {
      console.log(err);
      toast.error(err.data.message || err.error);
    }
  };
  return (
    <div className="h-[80vh] backdrop-brightness-150 bg-cover bg-center">
      <div className="container flex flex-col ">
        <div className="mt-10 mb-2">
          <h1 className="text-white text-4xl">Login To Account</h1>
          <form
            onSubmit={handleForm}
            className="flex flex-col space-y-10 text-white w-[50%] mt-10 mb-3"
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-2 px-2 rounded  bg-transparent outline-none border-2 border-gray-400"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-2 px-2 rounded  bg-transparent outline-none border-2 border-gray-400"
              />
            </div>

            <Button
              disabled={isLoading}
              className="w-fit bg-transparent border"
              onClick={handleForm}
            >
              Login
            </Button>
          </form>
          <Link className="text-white" to="/register">
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
