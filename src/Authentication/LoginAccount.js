import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHands } from '@fortawesome/free-solid-svg-icons';

const LoginAccount = () => {
    return (
        <Container fluid className="vh-100 d-flex align-items-center">
            <Row className="h-100 w-100">
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/logo1.png`}
                        alt="Logo"
                        style={{ maxWidth: '400px', maxHeight: '400px' }}
                    />
                </Col>
                <Col
                    md={6}
                    className="d-flex flex-column justify-content-center align-items-center px-4 form-container"
                    style={{ backgroundColor: '#E5DCFC', height: '80%', marginTop: '90px', borderRadius: '20px' }}
                >
                    <h2 className="mb-3 text-center pb-5" style={{ marginTop: '30px', fontWeight: 'bold', color: '#661599', fontSize: '40px' }}>
                        Selamat Datang <FontAwesomeIcon icon={faHands} style={{ color: "#3a0b75" }} />
                    </h2>
                    <Form className="w-100">
                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label className="text-purple">E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Masukkan E-mail" />
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label className="text-purple">Kata Sandi</Form.Label>
                            <Form.Control type="password" placeholder="Masukkan Kata Sandi" />
                        </Form.Group>
                        <div className="mt-1 text-end pb-4"> 
                            <a
                                href="/login"
                                style={{ textDecoration: 'none' }}
                            >
                                Lupa Kata Sandi
                            </a>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Button
                                type="submit"
                                className="px-4 py-3 w-75"
                                style={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    borderRadius: '20px',
                                    backgroundColor: '#6f2c91',
                                    color: 'white',
                                    border: 'none'
                                }}
                            >
                                Masuk
                            </Button>
                        </div>
                        <div className="mt-1 text-center pt-3">
                            <p>Belum Punya Akun? <a href="/" className='text-purple' style={{fontWeight:'bold'}}>Daftar</a></p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginAccount;
