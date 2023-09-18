import CardForm from "@/components/Card";
import { useState } from 'react';
import Input from "./CustomInput";
import Model from "./Model";
import third from "../../public/third.png"

export default function ForgotPassword() {
    const [email, setEmail] = useState<string>("")
    
    const handleSubmitEmail = (email: string) => {
        setEmail(email)
    }

    const sendEmail = () => {

    }

    return (
        <Model image={{url: third, alt: "redefinir-senha", height: 200, width: 300}}>
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
        </Model>
    )
}