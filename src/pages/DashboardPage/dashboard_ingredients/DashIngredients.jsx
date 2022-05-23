import PlusBtn from "../../images/plusbtn.svg";

import { DashboardIngredients } from "../../components/Ingredient_modal_card/IngredientsCardDash";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import DashBoardIngredientsPage from "./dashboard_ingredients_cards_page/DashBoardIngredientsPage";
import DashboardIngredientsForm from "./dashboard_ingredients_form_page/DashboardIngredientsForm";

export default ({ grow }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(true);

  switch (page) {
    case true:
      return <DashBoardIngredientsPage setPage={setPage} grow={grow} />;
    case false:
      return <DashboardIngredientsForm setPage={setPage} grow={grow} />;

    default:
      break;
  }
};
