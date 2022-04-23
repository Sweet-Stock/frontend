import React from "react";
import OverviewCardDash from "../../components/OverviewCardDash";
import Confectionery from "../../images/Confectionery.svg";
import Paycheque from "../../images/Paycheque.svg";
import MoneyBox from "../../images/Money Box.svg";
import "./OverviewCards.css";

export default (props) => {
  return (
    <div className="overview-card-body">
      <OverviewCardDash
        imgSrc={Confectionery}
        title="Ingredientes próximos do fim"
        subTitle="Visualizar Ingredientes"
        amount={props.nearEndIngredients}
      />
      <OverviewCardDash
        imgSrc={MoneyBox}
        title="Produtos vendidos no mês"
        subTitle="Visualizar produtos"
        amount={props.productsSoldMonth}
      />
      <OverviewCardDash
        imgSrc={Confectionery}
        title="Ingredientes vencidos"
        subTitle="Visualizar Ingredientes"
        amount={props.expiredIngredients}
      />
      <OverviewCardDash
        imgSrc={Paycheque}
        title="Gastos Mensal"
        subTitle="Visualizar Gasto Mensal"
        amount={"R$ "+props.monthExpenses}
      />
    </div>
  );
};
