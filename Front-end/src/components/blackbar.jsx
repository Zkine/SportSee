import PropTypes from "prop-types";

export default function Blackbar({ children }) {
  return (
    <>
      {children[0]}
      {children[1]}
    </>
  );
}

Blackbar.propTypes = {
  children: PropTypes.node.isRequired,
};
