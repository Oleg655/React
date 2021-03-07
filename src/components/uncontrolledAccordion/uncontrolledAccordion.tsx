import React, {useState} from "react";

export function UncontrolledAccordion(props: any) {

    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>
        {!collapsed && <AccordionBody/>}
    </div>


}

type AccordionTitlePT = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePT) {
    return <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
}

function AccordionBody(props: any) {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}