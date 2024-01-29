import PropTypes from "prop-types";

export default function Button({ className, children }) {
  return <button className={className}>{children}</button>;
}
Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
