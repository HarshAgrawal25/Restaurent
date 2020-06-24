import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends Component {
    render() { 
        return (
            <> 
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Restaurent</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                        <div className="container">
                            <div className="row row-header">
                                <div className="col-12 col-sm-6">
                                    <h1>Ristorante Con Fusion</h1>
                                    <p>We take inspiration form World's best cuisines,and create a unique fusion experience.Our lipsmacking creations will tickel your culinary sense! </p>
                                </div>
                            </div>
                        </div>
                </Jumbotron>
            </>
         );
    }
}
 
export default Header;