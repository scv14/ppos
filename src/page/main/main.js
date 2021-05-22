import React from 'react';
import About from '../component/aboutPpos/aboutPpos'
import Header from '../component/header/header'
import News from '../component/news/news'
import Partner from '../component/partner/partner'
function Main() {
    return (
        <div className="App">
            <Header />
            <About />
            <News />
            <Partner />
        </div>
    );
}

export default Main;
