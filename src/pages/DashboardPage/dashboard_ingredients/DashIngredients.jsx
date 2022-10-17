import PlusBtn from "../../images/plusbtn.svg";
import { DashboardIngredients } from "../../components/Ingredient_modal_card/IngredientsCardDash";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import DashBoardIngredientsPage from "./dashboard_ingredients_cards_page/DashBoardIngredientsPage";
import DashboardIngredientsForm from "./dashboard_ingredients_form_page/DashboardIngredientsForm";

export default ({ grow }) => {
  const [page, setPage] = useState("page");

  switch (page) {
    case "page":
      return <DashBoardIngredientsPage setPage={setPage} grow={grow} />;
    case "form":
      return <DashboardIngredientsForm setPage={setPage} grow={grow} />;

    default:
      break;
  }
};
