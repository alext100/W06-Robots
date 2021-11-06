import { Button } from "react-bootstrap";

const ButtonComponent = ({ className, actionOnClick, buttonText }) => {
  return (
    <Button
      variant="primary"
      size="sm"
      type="submit"
      className={className}
      onClick={actionOnClick}
      value={buttonText}
    >
      {buttonText}
    </Button>
  );
};
export default ButtonComponent;
