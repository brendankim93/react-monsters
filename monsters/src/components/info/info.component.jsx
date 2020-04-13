import React from "react";
import './info.styles.css';

export const Info = props => {
    if (props.isOpen === true) {
        return (
            <div>
            <div className="info-container">
                    <h4>Username:</h4>
                    <p>{props.monster.username}</p>
                    <h4>Street Address:</h4>
                    <p>{props.monster.address.suite} {props.monster.address.street}</p>
                    <h4>City:</h4>
                    <p>{props.monster.address.city}</p>
                    <h4>Zip:</h4>
                    <p>{props.monster.address.zipcode}</p>
                    <h4>Phone:</h4>
                    <p>{props.monster.phone}</p>
                    <h4>Company</h4>
                    <p>{props.monster.company.name}</p>
                    <h4>Website:</h4>
                    <p>{props.monster.website}</p>
            </div>
            <div>
                    <p className="action-text" onClick={props.handleClose}><u>less info</u></p>
            </div>
            </div>
        )
    } else {
        return (
            <div>
                <p className="action-text" onClick={props.handleClick}><u>more info</u></p>
            </div>
        )
    }
}