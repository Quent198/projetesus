// Importez les bibliothèques et modules nécessaires
const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const api_url = "http://localhost:5000/api/";

chai.use(chaiHttp);
chai.should();

describe("BACKEND UNITS TESTS", () => {
  let userId;
  let jwtToken;
  const user = {
    username: "CRUDTest",
    email: "crudtest@crudtest.com",
    password: "crudtest",
    newsletter: true,
  };

  describe("API USERS", () => {
    it("[CREATE] Inscription d'un nouvel utilisateur", (done) => {
      chai
        .request(api_url)
        .post("users/signup")
        .send({
          username: user.username,
          email: user.email,
          password: user.password,
          newsletter: user.newsletter,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("ACCOUNT_CREATED");
          done();
        });
    });

    it("[READ] Connexion d'un nouvel utilisateur (via nom d'utilisateur)", (done) => {
      chai
        .request(api_url)
        .post("users/signin")
        .send({
          emailUsername: user.username,
          password: user.password,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("LOGIN_SUCCESS");

          jwtToken = res.headers["set-cookie"][0].split(";")[0].split("=")[1];
          userId = res.body.user._id;

          done();
        });
    });

    it("[READ] Connexion d'un nouvel utilisateur (via e-mail)", (done) => {
      chai
        .request(api_url)
        .post("users/signin")
        .send({
          emailUsername: user.email,
          password: user.password,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("LOGIN_SUCCESS");
          jwtToken = res.headers["set-cookie"][0].split(";")[0].split("=")[1];
          userId = res.body.user._id;
          done();
        });
    });

    it("[UPDATE] Modification du profil", (done) => {
      chai
        .request(api_url)
        .post("users/editProfile")
        .set("Cookie", `jwt=${jwtToken}`)
        .send({
          username: "CRUDTEST_username",
          bio: "Modification de la bio",
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("PROFIL_EDITED");
          done();
        });
    });
  });

  describe("API ADMIN", () => {
    it("[DELETE] Suppression d'un utilisateur", (done) => {
      chai
        .request(api_url)
        .post("admin/deleteUser")
        .send({
          adminPassword: "emaki",
          userId: userId,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("DELETE_USER_SUCCESS");
          done();
        });
    });
  });
});
