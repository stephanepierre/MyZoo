//gere les pages du site web
import React, { Component } from 'react';
import NavBar from "../../components/UI/NavBar/NavBar";
import {Route, Switch} from "react-router-dom";
import Accueil from './Accueil/Accueil';
import Error from '../../components/Error/Error';
import Footer from '../../components/Footer/Footer';

class Site extends Component {
    render() { 
        return (
            <>
                <div className="site">
                    <NavBar />
                    <Switch>
                        <Route path="/" exact render={() => <Accueil />} />
                        <Route path="/contact" exact render={() => <h1>contact</h1>} />
                        <Route render={() => <h2><Error type="404">La page n'existe pas</Error></h2>} />
                    </Switch>
                    <div className="minSite"></div>     {/* permet de garder le footer toujours en bas */}
                </div>
                <Footer />
            </>
        )
    }
}
 
export default Site;