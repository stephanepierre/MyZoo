import React from "react";
import { withFormik } from "formik"; /* pour envoyer formulaire */
import * as Yup from "yup"; /* pour vérifier les champs de formulaire */

const formulaire = (props) => (
  <>
    <form>
      <div className="form-group pb-2">
        <label htmlFor="nom">Nom : </label>
        <input
          type="text"
          className="form-control"
          id="nom"
          aria-describedby="nomHelp"
          placeholder="Votre nom"
          name="nom"
          onChange={props.handleChange}
          value={props.values.nom}
          onBlur={props.handleBlur}
        />
        {props.touched.nom && props.errors.nom && (
          <span style={{ color: "red" }}>{props.errors.nom}</span>
        )}
      </div>
      <div className="form-group pb-2">
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          className="form-control"
          id="email"
          aria-describedby="nomHelp"
          placeholder="Votre adresse mail"
          name="email"
          onChange={props.handleChange}
          value={props.values.email}
          onBlur={props.handleBlur}
        />
        {props.touched.email && props.errors.email && (
          <span style={{ color: "red" }}>{props.errors.email}</span>
        )}
      </div>
      <div className="form-group pb-2">
        <label htmlFor="message">Message :</label>
        <textarea
          className="form-control"
          id="message"
          rows="3"
          placeholder="Votre message"
          name="message"
          onChange={props.handleChange}
          value={props.values.message}
          onBlur={props.handleBlur}
        ></textarea>
      </div>
      {props.touched.message && props.errors.message && (
        <span style={{ color: "red" }}>{props.errors.message}</span>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        onClick={props.handleSubmit}
      >
        Envoyer
      </button>
    </form>
  </>
);

export default withFormik({
  mapPropsToValues: () => ({
    nom: "",
    email: "",
    message: "",
  }),
  validationSchema: Yup.object().shape({
    nom: Yup.string()
      .min(5, "le nom doit avoir plus de 5 caractères")
      .required("le nom est obligatoire"),
    email: Yup.string()
      .email("L'email n'a pas le bon format")
      .required("le mail est obligatoire"),
    message: Yup.string()
      .min(50, "le message doit avoir plus de 50 caractères")
      .max(200, "le message doit faire moins de 200 caractères"),
  }),
  handleSubmit: (values, { props }) => {
    const message = {
      nom: values.nom,
      email: values.email,
      contenu: values.message,
    };
    props.sendMail(message);
  },
})(formulaire);
