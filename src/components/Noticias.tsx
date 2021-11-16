import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import './Noticias.css';

import axios from 'axios';

export default function Noticias() {
    const [dataNews, setNews] = useState <string>();

    useEffect(() => {
        axios.get('http://app-core-dev-brs-002.azurewebsites.net/noticias')
            .then((res) => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    })

    return (
    <div className="cards">
        <Card style={{ width: '750px' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>{dataNews}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
    )
}