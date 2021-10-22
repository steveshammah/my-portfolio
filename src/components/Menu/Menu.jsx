import "./Menu.scss";

export const Menu = ({ menuActive }) => {
  return (
    <div className='menu'>
      <ul className={menuActive ? "menuActive" : "menuInactive"}>
        <li>Home</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>More</li>
      </ul>
    </div>
  );
};
