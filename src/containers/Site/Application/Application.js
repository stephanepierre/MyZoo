import React, { Component } from "react";
import TitreH1 from "../../../components/UI/titres/TitreH1";
import axios from "axios";
import Animal from "./Animal/Animal";

class Application extends Component {
  //pour récupérer les données du serveur(utiliser axios en même temps)
  state = {
    animaux: null,
  }

  componentDidMount = () => {
    axios.get(`http://localhost/SERVEURANIMAUX/front/animaux`)      //mettre url denotre site
        .then(reponse => {
            this.setState({animaux:Object.values(reponse.data)});
        })
}

//fin récup données

  render() {
    return (
      <>
        <TitreH1 bgColor="bg-success">Les animaux du parc</TitreH1>
        <div className="container-fluid">
            <div className="row no-gutters">            
            {
                this.state.animaux &&                                   //si le state de animaux est bien présent
                this.state.animaux.map(animal => {                      //récupère l'id et le nom des animaux
                    return (
                        <div className="col-12 col-md-6 col-xl-4" key={animal.id}>
                            <Animal {...animal} />                     
                        </div> 
                    )        
                })
            }
            </div>
        </div>
      </>
    );
  }
}

export default Application;
