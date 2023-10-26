/* eslint-disable react-refresh/only-export-components */
import { Button, Input } from "@chakra-ui/react";
import { signal } from "@preact/signals-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const user = signal({});
const Login = () => {
  console.log(user);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const data = { email, password };
    console.log(email, password);
    //
    axios
      .post("http://172.172.165.132/api/auth/signin", data)
      .then((result) => {
        console.log(result.data);
        if (result.data) {
          user.value = result.data;
          localStorage.setItem("id", result.data.id);
          console.log(user);
          navigate("/download");
        }
      });
  };

  return (
    <div className="w-[90%] mx-auto">
      <form onSubmit={handleLogin} className="space-y-4  mx-auto mt-8">
        <Input
          placeholder="firstname@email.com"
          name="email"
          bg={"gray.100"}
          border={0}
          color={"gray.500"}
          _placeholder={{
            color: "gray.500",
          }}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          bg={"gray.100"}
          border={0}
          color={"gray.500"}
          _placeholder={{
            color: "gray.500",
          }}
        />
        <Button
          type="submit"
          display="block"
          mx="auto"
          fontFamily={"heading"}
          bgColor="#304CEF"
          textColor="white"
          size="sm"
          _hover={{
            textColor: "black",
            bg: "white",
          }}
        >
          Login
        </Button>
      </form>
      <p className="text-center mt-3">
        New Here?{" "}
        <Link to="/register" className="text-blue-400">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
