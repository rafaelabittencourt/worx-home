import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import axios from 'axios';

export default function Banner() {
    const [dataBanners, setBanner] = useState <string>();
    const [dataBanners1, setBanner1] = useState <string>();
    const [dataBanners2, setBanner2] = useState <string>();
        
    useEffect(() => {
        axios.get('http://app-core-dev-brs-002.azurewebsites.net/banners')    
            .then((res) => {
                setBanner(res.data[res.data.length -1].imagem);
                setBanner1(res.data[res.data.length -2].imagem);
                setBanner2(res.data[res.data.length -3].imagem);
            })
            .catch(err => {
                console.log(err);
            })
        })


    return(
        <>
            <Carousel className="box">
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={dataBanners}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={dataBanners1}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={dataBanners2}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
    </>
    );
}