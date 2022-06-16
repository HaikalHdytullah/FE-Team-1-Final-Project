import { Row, Col } from "react-bootstrap";

// Import components
import LeftLogin from "../components/LeftLogin";
import RightLogin from "../components/RightLogin";
import "../css/Login.css";

const Login = () => {
  return (
    <>
      <Row>
        <Col>
          <LeftLogin />
        </Col>
        <Col>
          <RightLogin />
        </Col>
      </Row>
    </>
  );
};
export default Login;
