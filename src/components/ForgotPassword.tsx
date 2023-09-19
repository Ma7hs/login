import { useState, useEffect, Suspense } from 'react';
import CardForm from "./Card";
import Input from "./CustomInput";
import Model from "./Model";
import second from "../../public/teste.png"
import { performApi } from '../utils/performApi';
import { useRouter } from 'next/router';
import Loading from './Loading';
import React from 'react';
const ErrorMessage = React.lazy(() => import('./Message'));

export default function ForgotPassword() {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [info, setInfo] = useState<string>("");
  const router = useRouter();
  const { id, token } = router.query;

  const handlePassword = (password: string) => {
    console.log(password);
    setPassword(password);
  };

  const handleConfirmPassword = (confirmPassword: string) => {
    setConfirmPassword(confirmPassword);
  };

  const validatePassword = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem!");
    } else if (!password || !confirmPassword) {
      setErrorMessage("Preencha os campos necessários!");
    } else if (password === confirmPassword) {
      setErrorMessage("");
    }
  };

  const handleSubmit = async () => {
    validatePassword(password, confirmPassword);
    try {
      console.log(confirmPassword);
      console.log(typeof confirmPassword);
      const data = await performApi.sendData(`forgot-password/${id}/${token}`, "POST", { password });
      setInfo("Senha alterada com sucesso!");
      console.log(data);
    } catch {
      setErrorMessage("Houve um erro ao enviar para o servidor!");
    }
  };

  useEffect(() => {
    console.log('ID do cliente:', id);
    console.log('Token:', token);
  }, [id, token]);

  return (
    <Model image={{ url: second, alt: "teste", height: 200, width: 1000 }}>
      <CardForm
        title="Redefinir Senha"
        subtitle="Guarde sua nova senha!"
        buttonText="Enviar"
        onClick={handleSubmit}
      >
        <Input
          text="Nova Senha"
          type="password"
          data={password}
          onChange={handlePassword}
        />
        <Input
          text="Confirmar Senha"
          type="password"
          data={confirmPassword}
          onChange={handleConfirmPassword}
        />
        <Suspense fallback={<Loading />}>
          {errorMessage && (
            <ErrorMessage message={errorMessage} type="error" />
          )}
          {info && (
            <ErrorMessage message={info} type="success" />
          )}
        </Suspense>
      </CardForm>
    </Model>
  );
}
