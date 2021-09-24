import React from "react";
import facebook from "../../assets/image/footer/fb.png";
import twitter from "../../assets/image/footer/twitter.png";
import youtube from "../../assets/image/footer/youtube.png";
import { NavLink } from "react-router-dom";
import classes from "./Footer.module.css";

const footer = (props) => (
  <>
    <footer className="bg-primary">
      <div className="text-white text-center">MyZoo - tous droits réservés</div>
      <div className="row no-gutters align-items-center text-center pt-2">
        <div className="col-3">
          <a
            href="https://www.facebook.com"
            className="d-block"
            target="_blank"
          >
            <img src={facebook} alt="logo facebook" className="imgFB" />
          </a>
        </div>
        <div className="col-3">
          <a href="https://www.twitter.com" className="d-block" target="_blank">
            <img src={twitter} alt="logo twitter" className="imgTwitter" />
          </a>
        </div>
        <div className="col-3">
          <a href="https://www.youtube.com" className="d-block" target="_blank">
            <img src={youtube} alt="logo youtube" className="imgYoutube" />
          </a>
        </div>
        <div className="col-3">
          <NavLink
            to="/mentionLegales"
            className={["nav-link", "p-0", "m-0", classes.p_footerLink].join(
              " "
            )}
          >
            Mentions légales
          </NavLink>
          <a
            href="mailto:contact@myzoo.com"
            className={["nav-link", "p-0", "m-0", classes.p_footerLink].join(
              " "
            )}
          >
            contact@myzoo.com
          </a>
        </div>
      </div>
    </footer>
  </>
);

export default footer;
