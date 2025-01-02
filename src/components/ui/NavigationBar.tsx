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
                style={{fontSize: 20}}
            >
                <Container>
                    <Navbar.Brand href="/" title='Inicio' style={{fontSize: 30}}>家</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/aboutus">Sobre nosotros</Nav.Link>
                            <Nav.Link href="/store">Productos</Nav.Link>
                            <NavDropdown title="Comunidad" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
                                <NavDropdown.Item href="/gallery">Galería</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Aventuras
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href='/contact'>Contáctanos</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Registrarse</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Iniciar sesión
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default NavigationBar;
