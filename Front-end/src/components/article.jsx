import PropTypes from "prop-types";

export default function Article({ className, children }) {
  return <article className={className}>{children}</article>;
}
Article.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
