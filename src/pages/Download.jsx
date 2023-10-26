import { Button, Input } from "@chakra-ui/react";
import logo from "../../src/assets/realassist-logo.png";
import axios from "axios";
import { user } from "./Login & Registration/Login";
const Download = () => {
  console.log(user);
  const handleDownload = (e) => {
    e.preventDefault();
    const form = e.target;
    const address = form.address.value;
    const id = localStorage.getItem("id");
    const data = { userId: id, address: address };
    console.log(data);
    axios
      .post("http://172.172.165.132/api/userRequestLog", data)
      .then((result) => console.log(result.data));
  };
  return (
    <div className="w-[90%] mx-auto space-y-2 mt-8">
      <div className="flex gap-2  mb-2">
        <img src={logo} className="w-4" alt="" />
        <h1 className="text-sm">RealAssist Ai</h1>
      </div>
      <form onSubmit={handleDownload}>
        <Input type="text" size="sm" name="address" />
        <br />
        <Button
          type="submit"
          display="block"
          mx="auto"
          my={2}
          w="full"
          rounded="full"
          fontFamily={"heading"}
          bgColor="#304CEF"
          textColor="white"
          size="sm"
          _hover={{
            textColor: "black",
            bg: "white",
          }}
        >
          Download
        </Button>
      </form>

      <div className="flex gap-2 justify-center mb-4 text-xs">
        <h1 className="text-sm text-gray-400">Powered By</h1>
        <img src={logo} className="w-4" alt="" />
        <h1 className="text-sm">RealAssist Ai</h1>
      </div>
    </div>
  );
};

export default Download;
