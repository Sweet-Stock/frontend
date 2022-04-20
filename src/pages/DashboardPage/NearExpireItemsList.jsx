import React from "react";
import IngredientDateDash from "../components/IngredientDateDash";
import "./NearExpireItemsList.css";

export default (props) => {
  const dashData = {
    cards: {
      nearEndIngredients: 38,
      productsSoldMonth: 50,
      expiredIngredients: 2,
      monthExpenses: 8.456,
    },
    chart: {
      january: 1900,
      february: 2000,
      march: 3000,
      april: 4000,
      may: 5000,
      june: 8000,
      july: 12300,
      august: 12000,
      september: 11000,
      october: 22000,
      november: 8000,
      december: 2000,
    },
    nearExpireIngredients: [
      {
        date: "30-04-2022",
        items: [
          {
            uuid: "6cba576a8-c01f-11ec-9d64-0242ac120002",
            name: "Leite condensado - Nestlé",
            quantity: 20,
          },
          {
            uuid: "6cb576a8-c01fa-11ec-9d64-0242ac120002",
            name: "Leite condensado - Nestlé",
            quantity: 20,
          },
          {
            uuid: "6cb5a76a8-c01f-11ec-9d64-0242ac120002",
            name: "Leite condensado - Nestlé",
            quantity: 20,
          },
          {
            uuid: "6cb57d6a8-c01f-11ec-9d64-0242ac120002",
            name: "Leite condensado - Nestlé",
            quantity: 20,
          },
        ],
      },
      {
        date: "01-05-2022",
        items: [
          {
            uuid: "6cb576a8-cd01f-11ec-9d64-0242ac120002",
            name: "Leite condensado - Nestlé",
            quantity: 20,
          },
          {
            uuid: "6cb576a8-c01f-11ezc-9d64-0242ac120002",
            name: "Leite condensado - Nestlé",
            quantity: 20,
          },
        ],
      },
      {
        date: "01-04-2022",
        items: [
          {
            uuid: "6cb576a8-c01fc-11ec-9d64-0242ac120002",
            name: "Leite condensado - Nestlé",
            quantity: 20,
          },
          {
            uuid: "6cb576a8-c01f-11ecv-9d64-0242ac120002",
            name: "Leite condensado - Nestlé",
            quantity: 20,
          },
        ],
      },
    ],
    nearEndIngredients: [
      {
        uuid: "6cb576a8-c01f-11ec-9d64-02z42ac120002",
        name: "Leite condensado - Nestlé",
        quantity: 20,
      },
      {
        uuid: "6cb576a8-c01f-11ec-9d64-0242acg120002",
        name: "Leite condensado - Nestlé",
        quantity: 20,
      },
      {
        uuid: "6cb576a8-c01f-11ec-9d64-0242ac12a0002",
        name: "Leite condensado - Nestlé",
        quantity: 20,
      },
      {
        uuid: "6cb576a8-c01f-11ec-9d64-0242ac1z20002",
        name: "Leite condensado - Nestlé",
        quantity: 20,
      },
    ],
  };
  return (
    <div className="near-expireItems-list-body">
        <h1>Ingredientes próximos do vencimento</h1>
      <div>
        {dashData.nearExpireIngredients.map((value) => (
          <IngredientDateDash key={value.date} data={value} />
        ))}
      </div>
    </div>
  );
};
