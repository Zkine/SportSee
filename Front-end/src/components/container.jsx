import PropTypes from "prop-types";

export default function Container({ className, children }) {
  return <article className={className}>{children}</article>;
}
Container.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
