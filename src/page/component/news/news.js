import React from 'react';
import Imko from './Rectangle 28.png';
import './news.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
function News() {

    return (
        <div className="App">
            <div id="news" className="news block">
                <h4 className="title">Новости</h4>
                <section className="news__inside inside">
                    <div className="arrow">
                        <div className="arrow__inside fa-angle-left">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                        <div className="arrow__inside">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                    <div className="news__items">
                        <div className="news__item">
                            <img src={Imko} className="news__img" alt="Новости" />
                            <h6 className="news__title">Вчера прошеул мероприятия START IT ИМКО</h6>
                        </div>
                        <div className="news__item">
                            <img src={Imko} className="news__img" alt="Новости" />
                            <h6 className="news__title">Вчера прошеул мероприятия START IT ИМКО</h6>
                        </div>
                        <div className="news__item">
                            <img src={Imko} className="news__img" alt="Новости" />
                            <h6 className="news__title">Вчера прошеул мероприятия START IT ИМКО</h6>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default News;