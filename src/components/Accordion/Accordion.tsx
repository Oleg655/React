import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {
   return  <div>
       <AccordionTitle title={props.title} onChange={props.onChange}/>
       {!props.collapsed && <AccordionBody/>}
   </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange:  () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onChange}>{props.title}</h3>
}

function AccordionBody(props: any) {
    return <ul>
        <li>{props.body}</li>
        <li>{props.body}</li>
        <li>{props.body}</li>
    </ul>
}