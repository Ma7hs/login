import { useState } from "react";
import CardForm from "./Card";
import Input from "./CustomInput";
import Model from "./Model";
import second from "../../public/teste.png"

export default function ResetPassword() {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handlePassword = (password: string) => {
    setPassword(password);
  };

  const handleConfirmPassword = (confirmPassword: string) => {
    setConfirmPassword(confirmPassword);
  };

  const handleSubmit = () => {
    validatePassword(password, confirmPassword);
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

  return (
    <Model image={{url: second, alt: "teste", height: 200, width: 1000}}>
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
        {errorMessage && (
          <p className="font-black text-red-500">{errorMessage}</p>
        )}
      </CardForm>
    </Model>
  );
}
