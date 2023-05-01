import { StButton } from "styles/Components";

function Button({ children, width, height, color, bgColor, onClick }) {
  return (
    <StButton
      width={width}
      height={height}
      color={color}
      bgColor={bgColor}
      onClick={onClick}
    >
      {children}
    </StButton>
  );
}

export default Button;
