import React from "react";
import Bouton from "../../../../components/UI/Bouton/Bouton";

const animal = (props) => (
  <>
    <div className="card mb-3">
      <h3 className="card-header">
        {props.id} - {props.nom}
      </h3>
      <div className="card-body">
        <p className="card-text">{props.description}</p>
      </div>
      <div style={{ height: "100px" }} className="text-center">
        <img src={props.image} alt={props.nom} className="img-fluid h-100" />
      </div>
      <div className="card-body">
        <h3>
          Famille :
          {/* au clic sur le bouton, ça appelle dans application.js filtreFamille qui appelle idFamille */}
          <Bouton typeBtn="btn-dark" clic = {() => props.filtreFamille(props.famille.idFamille)} >
            {props.famille.libelleFamille.toUpperCase()}
          </Bouton>
        </h3>
        <div>{props.famille.descriptionFamille}</div>
      </div>
      <div className="card-body">
        <h3>Continents : </h3>
        {props.continents.map((continent) => {
          let colorBtn = "";
          switch (continent.idContinent) {
            case "1":
              colorBtn = "btn-primary";
              break;
            case "2":
              colorBtn = "btn-danger";
              break;
            case "3":
              colorBtn = "btn-warning";
              break;
            case "4":
              colorBtn = "btn-success";
              break;
            case "5":
              colorBtn = "btn-info";
              break;
            default:
              colorBtn = "btn-secondary";
          }
          return (
                //au clic sur le bouton, ça appelle dans application.js filtreContinent qui appelle idContinent
            <Bouton 
              typeBtn={colorBtn} 
              css="m-1" 
              key={continent.idContinent}
              clic ={() => props.filtreContinent(continent.idContinent)}>
              {continent.libelleContinent}
            </Bouton>
          );
        })}
      </div>
    </div>
  </>
);

export default animal;
