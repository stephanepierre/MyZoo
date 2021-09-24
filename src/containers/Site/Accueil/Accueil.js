import React, { Component } from 'react';
import TitreH1 from '../../../components/UI/titres/TitreH1';
import banderole from '../../../assets/image/banderole.png';
import logo from '../../../assets/image/logo.png';

class Accueil extends Component {
    componentDidMount = () => {
        document.title = "Parc d'animaux MyZoo"
    }

    render() {
        return (
            <div>
                <img src={banderole} alt="banderole" className="img-fluid" />
                <TitreH1>Venez visitez le parc MyZoo !!!</TitreH1>
                <div className="container">
                    <p>
                        Officia ipsum nostrud aute sunt commodo ex ut nostrud duis adipisicing ullamco nisi 
                        eiusmod officia. Occaecat esse nostrud eiusmod et nulla ea consequat elit proident 
                        voluptate nisi velit. Veniam ex ex ex occaecat fugiat eiusmod ullamco laboris voluptate 
                        voluptate cillum nisi quis. Voluptate culpa mollit consequat proident consequat ad 
                        tempor proident. Minim anim cillum magna fugiat aliqua incididunt ea magna.
                    </p>
                    <p>
                        Reprehenderit Lorem fugiat ex consectetur excepteur ad veniam et. Reprehenderit 
                        eu et adipisicing non reprehenderit occaecat mollit enim aliquip anim Lorem. 
                        Laborum eu ad amet non pariatur voluptate qui do mollit ullamco exercitation 
                        sunt ut. Est exercitation labore anim culpa elit labore.
                    </p>
                    <div className="row no-gutters align-items-center">
                        <div className="col-12 col-md-6">
                            <img src={logo} alt="logo du site" className="img-fluid"/>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                Excepteur consequat anim enim cillum dolore ex ut Lorem cupidatat. Eu 
                                laboris in laborum incididunt dolore occaecat reprehenderit pariatur sunt 
                                laboris. Est mollit non laboris minim consectetur qui excepteur est mollit 
                                incididunt laboris. Laborum laborum elit ex amet pariatur aliquip do nostrud 
                                reprehenderit adipisicing. Amet aute nisi culpa ut aliqua elit enim sit 
                                aute occaecat.
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                Incididunt esse velit esse cillum incididunt voluptate do. Veniam 
                                reprehenderit commodo amet tempor cillum ullamco nisi labore commodo 
                                elit dolor cillum. Consectetur aute officia non aliquip duis in officia 
                                esse aute consectetur enim reprehenderit exercitation.
                                Aute sunt aute anim voluptate velit culpa aliquip. Magna velit do do 
                                deserunt cillum in. Proident in consectetur laboris anim. Culpa sunt enim 
                                ea aliqua culpa ullamco velit reprehenderit. Et pariatur ipsum Lorem 
                                eiusmod ea cupidatat sint. Ex mollit laboris exercitation ullamco 
                                voluptate eu quis id ea qui sunt in.
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={logo} alt="logo du site" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Accueil;