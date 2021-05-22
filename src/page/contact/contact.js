
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './contact.css';
function Contact() {
    return (
        <div className="page">
            <section className="inside__about">
                <h3 className="documents__title">
                    Контакты
                </h3>
            </section>
            <section class=" inside">
                <div class="info">
                    <ul class="info__list">
                        <li class="info__list__item"><a href="tel:89124243223"> Номер: +7 (412) 35-25-61.</a></li>
                        <li class="info__list__item"><a href="https://go.2gis.com/5ef2n"> Адрес: г. Якутск ул. Белинского,
                    58, каб. 308, 309.</a></li>
                        <li class="info__list__item"> Расписание: По будням 09:00 - 18:00. обед 13:00 -14:00.</li>
                        <li class="info__list__item"> Суббота, воскресенье - выходной.</li>

                    </ul>
                    <a href="https://vk.com/ppossvfu">
                        <FontAwesomeIcon icon={faVk} />
                    </a>
                    <a href="https://www.instagram.com/ppossvfu/?hl=ru">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://twitter.com/PPOSSVFU">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A82a8303f69ce57b24fbc9c3f886fbcf4978a556986e9820c72777c4d304b8a38&amp;source=constructor"
                    width="500" height="400" frameborder="0"></iframe>
            </section>
        </div>
    );
}

export default Contact;
