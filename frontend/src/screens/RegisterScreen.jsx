import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <div className="w-screen h-screen bg-[url('./assets/bg-image.jpg')] backdrop-brightness-150 bg-cover bg-center">
      <div className="container flex flex-col py-2 w-full h-full">
        <div className="mt-10">
          <h1 className="text-white text-4xl">Create New Account</h1>
          <form className="flex flex-col space-y-10 text-white w-[50%] mt-10 mb-3">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="py-2 px-2 rounded  bg-transparent outline-none border-2 border-gray-400"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="py-2 px-2 rounded  bg-transparent outline-none border-2 border-gray-400"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="py-2 px-2 rounded  bg-transparent outline-none border-2 border-gray-400"
              />
            </div>

            <Button className="w-fit bg-transparent border">Register</Button>
          </form>
          <Link className="text-white" to="/login">
            Already have an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
