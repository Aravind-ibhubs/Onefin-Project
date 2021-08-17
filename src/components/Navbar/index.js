import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import {
  NavContainer,
  ImageElement,
  LinksContainer,
  NavbarButton,
} from "./styledComponents";

const Navbar = (props) => {
  const { history } = props;
  const logoutButton = () => {
    localStorage.removeItem("login-token");
  };

  return (
    <NavContainer>
      <ImageElement src="https://image.flaticon.com/icons/png/512/906/906352.png" />
      <LinksContainer>
        <Link to="/login">Login</Link>
        <Link to="/">Movies</Link>
        <Link to="/login">
          <NavbarButton type="button" onClick={logoutButton}>
            Logout
          </NavbarButton>
        </Link>
      </LinksContainer>
    </NavContainer>
  );
};

export default Navbar;
