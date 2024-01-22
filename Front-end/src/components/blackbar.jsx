import PropTypes from "prop-types";

export default function Blackbar({
  className,
  children,
  classNameNav,
  classNameUl,
}) {
  return (
    <section className={className}>
      {children[0]}
      <nav className={classNameNav}>
        <ul className={classNameUl}>{children[1]}</ul>
      </nav>
    </section>
  );
}

Blackbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string.isRequired,
  classNameNav: PropTypes.string.isRequired,
  classNameUl: PropTypes.string.isRequired,
};
