import PropTypes from "prop-types";

export default function button({ className, children }) {
  return <button className={className}>{children}</button>;
}
button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};
