import React from "react";
import OverviewCardDash from "../../../components/overview_card_dashboard/OverviewCardDash";
import Confectionery from "../../../images/Confectionery.svg";
import Paycheque from "../../../images/Paycheque.svg";
import MoneyBox from "../../../images/Money Box.svg";
import "./OverviewCards.css";
import api from "../../../../services/api";

export default (props) => {
  const config = {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("data")).token,
    },
  };

  const handle = () => {
    api
      .get("/ingredients/arq-txt", config)
      .then(async (res) => {
        let blob = new Blob([res.data], { type: "text/plain" });
        let link = document.createElement("a");
        link.href = await URL.createObjectURL(blob);
        link.download = "ingredientes_vencidos.txt";
        link.click();
        URL.revokeObjectURL(link.href);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="overview-card-body">
      <OverviewCardDash
        imgSrc={Confectionery}
        title="Ingredientes próximos do fim"
        amount={props.nearEndIngredients}
      />
      <OverviewCardDash
        imgSrc={MoneyBox}
        title="Produtos vendidos no mês"
        amount={props.productsSoldMonth}
      />
      <OverviewCardDash
        onClick={handle}
        imgSrc={Confectionery}
        title="Ingredientes vencidos"
        subTitle="Download"
        amount={props.expiredIngredients}
      />
      <OverviewCardDash
        imgSrc={Paycheque}
        title="Gastos Mensal"
        amount={"R$ " + props.monthExpenses?.toFixed(2)}
      />
    </div>
  );
};
