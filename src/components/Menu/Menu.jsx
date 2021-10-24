import "./Menu.scss";

export const Menu = ({ menuActive, setMenuActive }) => {
  const links = ["home", "portfolio", "experience", "contact", "more"];
  return (
    <div className='menu'>
      <ul className={menuActive ? "menuActive" : "menuInactive"}>
        {links.map((link) => (
          <li onClick={() => setMenuActive(!menuActive)}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
