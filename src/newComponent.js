const NewComponent = (props) => {
  return (
    <div>
      This is {props.name} component. <br /> children is {props.children}
    </div>
  );
};

NewComponent.defaultProps = {
  name: "NO NAME",
};

export default NewComponent;
