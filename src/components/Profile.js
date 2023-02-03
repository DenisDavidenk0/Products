import { useContext, useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { ProfileContext } from "../context/ProfileContext";

function Profile() {
  const { profile, setProfile } = useContext(ProfileContext);
  const ProfileNameRef = useRef(null);
  const EmailRef = useRef(null);

  function saveProfile() {
    let newProfile = {
      name: ProfileNameRef.current.value,
      login: EmailRef.current.value,
    };
    setProfile(newProfile);
    localStorage.setItem("Name", JSON.stringify(newProfile));
    // setAlertMassage("Welcome" + ProfileNameRef.current.value);
    ProfileNameRef.current.value = "";
    EmailRef.current.value = "";
  }

  return (
    <div className="container">
      <Row>
        <Col>
          <Form>
            <h4 className="mt-4">Profile</h4>
            <Form.Control
              className="my-3"
              type="text"
              placeholder="Enter Name"
              ref={ProfileNameRef}
            />
            <Form.Control
              type="email"
              placeholder="Enter Email"
              ref={EmailRef}
            />
            <Button className="my-2" variant="success" onClick={saveProfile}>
              Save
            </Button>
          </Form>
        </Col>
      </Row>
      {JSON.stringify(profile)}
    </div>
  );
}

export default Profile;
