import { Row, Col, Spinner } from 'react-bootstrap';

function Loader() {
    return (
        <Row className='m-2 p-2'>
            <Col className='d-flex justify-content-around align-items-center'>
                <Spinner animation="grow" />
                <Spinner animation="grow" />
                <Spinner animation="grow" />
            </Col></Row>
    );
}

export default Loader;