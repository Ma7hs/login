

interface ButtonProps {
    text: string;
    icon: React.ReactNode;
    onClick?: (value: string) => void
}

export default function Button(props: ButtonProps){
    return (
        <>
            <button className="flex flex-row  items-center justify-center gap-3 bg-button-color rounded-2xl w-2/4 h-8">
                <p className="">{props.text}</p>
                {props.icon}
            </button>
        </>
    )
}