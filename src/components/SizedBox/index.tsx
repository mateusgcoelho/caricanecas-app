interface SizedBoxProps {
  size?: number;
}

const SizedBox: React.FC<SizedBoxProps> = ({ size = 20 }) => {
  return <div style={{ height: `${size}px`, width: "100%" }}></div>;
};

export default SizedBox;
