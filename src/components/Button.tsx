import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    icon: React.ReactNode;
}

export default function Button({icon, text, ...props}: ButtonProps){
    return (
        <>
            <button className="flex flex-row  items-center justify-center gap-3 bg-button-color rounded-2xl w-2/4 h-8" {...props}>
                <p className="">{text}</p>
                {icon}
            </button>
        </>
    )
}