import React, { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const Api = ({ showModal, birdy, filteredBirds, dataOfApi, page }) => {
    
    /* 
    showModal: function to show the modal
    birdy: function to set the bird
    filteredBirds: array of birds
    dataOfApi: function to set the data 
    page: number of page
    */

    useEffect(() => {
        const consultarApi = async () => {
            try {
                const response = await fetch("https://aves.ninjas.cl/api/birds");
                const data = await response.json();
                dataOfApi(data)
            } catch (error) {
                console.log(error)
            }
        };
        consultarApi();
    }, []);

    const handleClick = (e) => {
        const bird = e.target.value;
        showModal(true)
        birdy(bird)
    }

    const spliced = [...filteredBirds].splice((page-1)*10,10)
    
    return (
        <>
            <Row xs={1} md={5} className="g-4">
                {spliced.map((bird) => (
                    <Col key={bird.sort}>
                        <Card className="tarjeta">
                            <Card.Img variant="top" src={bird.images.main} />
                            <Card.Body className="card-body">
                                <Card.Title className="titulo-card"><center>{bird.name.spanish}</center></Card.Title>
                                <Button variant="primary" onClick={handleClick} value={bird.uid} className="btn">
                                    Ver más
                                </Button>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Api;