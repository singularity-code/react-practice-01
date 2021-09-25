import PropTypes from "prop-types";

const NewComponent = ({ name, children, favNum }) => {
  return (
    <div>
      This is {name} component. <br /> children is {children}
        <p>표시될 숫자는 {favNum}</p>
    </div>

  );
};

NewComponent.defaultProps = {
  name: "NO NAME",
};

// name must be a string
NewComponent.propTypes = {
  name: PropTypes.string,
  favNum: PropTypes.number.isRequired
};

export default NewComponent;
