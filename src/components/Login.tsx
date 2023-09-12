import CardForm from './Card';
import mypic from "../../public/group-image.png"
import Image from '../../node_modules/next/image';
import { useEffect, useState } from 'react';
import Input from './CustomInput';


export default function Login() {

  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (email: string) => {
    console.log(`Email: ${email}`);
    setEmail(email)
  };

  const handlePasswordChange = (password: string) => {
    console.log(`Password: ${password}`);
    setPassword(password)
  };

  const handleLogin = () => {
    
  }

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
          <CardForm title="Login" subtitle="Bem-vindo de volta!" onClick={handleLogin} buttonText="Login">
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
