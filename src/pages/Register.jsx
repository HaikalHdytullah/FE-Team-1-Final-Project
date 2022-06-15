import { Row, Col } from "react-bootstrap";

// Import components
import LeftRegister from "../components/LeftRegister";
import RightRegister from "../components/RightRegister";
import "../css/Register.css";

const Register = () => {
  return (
    <>
      <Row>
        <Col>
          <LeftRegister />
        </Col>
        <Col>
          <RightRegister />
        </Col>
      </Row>
    </>
  );
};
export default Register;
