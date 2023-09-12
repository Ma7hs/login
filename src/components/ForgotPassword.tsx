"use client"

import CardForm from "@/components/Card";
import { useState } from 'react';
import Input from "./CustomInput";

export default function ForgotPassword() {

    const [email, setEmail] = useState<string>("")
    
    const handleSubmitEmail = (email: string) => {
        console.log(email)
        setEmail(email)
    }

    const sendEmail = () => {

    }

    return (
        <div className="container bg-white">
            <CardForm 
                title="Redefinir Senha"
                subtitle="Esqueceu sua senha?"
                buttonText="Enviar"
                onClick={sendEmail}> 
                <Input  
                data={email}
                type="email"
                onChange={handleSubmitEmail}
                text="Email"/>
            </CardForm>       
        </div>
    )
}