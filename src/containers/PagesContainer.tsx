import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function PagesContainer({ children }: { children: JSX.Element }) {
    return (
        <Container className='mt-4'>
            <Navbar className="mb-5 rounded">
                <Container>
                    <Nav className="ms-0">
                        <Nav.Link>
                            <Link to={'/'} className="nav-link"> Your Newz </Link>
                        </Nav.Link>
                    </Nav>
                    <Nav className="me-0">
                        <Nav.Link>
                            <Link to={'/bookmarks'} className="nav-link">
                                Bookmarks  <i className='fa fa-bookmark'> </i>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {children}
        </Container>
    );
}

export default PagesContainer;