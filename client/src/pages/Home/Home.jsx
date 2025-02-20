import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();
  const handleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result?.user);
        navigate("/todo")
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        {/* Slogan */}
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Organize Your Tasks, Boost Your Productivity!
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-600 mt-4 text-center max-w-2xl">
          Manage your daily tasks effortlessly and stay on top of your goals
          with our simple and powerful Task Manager.
        </p>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="mt-6 px-6 py-3 text-black text-lg font-semibold rounded-lg border transition flex justify-center items-center gap-2 cursor-pointer"
        >
          <FcGoogle className="text-2xl" />
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Home;
