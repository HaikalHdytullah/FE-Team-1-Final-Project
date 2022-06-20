import {Container, Nav, Navbar} from "react-bootstrap";
import Logo from "../img/logo-image.png";
import {Person} from "react-bootstrap-icons";


const ProfileHeader = () => {
  return(
    <Navbar expand="lg" mb="2" sticky="top" className="shadow-sm" style={{backgroundColor:"white"}}>
      <Container className="justify-content-between">
        <Navbar.Brand>
          <img src={Logo} className="img-fluid my-2" alt="logo.png" />
        </Navbar.Brand>
        <h1 style={{fontSize:24}}>Lengkapi Profile</h1>
        <Nav>
          <Nav.Link><Person size={25}/></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )   
}
export default ProfileHeader;