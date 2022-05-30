import React, { useState } from "react";
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
  const [sla, setSla] = useState();

  const downloadTxtFile = async () => {
    await handle();
    const element = document.createElement("a");
    const file = new Blob(["dcfvgbhnjmkhdfdvgybdjhdbdusddgdhdahdh"], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };
  const handle = async () => {
    await api
      .get("/ingredients/arq-txt", config)
      .then((res) => setSla(res.data))
      .catch((error) => console.error(error));
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
        onClick={downloadTxtFile}
        imgSrc={Confectionery}
        title="Ingredientes vencidos"
        subTitle="Visualizar Ingredientes"
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
