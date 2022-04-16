import { FiChevronRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { nextStepSelected } from "../../store/modules/step/actions";
import { Content } from "../../styles/GlobalStyles";
import Button from "../Button";
import SizedBox from "../SizedBox";
import TextInput from "../TextInput";
import { FormWrapper } from "./styles";

const ChooseNamePage: React.FC = () => {
    const dispatch = useDispatch();

    const nextStep = () => {
        dispatch(nextStepSelected());
    };

    return (
        <Content>
            <FormWrapper>
                <TextInput name="caracture-1" placeholder="Digite o nome da pessoa 1" />
                <TextInput name="caracture-1" placeholder="Digite o nome da pessoa 2" />
                <TextInput name="caracture-1" placeholder="Digite o nome da pessoa 3" />
            </FormWrapper>

            <Content
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "2rem auto",
                    marginBottom: "6.5rem",
                }}
            >
                <Button onClick={nextStep} disabled={true}>
                    <span>PRÓXIMO</span>
                    <FiChevronRight />
                </Button>
            </Content>

            <SizedBox />
        </Content>
    );
}

export default ChooseNamePage;