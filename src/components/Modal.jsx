import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css'

function MyModal({ show, onHide, bird }) {
    /*
    show: boolean to show the modal
    onHide: function to hide the modal
    bird: name of the bird
    */
    const [dataBird, setDataBird] = useState([]);

    useEffect(() => {
        const consultarApi = async () => {
            try {
                const response = await fetch(`https://aves.ninjas.cl/api/birds/${bird}`);
                const data = await response.json();
                setDataBird(data);
            } catch (error) {
                console.log(error)
            }

        };
        consultarApi();
    }, [bird])

    return (

        <Modal
            show={show}
            onHide={onHide}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className='bird-name'>
                    <h1 >{dataBird.name?.spanish}
                    </h1>
                    <span><i className='cursiva'>{dataBird.name?.latin}</i></span>
                </Modal.Title>
            </Modal.Header>
            <img src={dataBird.images?.main} alt="foto" />
            {dataBird.habitat == "" ? null : <Modal.Body>
                <h2>Hábitat</h2>
                <p>
                    {dataBird.habitat}
                </p>
            </Modal.Body>}
            {dataBird.map == "" ? null : <Modal.Body>
                <h3>¿Sabías qué?</h3>
                <p>
                    {dataBird.didyouknow}
                </p>
            </Modal.Body>}
            {dataBird.map == "" ? null : <Modal.Body className='mapa'>
                <h3>Donde verlo</h3>
                <p>
                    {dataBird.map?.title}
                </p>
                <img className='img-mapa' src={dataBird.map?.image} alt="mapa" />

            </Modal.Body>}
            <Modal.Footer>
                <Button onClick={onHide} className='btn'>Cerrar</Button>
            </Modal.Footer>
        </Modal>

    );
}

export default MyModal;