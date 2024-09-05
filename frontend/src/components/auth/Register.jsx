import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import { signup } from '../../api/user'; // Import de la fonction API pour l'inscription
import Header from '../Header';
import Footer from '../Footer';
import { Formik } from 'formik';
import * as yup from 'yup';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { Button, Col, Form, InputGroup, Row, Container } from 'react-bootstrap';

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDduY2VoKZ1HY9fnDaYwkEUDPMM7P-3ylU",
  authDomain: "filrouge-98660.firebaseapp.com",
  projectId: "filrouge-98660",
  storageBucket: "filrouge-98660.appspot.com",
  messagingSenderId: "677999033333",
  appId: "1:677999033333:web:d8d07a32a2755e8a5e7ebc",
  measurementId: "G-PT8D7LLBPD"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default function Register() {
  const [img, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // Stocker l'URL de l'image Firebase
  const navigate = useNavigate(); // Utiliser useNavigate pour la redirection

  useEffect(() => {
    if (img) {
      uploadFile(img);
    }
  }, [img]);

  // Schéma de validation avec Yup
  const schema = yup.object().shape({
    firstName: yup.string().required("Prénom requis"),
    lastName: yup.string().required("Nom requis"),
    username: yup.string().required("Nom d'utilisateur requis"),
    city: yup.string().required("Nom de la ville requis"),
    state: yup.string().required("Nom du pays requis"),
    email: yup.string().email().required("L'email requis"),
    password: yup.string().required("Le mot de passe requis"),
    confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'Les mots de passe doivent correspondre').required("La confirmation du mot de passe est requise"),
    file: yup.mixed().required("Veuillez mettre une image"),
    terms: yup.bool().required().oneOf([true], 'Vous devez accepter les termes et conditions'),
  });

  // Fonction pour uploader le fichier sur Firebase dès qu'une image est sélectionnée
  const uploadFile = (file) => {
    const fileName = new Date().getTime() + "_" + file.name;
    const storageRef = ref(storage, "images/" + fileName); // Référence dans Firebase Storage
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        // Gestion des erreurs d'upload
        console.error("Erreur lors de l'upload :", error);
      },
      () => {
        // Upload réussi
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setImageUrl(downloadUrl); // Stocker l'URL de l'image
        });
      }
    );
  };

  // Fonction déclenchée lors de la soumission du formulaire
  const handleSubmit = async (values) => {
    const { firstName, lastName, username, city, state, email, password } = values;

    try {
      const response = await signup({
        firstName,
        lastName,
        username,
        city,
        state,
        email,
        password,
        avatarUrl: imageUrl, // URL de l'image téléchargée
      });

      if (response.message === "ACCOUNT_CREATED") {
        alert("Compte créé avec succès !");
        navigate('/login'); // Redirige vers la page login après succès
      } else {
        alert("Erreur lors de la création du compte :", response.message);
      }

    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  };

  return (
    <div>
      <Header />
      <Container style={{ backgroundColor: '#449973', width: '40%' }}>
        <Row className='justify-content-center mb-5 mt-5'>
          <Col md={6}>
            <div>
              <h1 className='text-center mb-4' style={{ fontSize: "2rem" }}>INSCRIPTION</h1>
              <Formik
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={{
                  firstName: '',
                  lastName: '',
                  username: '',
                  city: '',
                  state: '',
                  email: '',
                  password: '',
                  confirmpassword: '',
                  file: null,
                  terms: false,
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors, setFieldValue }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group as={Col} md="10" controlId="validationFormik101" className="position-relative">
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

                      <Form.Group as={Col} md="10" controlId="validationFormik102" className="position-relative">
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
                        <Form.Label>Nom d'utilisateur</Form.Label>
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
                      <Form.Group as={Col} md="10" controlId="validationFormik103" className="position-relative">
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

                      <Form.Group as={Col} md="10" controlId="validationFormik104" className="position-relative">
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

                      <Form.Group as={Col} md="10" controlId="validationFormik105" className="position-relative">
                        <Form.Label>Adresse Email</Form.Label>
                        <Form.Control
                          type="email"
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

                      <Form.Group as={Col} md="10" controlId="validationFormik105" className="position-relative">
                        <Form.Label>Mot de Passe</Form.Label>
                        <Form.Control
                          type="password"
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

                      <Form.Group as={Col} md="10" controlId="validationFormik105" className="position-relative">
                        <Form.Label>Confirmer le mot de passe</Form.Label>
                        <Form.Control
                          type="password"
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
                    </Row>

                    <Form.Group className="position-relative mb-3">
                      <Form.Label>Fichier</Form.Label>
                      <Form.Control
                        type="file"
                        required
                        accept="image/*"
                        name="file"
                        onChange={(event) => {
                          setFieldValue("file", event.currentTarget.files[0]);
                          setImage(event.currentTarget.files[0]); // Déclencher le téléchargement d'image
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
                        label="Accepter les termes et conditions"
                        onChange={handleChange}
                        isInvalid={!!errors.terms}
                        feedback={errors.terms}
                        feedbackType="invalid"
                        id="validationFormik106"
                        feedbackTooltip
                      />
                    </Form.Group>

                    <Button type="submit" className='mb-5' style={{ backgroundColor: "#334C37", border: "none" }}>
                      S'inscrire
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}


