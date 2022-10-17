import React from "react";
import IngredientDateDash from "../../../components/ingredient_date_dashboard/IngredientDateDash";
import "./NearExpireItemsList.css";

export default (props) => {
  return (
    <div className="near-expire-items-list-body">
      <h1>Ingredientes próximos do vencimento</h1>
      <div>
        {props.dashData?.map((value) => (
          <IngredientDateDash key={value.date} data={value} />
        ))}
      </div>
    </div>
  );
};
