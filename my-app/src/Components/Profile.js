import API from '../API';
import { useState, useEffect } from 'react';
import { Table, Row, Col, ListGroup, Spinner, Card, Modal, Button } from 'react-bootstrap';
import { PersonCircle, GeoAltFill, MapFill, WalletFill } from 'react-bootstrap-icons';
import "./ClientView.css";

function Profile(props) {
    const [loggedClient, setloggedClient] = useState([]);
    const [loggedClientUpdated, setloggedClientUpdated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [wallet, setWallet] = useState({ Wallet: 0, Money: 0 });
    const [walletUpdated, setWalletUpdated] = useState(false);
    const [modalShow, setModalShow] = useState(false);


    useEffect(() => {
        setLoading(true);
        API.getClient()
            .then(client => {
                setloggedClient(client);
                setloggedClientUpdated(true);
                checkWallet(client);
                setLoading(false);
            })
            .catch(c => handleErrors(c));
    }, []);

    const checkWallet = (client) => {
        try {
            API.clientCheck({ ClientID: client.UserID })
                .then(w => {
                    setWallet(w);
                    setWalletUpdated(true);
                    if (w.Wallet - w.Money <= 0) {
                        setModalShow(true);
                    }
                })
        } catch (err) {
            handleErrors(err);
        }
    }

    const handleErrors = (err) => {
        console.log(err);
    }

    return (
        <>
            {loading ? <> <Row className="justify-content-center mt-5">
                < Spinner animation="border" size="xl" variant="secondary" />
            </Row > </> :
                <>
                    <Col className="mt-3">
                        <Table className="d-flex justify-content-center">
                            <tbody id="client-table" align="center">
                                <ClientRow wallet={wallet} client={loggedClient} />
                            </tbody>
                        </Table>
                    </Col>

                    <InsufficientWallet wallet={wallet} show={modalShow} onHide={() => setModalShow(false)} />

                </>
            }
        </>
    );
}

function ClientRow(props) {

    return (
        <>
            <Card className="client-card mt-3">

                <Card.Body>
                    <Row>
                        <Col md={4}>
                            <PersonCircle size={60} style={{ marginBottom: '6px', marginRight: '5px' }} />
                        </Col>
                        <Col md={8}>
                            <Card.Title style={{ fontSize: 28 }}> {props.client.Name} {props.client.Surname} </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{props.client.Email}</Card.Subtitle>
                        </Col>
                    </Row>
                </Card.Body>


                <Card.Body>
                    <ListGroup style={{ textAlign: "left" }}>
                        <ListGroup.Item><GeoAltFill /> Address: {props.client.Address}</ListGroup.Item>
                        <ListGroup.Item><MapFill /> City: {props.client.City}, {props.client.State}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>

                <Card.Body className="sfondo-footer" style={{ textAlign: "right" }}> <WalletFill />Wallet balance: €{props.client.Wallet}</Card.Body>
            </Card>
        </>
    );
}

function InsufficientWallet(props) {

    return (
        <Modal show={props.show} onHide={props.onHide} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ⚠️Wallet information
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>The total of your "open" orders exceeds your wallet by {(props.wallet.Money - props.wallet.Wallet).toFixed(2)}€.</Modal.Body>
            <Modal.Body>Please top up your wallet!</Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Profile;
