import React from 'react';
import './App.css';
import {Header} from './header/header';
import {Main} from './mainBlocks/Main';
import {Footer} from './footer/Footer';
import DotRing from "./components/DotRing/DotRing";
import {Preloader} from './mainBlocks/Contacts/Preloader/Preloader';

function App() {
    return (<>
            <DotRing />
            {/*<Header/>*/}
            <Main/>
            <Footer/>
        </>
    );
}

export default App;
