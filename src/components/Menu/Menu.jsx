import "./Menu.scss";

export const Menu = ({ menuActive, setMenuActive }) => {
  const links = ["home", "portfolio", "contact"];
  return (
    <section className='menu'>
      <ul className={menuActive ? "menuActive" : "menuInactive"}>
        {links.map((link) => (
          <a
            href={`#${link}`}
            onClick={() => setMenuActive(!menuActive)}
            key={link}>
            <li>{link}</li>
          </a>
        ))}
      </ul>
    </section>
  );
};
