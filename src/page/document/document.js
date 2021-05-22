import React from 'react';
import './document.css';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Document() {
    return (
        <div className="page">
            <section className="inside__about">
                <h3 className="documents__title">
                    Докуметы
                </h3>
            </section>
            <section className="documents">
                <a className="document__link">
                    <div className="document">
                        <h6 className="document__title">Заявление на заселение</h6>
                        <FontAwesomeIcon className="document__img" icon={faFileDownload} />
                    </div>
                </a>
                <a className="document__link">
                    <div className="document">
                        <h6 className="document__title">Заявление на заселение</h6>
                        <FontAwesomeIcon className="document__img" icon={faFileDownload} />
                    </div>
                </a>
                <a className="document__link">
                    <div className="document">
                        <h6 className="document__title">Заявление на заселение</h6>
                        <FontAwesomeIcon className="document__img" icon={faFileDownload} />
                    </div>
                </a>
                <a className="document__link">
                    <div className="document">
                        <h6 className="document__title">Заявление на заселение</h6>
                        <FontAwesomeIcon className="document__img" icon={faFileDownload} />
                    </div>
                </a>
                <a className="document__link">
                    <div className="document">
                        <h6 className="document__title">Заявление на заселение</h6>
                        <FontAwesomeIcon className="document__img" icon={faFileDownload} />
                    </div>
                </a>
                <a className="document__link">
                    <div className="document">
                        <h6 className="document__title">Заявление на заселение</h6>
                        <FontAwesomeIcon className="document__img" icon={faFileDownload} />
                    </div>
                </a>
            </section>
        </div>
    );
}

export default Document;
