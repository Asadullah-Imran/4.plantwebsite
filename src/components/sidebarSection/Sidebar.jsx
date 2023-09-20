import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src="./logo.jpg" alt="Image" />
        <h2>Plaife</h2>
      </div>
      <div className="menuDiv">
        <h3 className="divTitle">Quick Menu</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              Icon
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
