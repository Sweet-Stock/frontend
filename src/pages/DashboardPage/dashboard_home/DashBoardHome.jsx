import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import NearExpireItemsList from "./near_expire_items_list/NearExpireItemsList";
import MoneyChart from "./money_chart/MoneyChart";
import NearEndIngredients from "./near_end_ingredients/NearEndIngredients";
import OverviewCards from "./overview_cards/OverviewCards";
import ImportantIcon from "../../images/Box Important.svg";
import api from "../../../services/api";
import "./DashBoardHome.css";

export default (props) => {
  const [hasData, setHasData] = React.useState(null);
  const [data, setData] = React.useState({});

  let config = null;

  let dataStorage = sessionStorage.getItem("data");

  const navigate = useNavigate();

  useEffect(() => {
    if (dataStorage == undefined || dataStorage == "null") return;
    config = {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(sessionStorage.getItem("data")).token,
      },
    };
    api
      .get("dashboards", config)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        res.data.chart.length !== 0 ? setHasData(true) : setHasData(false);
      })
      .catch((err) => {
        err.response.status === 401 ? navigate("/login") : console.error(err);
        console.error(err);
      });
  }, []);

  switch (hasData) {
    case false:
      return (
        <section
          className={
            props.grow % 2 === 0
              ? "dash-board-home-body-short"
              : "dash-board-home-body-grow"
          }
        >
          <div className="dash-board-home-body-no-content">
            <img src={ImportantIcon} alt="" />
            <h1>Insira dados, para que gerar seus relatórios</h1>
          </div>
        </section>
      );

    case true:
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
              nearEndIngredients={data?.cards?.nearEndIngredients}
              productsSoldMonth={data?.cards?.productsSoldMonth}
              expiredIngredients={data?.cards?.expiredIngredients}
              monthExpenses={data?.cards?.monthExpenses}
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
    default:
      return (
        <section
          className={
            props.grow % 2 === 0
              ? "dash-board-home-body-short"
              : "dash-board-home-body-grow"
          }
        ></section>
      );
  }
};
