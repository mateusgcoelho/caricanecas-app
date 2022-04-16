import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const TextInput: React.FC<TextInputProps> = ({ name, ...rest }: TextInputProps) => {
    return (
        <Container id={name} name={name} {...rest} />
    );
}

export default TextInput;