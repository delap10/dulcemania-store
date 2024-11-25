import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';

const NavigationBar = (): JSX.Element => {
    return (
        <header>
            <div>
                <img src={'navigationbar/dulcemania-banner.png'} alt='Dulcemania' />
            </div>
            <Navbar
                collapseOnSelect
                expand="lg"
                className="bg-body-tertiary"
                style={{fontSize: 25}}
            >
                <Container>
                    <Navbar.Brand href="/" title='Home' style={{fontSize: 35}}>家</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/aboutus">About Us</Nav.Link>
                            <Nav.Link href="/store">Store</Nav.Link>
                            <NavDropdown title="Our work" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
                                <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href='/contact'>Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Sign</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default NavigationBar;