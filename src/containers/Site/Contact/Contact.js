import axios from "axios";
import React, { Component } from "react";
import TitreH1 from "../../../components/UI/titres/TitreH1";
import Formulaire from "./Formulaire/Formulaire";

class Contact extends Component {
  componentDidMount = () => {
    document.title = "Page de contact";
  };

  handleEnvoiMail = (message) => {
    axios
      .post("http://localhost/SERVEURANIMAUX/front/sendMessage", message)
      .then((reponse) => {
        console.log(reponse);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <>
        <TitreH1 bgColor="bg-success">Contactez nous !</TitreH1>
        <div className="container">
          <div className="text-center">
            <h2>adresse</h2>
            <h5>12 rue des licornes 68000 Colmar</h5>
          </div>

          <div className="text-center">
            <h2>Téléphone</h2>
            <h5>06 06 06 06 06</h5>
          </div>

          <h2>Vous préférez nous écrire ?</h2>
          <Formulaire sendMail={this.handleEnvoiMail} />
        </div>
      </>
    );
  }
}

export default Contact;
