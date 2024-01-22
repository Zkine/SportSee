import PropTypes from "prop-types";

export default function Container({ className, children }) {
  return <div className={className}>{children}</div>;
}
Container.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};
