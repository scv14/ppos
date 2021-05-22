import React from 'react';
import StructureImg from './structure.png';
import './structure.css'
import University from './university.png';
import President from './president.png';
import { BrowserRouter as Router } from 'react-router-dom';
import Commission from './commission.png';
function Structure() {
    return (
        <div className="page">
            <section className="inside__about">
                <h3 className="documents__title">
                    Структура ППОС
            </h3>
            </section>
            <section className="inside">
                <p className="structure_text">
                    Структурные подразделения ППОС СВФУ создаются для качественной работы и успешной деятельности организации. Первичная профсоюзная организация студентов является самой крупной молодежной общественной организацией республики и охватывает более десятка тысяч человек. В связи с этим необходимо вести работу во многих отраслях студенческой общественной жизни для охвата наибольшего количества студентов.
                    <br /><br />
                    Существует различные комиссии, центры и клубы, где каждый студент может реализовать свой потенциал. В этих подразделениях собираются студенты со всех институтов и факультетов нашего университета, что позволяет им найти новых друзей и познакомиться с интересными людьми. Проводятся различные мероприятия не только университетского, но и городского, а также республиканского уровня.
                    <br /><br />
                    Также не стоит забывать, что профсоюз это не только культурно-массовые мероприятия и развлечение, но и большая ответственность, ведь речь зачастую идет о помощи студентам. Именно в профсоюзе человек учится брать ответственность на себя и работать не ради себя, а ради других. Ежедневно наши структурные подразделения проделывают огромный пласт работы для того, чтобы все студенты СВФУ чувствовали себя как дома.
                    </p>
                <img src={StructureImg} />
            </section>
            <Router>
                <section className="documents">
                    <a href="/structure/commission" className="document__link">
                        <div className="document">
                            <h6 className="document__title">Комисии и клубы</h6>
                            <img src={Commission} />
                        </div>
                    </a>
                    <a href="/structure/president" className="document__link">
                        <div className="document">
                            <h6 className="document__title">Председатель и заместители</h6>
                            <img src={President} />
                        </div>
                    </a>
                    <a href="/structure/university" className="document__link">
                        <div className="document">
                            <h6 className="document__title">Посы институтов</h6>
                            <img src={University} />
                        </div>
                    </a>
                </section>
            </Router>
        </div>
    );
}

export default Structure;
