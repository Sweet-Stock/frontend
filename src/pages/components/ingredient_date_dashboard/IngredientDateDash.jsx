import React from "react";
import IngredientCardDash from "../ingredient_card_dashboard/IngredientCardDash";
import "./IngredientDateDash.css"

export default props => {
    return(
       <div className="ingredient-date-body">
           <h1>{props.data.date}</h1>
            <ul>
            {props.data.items.map((value) => (
            <IngredientCardDash key={value.uuid} cardTitle={value.name} cardAmount={value.amount}/>
          ))}
            </ul>
       </div> 
    )
}