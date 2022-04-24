import React from "react";
import ImportantIcon from "../../images/Box Important.svg"
import "./IngredientCardDash.css"

export default props =>{
    return(
        <li className="ingredient-card-body">
            <img src={ImportantIcon} alt="" />
            <div className="ingredient-card-aligner">
                <h1 className="card-title">{props.cardTitle}</h1>
                <h2 className="card-amount">quantidade: {props.cardAmount}</h2>
            </div>
        </li>
    )
}