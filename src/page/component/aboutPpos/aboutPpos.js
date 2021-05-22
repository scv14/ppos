import React from 'react';
import './aboutPpos.css'
import Chairman from './chairman.png';

function AboutPpos() {
    return (
        <div className="App">
            <div id="chairman" className="chairman block">
                <h4 className="title">Председатель ППОС СВФУ</h4>
                <section className="chairman__inside inside">
                    <img src={Chairman} alt="Председатель" className="chairman__img" />
                    <p className=" description">
                        Председатель ППОС СВФУ - Василий Анатольевич Попов.
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Enim, assumenda cupiditate possimus odio sunt saepe?
                    </p>
                </section>
            </div>
            <div id="ppos" className="ppos block">
                <h4 className="title">ППОС ЭТО</h4>
                <section className="ppos__inside inside">
                    <p className="ppos__description description">
                        Первичная профсоюзная организация студентов СВФУ - самая крупная молодежная общественная организация
                        Республики Саха (Якутия). <br /><br />
                        В настоящее время она объединяет более 10 тысяч студентов, являющихся членами
                        профсоюза.<br /><br />
                        ППОС поддерживает студенческие инициативы, представляет интересы студенчества, организует крупнейшие
                        культурно-массовые и спортивно-оздоровительные мероприятия, организует санаторно-курортное лечение
                        студентов, заселение в общежитие и многое другое.
                    </p>
                    <iframe width="45%" height="360" src="https://www.youtube.com/embed/x1-44HZY08k" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </section>
            </div>
        </div>
    );
}

export default AboutPpos;
