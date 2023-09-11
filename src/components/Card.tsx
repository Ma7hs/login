import { useState } from "react";
import Input from "./CustomInput";
import Button from "./Button";
import { IconArrowNarrowRight } from "@tabler/icons-react";

interface CardInfoProps {
  title: string;
  subtitle: string;
}

export default function Card(props: CardInfoProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };

  return (
    <div className="flex flex-col items-start gap-5 w-full sm:w-[90%] md:w-[80%] lg:w-[100%] mx-auto shadow shadow-slate-400 p-10 rounded-lg">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="" alt="Your Company" />
      </div>
      <div className="gap-5">
        <span className="text-sm text-zinc-400 font-normal">
          {props.subtitle}
        </span>
        <h1 className="text-5xl text-black font-semibold">{props.title}</h1>
      </div>
      <form className="flex flex-col items-center justify-center gap-5 w-full">
        <Input
          text="Email"
          onChange={handleEmailChange}
          type="email"
          data={email}
        />
        <Input
          text="Password"
          onChange={handlePasswordChange}
          type="password"
          data={password}
        />
        <Button text="Login" icon={<IconArrowNarrowRight />} />
      </form>
    </div>
  );
}
