import {Container, Form, Image, Button, Row, Col} from "react-bootstrap";
import LogoProfile from "../img/info-profile.png"
import BackArrow from "../img/info-backarrow.png"

const ProfileForm = () => {
  return(
    <Container className="my-5 w-50 ">
      <Row className="justify-content-center mb-3">
        <Col >
          <Image rounded="true" src={BackArrow} width={20}/>
        </Col>
        <Col>
          <Image thumbnail="true" src={LogoProfile} alt="default profile" width={100}/>
        </Col>
      </Row>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nama*</Form.Label>
          <Form.Control type="text" placeholder="Nama" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Kota*</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Alamat*</Form.Label>
          <Form.Control as="textarea" row={2} placeholder="Contoh: Jl Ikan Hiu  No. 33" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>No Handphone*</Form.Label>
          <Form.Control type="tel" placeholder="+62 *********" />
        </Form.Group>
        <div className="my-5">
          <Button variant="primary" type="submit" className="w-100">Simpan</Button>
        </div>
      </Form>
    </Container>
  )
}
export default ProfileForm;