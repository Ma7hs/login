import React from 'react';
import Input from './CustomInput';
import Button from './Button';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import Image from '../../node_modules/next/image';
import logo from '../../public/logo.png';

interface CardFormProps {
  title: string;
  subtitle: string;
  fields: {
    type: string;
    text: string;
  }[];
  buttonText: string;
  onClick: () => void;
  onChangeEmail: (email: string) => void;
  onChangePassword: (password: string) => void;
  data: {
    email: string;
    password: string;
  };
}

export default function CardForm(props: CardFormProps) {
  return (
    <div className="flex flex-col items-start gap-7 w-72 sm:w-[90%] md:w-[80%] lg:w-[120%] mx-auto shadow shadow-slate-400 p-10 rounded-lg bg-white">
      <div className="flex items-center justify-center sm:mx-auto sm:w-full sm:max-w-sm">
        <Image src={logo} height={100} width={300} alt="Easy4U" />
      </div>
      <div className="gap-5">
        <span className="text-sm text-zinc-400 font-normal">
          {props.subtitle}
        </span>
        <h1 className="text-5xl text-black font-semibold">{props.title}</h1>
      </div>
      <form className="flex flex-col items-center justify-center gap-7 w-full">
        {props.fields.map((field, index) => {
          if (field.type === 'email') {
            return (
              <Input
                key={index}
                text={field.text}
                type="email"
                data={props.data.email}
                onChange={props.onChangeEmail}
              />
            );
          } else if (field.type === 'password') {
            return (
              <Input
                key={index}
                text={field.text}
                type="password"
                data={props.data.password}
                onChange={props.onChangePassword} 
                forgotPassoword
              />
            );
          }
        })}
        <Button
          text={props.buttonText}
          icon={<IconArrowNarrowRight />}
          onClick={props.onClick}
        />
      </form>
    </div>
  );
}
