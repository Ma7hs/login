import CardForm from "./Card";
import mypic from "../../public/group-image.png";
import Image from "../../node_modules/next/image";
import { useEffect, useState } from "react";
import Input from "./CustomInput";
import Model from "./Model";
import axios from "axios";
import { GetServerSideProps } from "next";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [erro, setErro] = useState<string>("");

  const handleEmailChange = (email: string) => {
    console.log(`Email: ${email}`);
    setEmail(email);
  };

  const handlePasswordChange = (password: string) => {
    console.log(`Password: ${password}`);
    setPassword(password);
  };

   const handleLogin = async () => {
      const response = await fetch("url")
      const data = await response.json()
      return {
        props: {
          data
        }
      }
  };

  return (
    <Model image={{ url: mypic, alt: "teste", height: 200, width: 300 }}>
      <CardForm
        title="Login"
        subtitle="Bem-vindo de volta!"
        onClick={handleLogin}
        buttonText="Login"
      >
        <Input
          data={email}
          onChange={handleEmailChange}
          text="Email"
          type="email"
        />
        <Input
          data={password}
          onChange={handlePasswordChange}
          text="Senha"
          type="password"
          forgotPassoword
        />
      </CardForm>
    </Model>
  );
}


