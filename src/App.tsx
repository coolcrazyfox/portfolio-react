import React, {useContext} from 'react';
import './App.css';
import {Header} from "./header/Header";
import { Main } from './main/Main';
import {Skills} from "./skills/Skills";
import { Projects } from './projects/Projects';
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {Hire} from "./hire/Hire";
import DotRing from "./components/DotRing/DotRing";
import {MouseContext} from "./context/MouseContext";

function App() {
    // let { cursorType, cursorChangeHandler } = useContext(MouseContext);
    return (
        <div className="App">
            <DotRing />
            {/*<div className="container">*/}
            {/*    <div*/}
            {/*        onMouseEnter={() => cursorChangeHandler("hovered")}*/}
            {/*        onMouseLeave={() => cursorChangeHandler("")}*/}
            {/*    >*/}
            {/*        <h1>Hover over me</h1>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="container" style={{ background: "peachpuff" }}></div>*/}
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Hire/>
            <Contacts/>
            <Footer/>

        </div>
    );
}

export default App;
