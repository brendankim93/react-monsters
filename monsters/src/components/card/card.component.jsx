import React from "react";
import "./card.styles.css";
import { Info } from "../info/info.component"

export const Card = (props) => {
    return (
        <div className='card-container'>
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
            <Info handleClose={props.handleClose} monster={props.monster} isOpen={props.isOpen} handleClick={props.handleClick} />
        </div>
    )  
}
