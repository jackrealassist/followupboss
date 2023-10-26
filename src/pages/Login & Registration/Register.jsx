import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { user } from "./Login";
const Register = () => {
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const data = { name, email, password };
    console.log(name, email, password);
    //
    axios
      .post("http://172.172.165.132/api/auth/signup", data)
      .then((result) => {
        if (result.data) {
          console.log(result);
          user.value = result.data;
          localStorage.setItem("id", result.data.id);
          console.log(user);
          navigate("/download");
        }
      });
  };
  return (
    <div className="w-[90%] mx-auto">
      <form onSubmit={handleRegister} className="space-y-4 w-full mx-auto mt-8">
        <Input
          placeholder="User Name"
          name="name"
          bg={"gray.100"}
          border={0}
          color={"gray.500"}
          _placeholder={{
            color: "gray.500",
          }}
        />
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
          Register
        </Button>
      </form>
      <p className="text-center mt-3">
        Already Have an Account?{" "}
        <Link to="/login" className="text-blue-400">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
