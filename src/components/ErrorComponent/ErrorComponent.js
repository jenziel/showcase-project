import { NavLink } from "react-router-dom";
import "./ErrorComponent.css";
import PropTypes from "prop-types";

function ErrorComponent({ newError, setIsLoading, setError }) {
  console.log("newError", newError);
  const handleReset = () => {
    setIsLoading(false);
    setError("");
  };

  return (
    <div className='error-msg'>
      <h1 className='woops'>Woops!</h1>
      {!newError ? <h2>That Page Doesn't Exist.</h2> : <h2>{`${newError}`}</h2>}
      <NavLink to='/' className='nav'>
        <div onClick={handleReset}>
          <button className='back-button2'>Return to Homepage</button>
        </div>
      </NavLink>
    </div>
  );
}

export default ErrorComponent;

ErrorComponent.propTypes = {
  newError: PropTypes.string.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};
