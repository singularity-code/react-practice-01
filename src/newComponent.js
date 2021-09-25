const NewComponent = ({ name, children }) => {
  return (
    <div>
      This is {name} component. <br /> children is {children}
    </div>
  );
};

NewComponent.defaultProps = {
  name: "NO NAME",
};

export default NewComponent;
