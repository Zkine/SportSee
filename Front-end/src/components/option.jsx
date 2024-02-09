import PropTypes from "prop-types";
import { forwardRef } from "react";
const Option = forwardRef(function Option(
  { children, onSubmit, value1, value2 },
  ref
) {
  return (
    <div ref={ref} className="option remove">
      <form method="" onSubmit={onSubmit}>
        <p className="option__p">
          <label>
            <input type="radio" name="myRadio" value={value1} />
            {children[0]}
          </label>
          <label>
            <input type="radio" name="myRadio" value={value2} />
            {children[1]}
          </label>
        </p>
        <button type="submit" className="option__btn">
          Valider
        </button>
      </form>
    </div>
  );
});

export default Option;
Option.propTypes = {
  children: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value1: PropTypes.string.isRequired,
  value2: PropTypes.string.isRequired,
};
