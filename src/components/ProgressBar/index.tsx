import { Container, Completed } from "./styles";

interface ProgressBarProps {
  style?: object;
  percentCompleted: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  style,
  percentCompleted,
  ...props
}) => {
  return (
    <Container style={style} {...props}>
      <Completed percentCompleted={percentCompleted} />
    </Container>
  );
};

export default ProgressBar;
