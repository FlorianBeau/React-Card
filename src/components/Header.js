import logo from "../logo.svg";

const Header = (props) => {
  return (
    <header className="app-header">
      <div className="app-logo flex align-center">
        <img src={logo} className="logo mr-2" alt="logo" />
        <span className="app-title uppercase bold">{props.age}</span>
      </div>
    </header>
  );
};

export default Header;
