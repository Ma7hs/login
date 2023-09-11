import CardForm from './Card';
import mypic from "../../public/group-image.png"
import Image from '../../node_modules/next/image';
import { useEffect, useState } from 'react';


export default function Login() {

  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (email: string) => {
    setEmail(email)
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password)
  };

  const handleInputChange = () => {
    setEmail(email);
    setPassword(password);
  };

  const handleFormData = () => {
    return {
      email,
      password
    }
  }

  //funcao para verificar dados do usuario e enviar para o backend
  const handleLogin = () => {

  }


  const fields = [
    {
      type: "email",
      text: "Email",
    },
    {
      type: "password",
      text: "Senha",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);


    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <section className="h-screen w-screen flex flex-row bg-white">
      <div className="container h-full w-full px-6 py-24 flex flex-row items-center justify-center">
        <div className=''>
          <CardForm
            title="Login"
            subtitle="Bem-vindo de volta!"
            fields={fields}
            buttonText="Login"
            onClick={handleLogin}
            onChangeEmail={handleEmailChange}
            onChangePassword={handlePasswordChange}
            data={{
              email: email,
              password: password,
            }}
          />
        </div>
      </div>
      {
        windowWidth > 768 && (
          <div className='container h-full w-3/4 flex flex-row bg-background-inital relative'>
            <Image src={mypic} alt='teste' height={200} width={300} className="w-[729px] h-[739px] absolute bottom-40 -left-44" />
          </div>
        )
      }
    </section>
  );
}
