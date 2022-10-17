import React from "react";
import IngredientCardDash from "../../../components/ingredient_card_dashboard/IngredientCardDash";
import "./NearEndIngredients.css";

export default (props) => {
  return (
    <div className="near-end-items-list-body">
      <h1>Ingredientes próximos do fim</h1>
      <div>
        {props.dashData?.map((value) => (
          <IngredientCardDash
            key={value.uuid}
            cardAmount={value.amount}
            cardTitle={value.name}
          />
        ))}
      </div>
    </div>
  );
};
