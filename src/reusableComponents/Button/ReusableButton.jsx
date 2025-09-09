import "./ReusableButton.scss";

const ReusableButton = ({ children, className = "", ...props }) => {
  return (
    <button className={`reusable-button ${className}`} {...props}>
      {children}
    </button>
  );
};

export default ReusableButton;
