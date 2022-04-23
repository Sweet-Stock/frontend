import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NearExpireItemsList from "./DashHome/NearExpireItemsList";
import MoneyChart from "./DashHome/MoneyChart";
import NearEndIngredients from "./DashHome/NearEndIngredients";
import OverviewCards from "./DashHome/OverviewCards";
import api from "../../services/api";
import "./DashBoardHome.css";

export default (props) => {
  const [data, setData] = React.useState({
    cards: {
      nearEndIngredients: 38,
      productsSoldMonth: 50,
      expiredIngredients: 2,
      monthExpenses: 8.44,
    },
    chart: [
      {
        month: "janeiro",
        profit: 2000,
        spent: 1000,
      },
      {
        month: "janeiro",
        profit: 2000,
        spent: 1000,
      },
      {
        month: "janeiro",
        profit: 2000,
        spent: 1000,
      },
      {
        month: "janeiro",
        profit: 2000,
        spent: 1000,
      },
      {
        month: "janeiro",
        profit: 2000,
        spent: 1000,
      },
      {
        month: "janeiro",
        profit: 2000,
        spent: 1000,
      },
      {
        month: "janeiro",
        profit: 2000,
        spent: 1000,
      },
      {
        month: "janeiro",
        profit: 2000,
        spent: 1000,
      },
    ],
    nearExpireIngredients: [
      {
        date: "30-04-2022",
        items: [
          {
            uuid: "6cba576a8-c01f-11ec-9d64-0242ac120002",
            name: "Leite condensado - Nestlé",
            amount: 20,
          },
          {
            uuid: "6cb576a8-c01fa-11ec-9d64-0242ac120002",
            name: "Leite condensado - Nestlé",
            amount: 20,
          },
          {
            uuid: "6cb5a76a8-c01f-11ec-9d64-0242ac120002",
            name: "Leite condensado - Nestlé",
            amount: 20,
          },
          {
            uuid: "6cb57d6a8-c01f-11ec-9d64-0242ac120002",
            name: "Leite condensado - Nestlé",
            amount: 20,
          },
        ],
      },
      {
        date: "01-05-2022",
        items: [
          {
            uuid: "6cb576a8-cd01f-11ec-9d64-0242ac120002",
            name: "Leite condensado - Nestlé",
            amount: 20,
          },
          {
            uuid: "6cb576a8-c01f-11ezc-9d64-0242ac120002",
            name: "Leite condensado - Nestlé",
            amount: 20,
          },
        ],
      },
      {
        date: "01-04-2022",
        items: [
          {
            uuid: "6cb576a8-c01fc-11ec-9d64-0242ac120002",
            name: "Leite condensado - Nestlé",
            amount: 20,
          },
          {
            uuid: "6cb576a8-c01f-11ecv-9d64-0242ac120002",
            name: "Leite condensado - Nestlé",
            amount: 20,
          },
        ],
      },
    ],
    nearEndIngredients: [
      {
        uuid: "6cb576a8-c01f-11ec-9d64-02z42ac120002",
        name: "Leite condensado - Nestlé",
        amount: 20,
      },
      {
        uuid: "6cb576a8-c01f-11ec-9d64-0242acg120002",
        name: "Leite condensado - Nestlé",
        amount: 20,
      },
      {
        uuid: "6cb576a8-c01f-11ec-9d64-0242ac12a0002",
        name: "Leite condensado - Nestlé",
        amount: 20,
      },
      {
        uuid: "6cb576a8-c01f-11ec-9d64-0242ac1z20002",
        name: "Leite condensado - Nestlé",
        amount: 20,
      },
    ],
  });

  let config = {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("data")).token,
    },
  };

  const navigate = useNavigate();

  // useEffect(() => {
  //   api
  //     .get("dashboards", config)
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       err.response.status === 401 ? navigate("/login") : console.error(err);
  //       console.error(err);
  //     });
  // }, []);

  return (
    <section
      className={
        props.grow % 2 === 0
          ? "dash-board-home-body-short"
          : "dash-board-home-body-grow"
      }
    >
      <div className="overview-card-dash">
        <OverviewCards
          nearEndIngredients={data.cards.nearEndIngredients}
          productsSoldMonth={data.cards.productsSoldMonth}
          expiredIngredients={data.cards.expiredIngredients}
          monthExpenses={data.cards.monthExpenses}
        />
      </div>
      <div className="near-expire-items-list-dash">
        <NearExpireItemsList dashData={data?.nearExpireIngredients} />
      </div>
      <div className="money-chart-dash">
        <MoneyChart dashData={data?.chart} />
      </div>
      <div className="near-end-itens-dash">
        <NearEndIngredients dashData={data?.nearEndIngredients} />
      </div>
    </section>
  );
};
