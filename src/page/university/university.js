import React from 'react';
import './university.css'

function University() {
    return (
        <div className="page">
            <section className="inside__about">
                <h3 className="documents__title">
                    Структура профсоюза института
            </h3>
            </section>
            <section className="ppos__inside inside">
                <p className="structure_text">
                    Структурные подразделения ППОС СВФУ создаются для качественной работы и успешной деятельности организации. Первичная профсоюзная организация студентов является самой крупной молодежной общественной организацией республики и охватывает более десятка тысяч человек. В связи с этим необходимо вести работу во многих отраслях студенческой общественной жизни для охвата наибольшего количества студентов.
                    <br /><br />
                    Существует различные комиссии, центры и клубы, где каждый студент может реализовать свой потенциал. В этих подразделениях собираются студенты со всех институтов и факультетов нашего университета, что позволяет им найти новых друзей и познакомиться с интересными людьми. Проводятся различные мероприятия не только университетского, но и городского, а также республиканского уровня.
                    <br /><br />
                    Также не стоит забывать, что профсоюз это не только культурно-массовые мероприятия и развлечение, но и большая ответственность, ведь речь зачастую идет о помощи студентам. Именно в профсоюзе человек учится брать ответственность на себя и работать не ради себя, а ради других. Ежедневно наши структурные подразделения проделывают огромный пласт работы для того, чтобы все студенты СВФУ чувствовали себя как дома.
                    </p>
                <img />
            </section>
            <section className="documents">
                <a href="/structure/commisiion" className="document__link">
                    <div className="document">
                        <h6 className="document__title">Комисии и клубы</h6>
                        <img />
                    </div>
                </a>
                <a href="/structure/commissions" className="document__link">
                    <div className="document">
                        <h6 className="document__title">Председатель и заместители</h6>
                        <img />
                    </div>
                </a>
                <a href="/structure/university" className="document__link">
                    <div className="document">
                        <h6 className="document__title">Посы институтов</h6>
                        <img />
                    </div>
                </a>
            </section>
        </div>
    );
}

export default University;
