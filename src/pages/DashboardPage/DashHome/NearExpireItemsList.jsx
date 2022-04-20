import React from "react";
import IngredientDateDash from "../../components/IngredientDateDash"
import "./NearExpireItemsList.css";

export default (props) => {
  
  return (
    <div className="near-expireItems-list-body">
        <h1>Ingredientes próximos do vencimento</h1>
      <div>
        {props.dashData.map((value) => (
          <IngredientDateDash key={value.date} data={value} />
        ))}
      </div>
    </div>
  );
};
