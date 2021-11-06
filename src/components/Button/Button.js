const Button = ({ className, actionOnClick, buttonText }) => {
  return (
    <Button
      variant="primary"
      size="sm"
      type="submit"
      className={className}
      onClick={actionOnClick}
    >
      {buttonText}
    </Button>
  );
};
export default Button;
