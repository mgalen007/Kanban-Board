
interface ButtonProps {
    text: string
}

const Button = ({text}: ButtonProps) => {
    return (
        <button
            className="border py-2 px-7 rounded-3xl bg-[#754be5] text-white font-medium cursor-pointer transition-all delay-75 ease-in hover:bg-[#1e0058]/80"
        >
            {text}
        </button>
    )
}

export default Button