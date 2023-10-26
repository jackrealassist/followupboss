import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/realassist-logo.png";

const LoginRegister = () => {
  return (
    <div className="space-y-4 mt-2 mb-12">
      <div className="flex gap-2 justify-center mb-2">
        <img src={logo} className="w-8" alt="" />
        <h1 className="text-2xl font-mono font-semibold text-gray-600">
          RealAssist.Ai
        </h1>
      </div>
      <div>
        <h1 className="text-center mb-3 text-xl font-bold text-gray-500">
          Start a Free RealAssist.Ai Trial
        </h1>
        <Button
          display="block"
          mx="auto"
          bgColor="#304CEF"
          textColor="white"
          size="sm"
        >
          <Link to="/register">Register</Link>
        </Button>
      </div>
      <div>
        <h1 className="text-center mb-2 text-xl font-bold text-gray-500">
          Already have a RealAssist.Ai account?
        </h1>
        <Button
          display="block"
          mx="auto"
          bgColor="#304CEF"
          textColor="white"
          size="sm"
        >
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default LoginRegister;
