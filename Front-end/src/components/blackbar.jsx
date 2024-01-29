import PropTypes from "prop-types";

export default function Blackbar({ className, children }) {
  return (
    <div className={className}>
      {children[0]}
      {children[1]}
    </div>
  );
}

Blackbar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
