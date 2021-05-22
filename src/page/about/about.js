import React from 'react';
import AboutUsImg from './aboutUsImg.png'
import './about.css';
function About() {
    return (
        <div className="page">
            <section className="inside__about">
                <h3 className="documents__title">
                    О нас
                </h3>
                <img src={AboutUsImg} className='about__img' />
            </section>
            <section className="inside__about">

                <p className="about__text">
                    Первичная профсоюзная организация студентов СВФУ - самая крупная молодежная общественная организация Республики Саха (Якутия). В ее состав входят 18 профсоюзных организаций факультетов и институтов, 2 филиала в городах Нерюнгри и Мирный, 26 структурных подразделений, объединяющих в своих рядах тысячи студентов-активистов. В настоящее время она объединяет более 10 тысяч студентов, являющихся членами профсоюза.
                    <br />
                    <br />
                    ППОС поддерживает студенческие инициативы, представляет интересы студенчества, организует крупнейшие культурно-массовые и спортивно-оздоровительные мероприятия, организует санаторно-курортное лечение студентов, заселение в общежитие и многое другое.
                    <br />
                    <br />
                    Председатель ППОС СВФУ - Василий Анатольевич Попов.
                    <br />
                    <br />
                    Первичная профсоюзная организация  студентов Северо-Восточного федерального университета создана решением очередной профсоюзной конференции студентов на основании постановления и президиума рескома профсоюза работников народного образования и науки Республики Саха (Якутия).
                    <br />
                    <br />
                    ППОС - это незаменимый друг и товарищ студента, первостепенной задачей которого является защита социально-экономических, гражданских, законных прав и интересов студентов. А это означает, что ППОС призвана помогать студентам в решении конфликтных ситуаций, в разрешении сложных социальных и материальных вопросов. Профсоюзная организация студентов лоббирует интересы студенчества перед администрацией вуза и на других уровнях, например, путем заключения Соглашения между администрацией университета и ППОС СВФУ. Представители нашей организации входят в состав самых разных советов, дискуссионных собраний, принимают участие в обсуждении и принятии законодательных актов, касающихся студентов. И, несомненно, в создании и принятии всех нормативно-правовых актов СВФУ.
                    <br />
                    <br />s
                    ППОС СВФУ – мощнейшая молодежная организация, являющаяся органом самоуправления в Северо-Восточном федеральном университете, дающая возможность проявить себя, развить свои коммуникативные навыки, лидерские качества, организаторские способности, научиться выстраивать партнерские отношения, повысить правовую грамотность, защищать свои права. Ведь все инициативы в организации исходят от самих же студентов.

                </p>
            </section>
        </div>
    );
}

export default About;
