import {Container, Navbar, Nav} from "react-bootstrap";
import Logo from "../img/logo-image.png";

const ProfileHeader = () => {
  return(
    <Navbar expand="md" mb="2" sticky="top">
      <Container>
        <Navbar.Brand>
          <img src={Logo} className="img-fluid my-2" alt="logo.png" />
        </Navbar.Brand>
        <Nav className="mx-auto">Lengkapi Profile</Nav>
      </Container>
    </Navbar>         
  )   
}
export default ProfileHeader;