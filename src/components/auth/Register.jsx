import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import * as formik from 'formik';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import Header from '../Header';
import Footer from '../Footer';



export default function Register() {
  // Import the functions you need from the SDKs you need

  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDduY2VoKZ1HY9fnDaYwkEUDPMM7P-3ylU",
  authDomain: "filrouge-98660.firebaseapp.com",
  projectId: "filrouge-98660",
  storageBucket: "filrouge-98660.appspot.com",
  messagingSenderId: "677999033333",
  appId: "1:677999033333:web:d8d07a32a2755e8a5e7ebc",
  measurementId: "G-PT8D7LLBPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

  
  const { Formik } = formik;
  const [img, setImage] = useState("");
  useEffect(()=> {
    img && uploadFile(img)
  }, [img]
  )


  const schema = yup.object().shape({
    firstName: yup.string().required("Prénom requis"),
    lastName: yup.string().required("Nom requis"),
    username: yup.string().required("Nom d'utilisateur requis"),
    city: yup.string().required("Nom de la ville requis"),
    state: yup.string().required("Nom du pays requis"),
    email: yup.string().email().required("L'email requis"),
    password: yup.string().required("Le mot de passe requis"),
    confirmpassword:yup.string().required("La confirmation du mot de passe requis"),
    file: yup.mixed().required("Veuillez mettre une image"),
    terms: yup.bool().required().oneOf([true], 'Vous devez accepter les termes et les conditions du site'),
  });

  const uploadFile = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + "_" + file.name;
    const storageRef = ref(storage, "images/" + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed", (snapshot) => {
            console.log(snapshot)
        },
        (error) => {
            console.log(error);
            switch(error.code) {
                case 'storage/unauthorized':
                    console.log(error)
            }
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => console.log(downloadUrl))
        }
    );
}

  const handleSubmit = async (values) => {
    const { firstName, lastName, username, city, state, email,password,confirmpassword, file } = values;
  
    try {
      const userEmail= await createUserWithEmailAndPassword(app.auth(), email, password)
      await sendEmailVerification(userEmail.user);
      const storageRef = ref(storage, `images/${file.name}`);
      await uploadBytes(storageRef, file);
      console.log("Image uploaded successfully");
      


    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };
  
    return (
      <div>
        <Header/>
        <Container style={{backgroundColor:'#449973', width:'40%'}}> 
        <Row className='justify-content-center mb-5 mt-5'>
          <Col md={6}>
          <div>
          <h1 className='text-center mb-4' style={{ fontSize: "2rem" }}>INSCRIPTION</h1>
            <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        email: '',
        password:'',
        confirmpassword:'',
        file: null,
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors,setFieldValue }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="10"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                  {errors.firstName}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="10"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
                isInvalid={!!errors.lastName}
              />

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                  {errors.lastName}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="10" controlId="validationFormikUsername2">
              <Form.Label>Nom d'utilsateur</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Nom d'utilisateur"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="10"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>Ville</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="10"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label>Région</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="10"
              controlId="validationFormik105"
              className="position-relative"
            >
              <Form.Label>Adresse Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="10"
              controlId="validationFormik105"
              className="position-relative"
            >
              <Form.Label>Mot de Passe</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mot de Passe"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group
              as={Col}
              md="10"
              controlId="validationFormik105"
              className="position-relative"
            >
              <Form.Label>Confirmer le mot de passe</Form.Label>
              <Form.Control
                type="text"
                placeholder="Confirmer le mot de passe"
                name="confirmpassword"
                value={values.confirmpassword}
                onChange={handleChange}
                isInvalid={!!errors.confirmpassword}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.confirmpassword}
              </Form.Control.Feedback>
            </Form.Group>
          <Form.Group className="position-relative mb-3">
            <Form.Label>Fichier</Form.Label>
            <Form.Control
              type="file"
              required
              accept="image/*"
              name="file"
              onChange={(event) => {
                setFieldValue("file", event.currentTarget.files[0]);
                setImage(event.currentTarget.files[0]);
              }}
              isInvalid={!!errors.file}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.file}
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group className="position-relative mb-3">
            <Form.Check
              required
              name="terms"
              label="Accepter les termes et les conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>
          <Button type="submit" className='mb-5' style={{backgroundColor:"#334C37",border:"none"}}>S'inscrire</Button>
        </Form>
      )}
    </Formik>
        </div>
          </Col>

        </Row>
      </Container>
      <Footer/>
      </div>
      
        
    )
}