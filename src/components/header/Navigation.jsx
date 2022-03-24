import React from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";
import SignOutButton from '../SignOut';
import { auth } from '../../firebase/firebase';
import cardDetails from '../CardDetails';
import Typography from '@material-ui/core/Typography';

function Navigation() {
    return (
        <div style={{position: "fixed", top: "0", width: "100%", zIndex: "99"}}>
          <Navbar className="header" collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand>
                <Link to={routes.LANDING}>
                    <Button id="mylogo">
                        <Typography variant="h5" color="inherit" noWrap>
                        Abja Network
                        </Typography>
                    </Button>
                </Link>
            </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <NavDropdown title={<Button>Features</Button>} id="collasible-nav-dropdown">
                    {
                      cardDetails.map(oneCard => <NavDropdown.Item>
                        <Link to={'/card/' + oneCard.url} style={{ color: 'black', textDecoration: 'none' }}>
                          {oneCard.title}
                        </Link>
                      </NavDropdown.Item> )
                    }
                  </NavDropdown>
                  <Nav.Link href='#ourfooter'>
                    <Button>Feedback</Button>
                  </Nav.Link>
                  <Nav.Link href="#about">
                    <Button>About Us</Button>
                  </Nav.Link>
                </Nav>
                {
                  auth.currentUser === null ?(
                  <Nav>
                    <Nav.Link>
                      <Link to={routes.SIGN_IN} style={{color: "white"}} >
                        <Button>SignIn/SignUp</Button>
                        </Link>
                    </Nav.Link>
                  </Nav>):
                  (<Nav>
                    <Nav.Link>
                      <Link to={routes.ACCOUNT} style={{color: "white"}}>
                        <Button>Profile</Button>
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <SignOutButton />
                    </Nav.Link>
                  </Nav>
                  ) 
                }                
              </Navbar.Collapse>
          </Navbar>
        </div>
    )
}

export default Navigation;
