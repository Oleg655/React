import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from './components/uncontrolledAccordion/uncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className={'App'}>
            <Accordion title={'Menu'} collapsed={collapsed} onChange={() => {
                setCollapsed(!collapsed)
            }}/>
            <UncontrolledRating />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            <UncontrolledOnOff onChange={setSwitchOn}/>
        </div>
    )
}

export default App;


type PageTitleProsType = {
    title: string
}

function PageTitle(props: PageTitleProsType) {
    return <h3>props.title</h3>
}