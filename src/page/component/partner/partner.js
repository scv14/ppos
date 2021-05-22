import React from 'react';
import Touchka from './image 5.png';
import Nefu from './svfu-ammosova-logo 1.png';
import WSR from './wsrlogo-01 1.png';
import './partner.css'
function Partner() {
    return (
        <div className="App">
            <div className="partner block">
                <h4 className="title">Партнер</h4>
                <section className="partner__inside inside">
                    <a href="https://leader-id.ru/places"><img src={Touchka} alt="точка кипения" /></a>
                    <a href="https://www.s-vfu.ru/"><img src={Nefu} alt="СВФУ" /></a>
                    <a href="https://worldskills.ru/"><img src={WSR} alt="world skills" /></a>
                </section>
            </div>
        </div>
    );
}

export default Partner;
