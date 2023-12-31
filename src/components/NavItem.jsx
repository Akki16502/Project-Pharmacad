import Link from "next/link";

const NavItem = ({ text, href, active, target }) => {
  return (
    <Link
      className={`nav__item ${active ? "active" : ""}`}
      href={href}
      scroll
      target={target}
    >
      {/* <a target={target}>{text}</a> */}
      {text}
    </Link>
  );
};

export default NavItem;
