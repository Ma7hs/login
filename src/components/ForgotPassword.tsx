import CardForm from "@/components/Card";
import { useState } from 'react';

export default function ForgotPassword() {

    const [email, setEmail] = useState<string>("")

    const field = [
        {
            type: "email",
            text: "Email",
        }
    ]

    //Criar função para enviar ao Backend a solicitacao para redefninr email
    const handleSubmitEmail = () => {
        console.log(email)
        setEmail(email)
    }

    const sendEmail = () => {

    }

    const data = {
        email
    }

    return (
        <div className="container bg-white">
            <CardForm 
            title="Redefinir Senha"
                subtitle="Esqueceu sua senha?"
                fields={field}
                buttonText="Enviar"
                onClick={sendEmail} 
                onChange={handleSubmitEmail}
                data={data.email}
                />
        </div>
    )
}