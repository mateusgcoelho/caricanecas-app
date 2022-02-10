import { Container, Completed } from "./styles";

interface ProgressBarProps {
  style?: object;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ style, ...props }) => {
  return (
    <Container style={style} {...props}>
      <Completed />
    </Container>
  );
};

export default ProgressBar;
